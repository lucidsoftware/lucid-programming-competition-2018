function solve(input) {
    const lines = input.split('\n');
    const totalDungeons = parseInt(lines[0]);
    const requiredItems = lines[1].split(/\s+/);

    const dependencies = new Map();
    const itemDungeon = new Map();

    for(let i=0; i<totalDungeons; i++) {
        let [dungeon, item, depCount, ...deps] = lines[2+i].split(/\s+/);
        dependencies.set(item, deps);
        itemDungeon.set(item, dungeon);
    }

    const path = [];
    const collectedItems = new Set();
    let transitiveDeps = new Map();

    function getTransitiveDeps(item) {
        if(transitiveDeps.has(item)) {
            return transitiveDeps.get(item);
        }
        const result = new Set([item]);
        const deps = dependencies.get(item);
        deps.forEach(i => {
            getTransitiveDeps(i).forEach(i => result.add(i));
        });
        transitiveDeps.set(item, result);
        return result;
    }

    function collectItem(item) {
        path.push(itemDungeon.get(item));
        collectedItems.add(item);
        transitiveDeps.forEach(items => items.delete(item));
    }

    function getItems(items) {
        while(!items.every(i => collectedItems.has(i))) {
            const sorted = items.filter(i => !collectedItems.has(i)).map(item => {
                return {
                    numToVisit: transitiveDeps.get(item).size,
                    item,
                };
            }).sort((a,b) => {
                return a.numToVisit - b.numToVisit || itemDungeon.get(a.item).localeCompare(itemDungeon.get(b.item));
            });
            getItems(dependencies.get(sorted[0].item));
            collectItem(sorted[0].item);
        }
    }

    try {
        requiredItems.forEach(getTransitiveDeps);
        getItems(requiredItems);
        console.log(path.join(' '));
    } catch(e) {
        console.log('not possible');
    }
}

const chunks = [];
process.stdin.on('data', d => chunks.push(d));

process.stdin.on('end', () => {
  const data = chunks.join('').trim();
  solve(data);
});