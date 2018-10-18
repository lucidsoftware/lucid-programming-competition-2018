#!/usr/bin/python3

import random

MAX_COST = 50
MAX_TIME = 100

def pickTwo(l):
	n = len(l)
	i = random.randint(0, n-1)
	x = l[i]
	l2 = list(set(l).difference(set([x])))
	j = random.randint(0, n-2)
	y = l2[j]
	return [x, y]

random.seed()

n = int(input())
m = min(n*(n-1), int(input()))

nodes = [chr(x) for x in range(ord('A'), ord('A') + n)]

print(n)
print(' '.join(nodes))

print(m)
picked_pairs = set()
for i in range(m):
	x, y = (-1, -1)
	while (x, y) in picked_pairs or (x, y) == (-1, -1):
		x, y = pickTwo(nodes)
	picked_pairs.add((x, y))
	c = random.randint(0, MAX_COST-1)
	t = random.randint(0, MAX_TIME-1)
	edge = '{0} {1} {2} {3}'.format(x, y, c, t)
	print(edge)

source, dest = pickTwo(nodes)
print(source, dest)
print()
