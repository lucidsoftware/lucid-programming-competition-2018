const getMaxProfit = input => {
    const stocks = input.split(' ').map(price => parseInt(price, 10));

    let maxProfit = stocks[1] - stocks[0];
    let currentMin = stocks[0];

    for (let i = 1; i < stocks.length; i++) {
        maxProfit = Math.max(maxProfit, stocks[i] - currentMin);
        currentMin = Math.min(currentMin, stocks[i]);
    }

    return maxProfit;
}



const chunks = [];
process.stdin.on('data', d => chunks.push(d));

process.stdin.on('end', () => {
    const data = chunks.join('').trim().split('\n');

    for (let i = 1; i < data.length; i++) {
        console.log(getMaxProfit(data[i]));
    }
});