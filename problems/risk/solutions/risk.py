from collections import defaultdict
from itertools import product
from functools import lru_cache
from sys import setrecursionlimit
setrecursionlimit(10000)

@lru_cache(maxsize=6)
def p_outcomes(a_dice, d_dice):
    total = 0
    results = defaultdict(int)
    for a_rolls in product(range(1,7), repeat=a_dice):
        for d_rolls in product(range(1,7), repeat=d_dice):
            a_sorted = reversed(sorted(a_rolls))
            d_sorted = reversed(sorted(d_rolls))

            a_deaths = 0
            d_deaths = 0
            for a, d in zip(a_sorted, d_sorted):
                if a > d:
                    d_deaths += 1
                else:
                    a_deaths += 1

            results[(a_deaths, d_deaths)] += 1
            total += 1
    return [(result, count/total) for result, count in results.items()]

@lru_cache(maxsize=None)
def p_victory(attackers, defenders):
    a_dice = min(attackers-1, 3)
    d_dice = min(defenders, 2)
    if a_dice <= 0:
        return 0
    if d_dice <= 0:
        return 1

    total = 0
    for (a_deaths, d_deaths), probability in p_outcomes(a_dice, d_dice):
        total += probability * p_victory(attackers - a_deaths, defenders - d_deaths)

    return total

for _ in range(int(input())):
    attackers, defenders = map(int, input().split())
    print("{0:.7f}".format(p_victory(attackers, defenders)))
