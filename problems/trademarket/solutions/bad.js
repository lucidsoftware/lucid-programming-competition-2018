const getMaxProfit = input => {
    const prices = input.split(' ').map(price => parseInt(price));

    let maxProfit = prices[1] - prices[0];
    let currentMin = prices[0] + 1;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < currentMin) {
            currentMin = prices[i];
            for (let j = i + 1; j < prices.length; j++) {
                maxProfit = Math.max(maxProfit, prices[j] - currentMin);
            }
        }
    }

    return maxProfit;
}



const chunks = [];
process.stdin.on('data', d => chunks.push(d));

process.stdin.on('end', () => {
    const data = chunks.join('').trim();
    console.log(getMaxProfit(data));
});