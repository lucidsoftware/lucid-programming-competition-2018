def get_max_profit(prices):
    max_profit = prices[1] - prices[0]
    current_min = prices[0] + 1

    for i, price in enumerate(prices):
        if price < current_min:
            current_min = price
            for price_2 in prices[i + 1:]:
                max_profit = max(max_profit, price_2 - current_min)

    return max_profit

prices = [int(x) for x in input().split()]

print(get_max_profit(prices))