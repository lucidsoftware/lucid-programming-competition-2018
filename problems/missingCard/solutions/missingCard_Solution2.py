def find_missing():
    values = [int(i) for i in input().split()]
    for card in deckCards :
        if card not in values:
            return card


cards, rounds = [int(x) for x in input().split()]
deckCards = [int(y) for y in range(1,cards+1)]
print('\n',deckCards)

for round in range(rounds):
    print(find_missing())
