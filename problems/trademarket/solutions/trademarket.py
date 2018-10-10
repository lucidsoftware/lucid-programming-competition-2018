def get_max_profit(prices):
    max_profit = prices[1] - prices[0]
    current_min = prices[0]

    for price in prices[1:]:
        max_profit = max(max_profit, price - current_min)
        current_min = min(current_min, price)

    return max_profit

prices = [int(x) for x in input().split()]

print(get_max_profit(prices))