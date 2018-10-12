import sys

s = input()
n = int(input())
h = int(input())
font = {}
for _ in range(n):
    c = sys.stdin.readline()[:-1]
    font[c] = []
    for _ in range(h):
        font[c].append(sys.stdin.readline()[:-1])

for r in range(h):
    for c in s:
        sys.stdout.write(font[c][r])
        sys.stdout.flush()
    sys.stdout.write('\n')