#!/usr/bin/env pypy3
import heapq
import sys

# allow for recusion; easier to follow
sys.setrecursionlimit(1000 * 3)

# input
n = int(input())
goals = input().split()
names = {}
deps = {}
for _ in range(n):
    name, value, _, *deps_ = input().split()
    names[value] = name
    deps[value] = deps_

valid_stack = set()
valid = set()

# check that goal's deps are not missing or cyclical
def goal_valid(goal):
    if goal in valid:
        return True
    if goal in valid_stack or goal not in deps:
        return False
    valid_stack.add(goal)
    result = all(map(goal_valid, deps[goal]))
    valid.add(goal)
    return result

if not all(map(goal_valid, goals)):
    print('not possible')
    sys.exit(0)

result = []
visited = set()

# calculate cost of reaching goal
def goal_cost(goal):
    visited_ = set()
    def visit(goal):
        if goal in visited or goal in visited_:
            return
        visited_.add(goal)
        for dep in deps[goal]:
            visit(dep)
    visit(goal)
    return len(visited_)

prefix = []

# obtain goals
def resolve_goals(goals):
    # the number of resolved goals since function start
    current_time = 0
    # heap of (total, name, value, cost)
    # total is the time plus cost
    costs = []
    for goal in goals:
        cost = goal_cost(goal)
        heapq.heappush(costs, (current_time + cost, names[goal], goal, cost))
    while costs:
        total, name, value, cost = heapq.heappop(costs)
        if value in visited:
            continue
        while costs:
            other_total, other_name, other_value, other_cost = costs[0]
            # assume that everything resolved since the last cost calculations
            # has not gone to the current candidate and has gone to the new
            # candidate
            if (cost, name) <= (other_total - current_time, other_name):
                # the current candidate is better
                break
            # update new candidate cost
            other_cost = goal_cost(other_value)
            other_total = current_time + other_cost
            # select and reject
            if (cost, name) <= (other_cost, other_name):
                # the current candidate is better
                worse = (other_total, other_name, other_value, other_cost)
            else:
                # the new candidate is better
                worse = (total, name, value, cost)
                total, name, value, cost = \
                    other_total, other_name, other_value, other_cost
            heapq.heappop(costs)
            heapq.heappush(costs, worse)
        # resolve the chosen candidate
        visited.add(value)
        prefix.append(None)
        current_time += 1 + resolve_goals(deps[value])
        prefix.pop()
        result.append(name)
    return current_time

resolve_goals(goals)

print(' '.join(result))