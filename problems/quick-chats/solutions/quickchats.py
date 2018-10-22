#!/usr/bin/python3

import heapq

SENTINEL = 1E9

if __name__ == '__main__':
	n = int(input())
	names = []
	times = {}

	for _ in range(n):
		name, time = input().split()
		names.append(name)
		times[name] = int(time)

	m = int(input())
	graph = {}
	for n in names:
		graph[n] = {}

	for _ in range(m):
		[s, d, c] = input().split()
		graph[s][d] = int(c) + times[d] if s != d else 0

	[source, dest] = input().split()

	dist = {}
	q = []

	for n in names:
		dist[n] = 0 if n == source else SENTINEL
		heapq.heappush(q, (dist[n], n))

	while len(q) > 0:
		(_, u) = heapq.heappop(q)
		for v in graph[u]:
			alt = dist[u] + graph[u][v]
			if alt < dist[v]:
				dist[v] = alt
				heapq.heappush(q, (dist[v], v))

	print(dist[dest] if dist[dest] != SENTINEL else -1)
