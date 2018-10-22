const chunks = [];
process.stdin.on('data', d => chunks.push(d));

process.stdin.on('end', () => {
  const data = chunks.join('').trim();
  solve(data);
});

function solve(input) {
    const lines = input.split('\n');
    const totalDungeons = parseInt(lines[0]);
    const requiredItems = lines[1].split(/\s+/).sort();

    const dependencies = new Map();
    const itemDungeon = new Map();

    for(let i=0; i<totalDungeons; i++) {
        let [dungeon, item, depCount, ...deps] = lines[2+i].split(/\s+/);
        dependencies.set(item, deps);
        itemDungeon.set(item, dungeon);
    }

    const path = [];
    const collectedItems = new Set();

    let memoizedCounts = new Map();

    function getCount(item) {
        if(memoizedCounts.has(item)) {
            return memoizedCounts.get(item);
        }
        if(collectedItems.has(item)) {
            return 0;
        }
        const deps = dependencies.get(item);
        const result = 1 + deps.map(getCount).reduce((a,b) => a+b,0);
        memoizedCounts.set(item, result);
        return result;
    }

    function getItems(items) {
        while(!items.every(i => collectedItems.has(i))) {
            memoizedCounts = new Map();
            const itemsToGet = items.filter(i => !collectedItems.has(i));
            const sorted = itemsToGet.map(item => {
                return {
                    numToVisit: getCount(item),
                    item,
                };
            }).sort((a,b) => {
                return a.numToVisit - b.numToVisit || itemDungeon.get(a.item).localeCompare(itemDungeon.get(b.item));
            });
            getItems(dependencies.get(sorted[0].item));
            path.push(itemDungeon.get(sorted[0].item));
            collectedItems.add(sorted[0].item);
        }
    }

    try {
        getItems(requiredItems);
        console.log(path.join(' '));
    } catch(e) {
        // console.log(e);
        console.log('not possible');
    }
}