def get_max_profit(stocks):
    max_profit = stocks[1] - stocks[0]
    current_min = stocks[0]

    for stock in stocks[1:]:
        max_profit = max(max_profit, stock - current_min)
        current_min = min(current_min, stock)

    return max_profit

tests = int(input())

for _ in range(tests):
    stocks = [int(x) for x in input().split()]

    print(get_max_profit(stocks))