const getMaxProfit = input => {
    const prices = input.split(' ').map(price => parseInt(price));

    let maxProfit = prices[1] - prices[0];
    let currentMin = prices[0];

    for (let i = 1; i < prices.length; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - currentMin);
        currentMin = Math.min(currentMin, prices[i]);
    }

    return maxProfit;
}



const chunks = [];
process.stdin.on('data', d => chunks.push(d));

process.stdin.on('end', () => {
    const data = chunks.join('').trim();
    console.log(getMaxProfit(data));
});