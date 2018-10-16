(lambda cards, rounds: print('\n'.join([list(set(map(str, range(1, int(cards)+1))) - set(input().split()))[0] for _ in range(int(rounds))])))(*input().split())
