#!/usr/bin/python3

import collections

L = int(input())
U = int(input())

sums = collections.defaultdict(list)
for x in range(L, U + 1):
	for y in range(x, U + 1):
		sums[x + y].append((x, y))

products = collections.defaultdict(list)
for x in range(L, U + 1):
	for y in range(x, U + 1):
		products[x * y].append((x, y))

# 1. A doesn't know
products = {p:xys for p, xys in products.items() if len(xys) > 1}
# 2. B knows A doesn't know
sums = {s:xys for s, xys in sums.items() if all(x * y in products for x, y in xys)}
# 3. B has only one possibility where A knows B doesn't know
products = {p:xys for p, xys in products.items() if 1 == sum(x + y in sums for x, y in xys)}
# 4. A has only one possibility where B knows after knowing A knows B doesn't know
sums = {s:xys for s, xys in sums.items() if 1 == sum(x * y in products for x, y in xys)}

for x in range(L, U + 1):
	for y in range(x, U + 1):
		if x * y in products and x + y in sums:
			print(x, y)