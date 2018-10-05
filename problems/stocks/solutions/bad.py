def get_max_profit(stocks):
    # print('stocks = %s' % stocks)
    max_profit = stocks[1] - stocks[0]
    current_min = 9999999999999999

    for i, stock in enumerate(stocks):
        if stock < current_min:
            # print('new current_min = %s' % stock)
            current_min = stock
            for stock_2 in stocks[i + 1:]:
                max_profit = max(max_profit, stock_2 - current_min)

    return max_profit

tests = int(input())

for _ in range(tests):
    stocks = [int(x) for x in input().split()]

    print(get_max_profit(stocks))