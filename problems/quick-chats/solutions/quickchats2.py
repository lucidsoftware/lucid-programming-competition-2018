#!/usr/bin/python3

SENTINEL = 1E9

if __name__ == '__main__':
	n = int(input())
	names = input().split()
	m = int(input())

	graph = [[SENTINEL] * n for _ in range(n)]
	for i in range(n):
		graph[i][i] = 0

	for _ in range(m):
		[s, d, c, t] = input().split()
		i, j = [names.index(s), names.index(d)]
		graph[names.index(s)][names.index(d)] = int(c) + int(t) if s != d else 0

	[source, dest] = input().split()

	for i in range(n):
		for j in range(n):
			alt = graph[names.index(source)][i] + graph[i][j]
			if alt < graph[names.index(source)][j]:
				graph[names.index(source)][j] = alt

	dist = graph[names.index(source)][names.index(dest)]
	print(dist if dist != SENTINEL else -1)
