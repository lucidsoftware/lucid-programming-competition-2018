#!/usr/bin/env python
from __future__ import print_function

try:
    message = raw_input()
except:
    message = ''

shift = 3
for char in message:
    if char.isalpha():
        caps = False
        if char.isupper():
            caps = True
            char = char.lower()
        secretChar = chr((ord(char) + shift - 97) % 26 + 97)
        if caps:
            secretChar = secretChar.upper()
        print(secretChar, end='')
        shift += 1
    else:
        print(char, end='')