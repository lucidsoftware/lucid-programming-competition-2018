import sys

with open('3.in', 'r') as file:
    s = file.readline().strip()
    n = int(file.readline())
    h = int(file.readline())
    font = {}
    for _ in range(n):
        c = file.readline()[:-1]
        font[c] = []
        for _ in range(h):
            font[c].append(file.readline()[:-1])

    for r in range(h):
        for c in s:
            sys.stdout.write(font[c][r])
            sys.stdout.flush()
        sys.stdout.write('\n')