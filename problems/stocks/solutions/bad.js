const getMaxProfit = input => {
    const stocks = input.split(' ').map(price => parseInt(price));

    let maxProfit = stocks[1] - stocks[0];
    let currentMin = Number.MAX_VALUE;

    for (let i = 0; i < stocks.length; i++) {
        if (stocks[i] < currentMin) {
            currentMin = stocks[i];
            for (let j = i + 1; j < stocks.length; j++) {
                maxProfit = Math.max(maxProfit, stocks[j] - currentMin);
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