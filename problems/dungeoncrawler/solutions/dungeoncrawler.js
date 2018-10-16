// @ts-check

const chunks = [];
process.stdin.on('data', d => chunks.push(d));

process.stdin.on('end', () => {
  const data = chunks.join('').trim();
  console.log(solveProblem(data));
});

/**
 * @param {string} data
 */
function solveProblem(data) {
  try {
    /*********** Process Input ***********/
    const [numDungeons, targetRaw, ...dungeonsRaw] = data.split('\n');
    const targets = targetRaw.split(' ');

    // Note: I'm validating input with regex, you should just split on spaces.
    const dungeons = dungeonsRaw.map(r => {
      const [, name, reward, count, dependenciesRaw] =
          r.match(/^([a-z]+) ([a-z]+) (\d+)\s?([a-z ]*)$/)
              .concat(/* Make the regex result a real array */);
      const dependencies =
          dependenciesRaw.length ? dependenciesRaw.split(' ') : [];

      // Validate input
      if (+count != dependencies.length) {
        throw new Error(`Bad Input\n Got ${dependencies.length} but expected ${
            count} treasures for ${name}`);
      }

      return {
        name, reward, dependencies
      }
    });

    // Validate input
    if (+numDungeons != dungeons.length) {
      throw new Error(`Bad Input\n Got ${dungeons.length} but expected ${
          numDungeons} dungeons`);
    }
    const seenDungeonNames = new Set();
    const seenTreasureNames = new Set();
    dungeons.forEach(d => {
      if (seenDungeonNames.has(d.name) || seenTreasureNames.has(d.reward)) {
        throw new Error(`Bad Input\n Duplicate dungeon or treasure name, ${
            d.name} ${d.reward}`);
      }
      seenDungeonNames.add(d.name);
      seenTreasureNames.add(d.reward);
    });


    /**
     * @type {Map<string, typeof dungeons[0]>}
     */
    const treasureMap = new Map();
    dungeons.forEach(d => treasureMap.set(d.reward, d));

    /**
     * @param {string} t
     */
    function getDungeonOrThrow(t) {
      if (treasureMap.has(t)) {
        return treasureMap.get(t)
      }

      throw new Error(`${t} not provided.`)
    }










    /*********** Solution ****************/

    /**
     * @param {((typeof dungeons[0])[])} stack
     * @param {typeof dungeons[0]} dungeon
     */
    function getDeps(stack, dungeon) {
      if (cachedDeps.has(dungeon)) {
        return cachedDeps.get(dungeon);
      }
      if (stack.indexOf(dungeon) >= 0) {
        throw new Error(
            `Cycle ${stack.map(d => d.reward).join('->')}->${dungeon.reward}`);
      }
      stack.push(dungeon);


      const dependencies = new Set([dungeon]);
      cachedDeps.set(dungeon, dependencies);

      dungeon.dependencies.map(getDungeonOrThrow)
          .map(d => getDeps(stack, d))
          .forEach(deps => {
            deps.forEach(dep => {
              dependencies.add(dep);
            });
          });


      stack.pop();
      return cachedDeps.get(dungeon);
    }

    /** @type {Map<typeof dungeons[0], Set<(typeof dungeons[0])>>} */
    const cachedDeps = new Map();

    // Calculate starting dependencies for each dungeon
    targets.map(getDungeonOrThrow).map(getDeps.bind(this, []));

    /** @type {string[]} */
    const plan = [];  // The list of dungeons we're going to visit
    const treasureSack = new Set();  // The treasures we've collected

    /**
     *
     * @param {typeof dungeons[0]} dungeon
     */
    function visitDungeon(dungeon) {
      plan.push(dungeon.name);
      treasureSack.add(dungeon.reward);
      cachedDeps.forEach(e => {
        e.delete(dungeon);
      })
    }

    /**
     * @param {string[]} treasures
     */
    function getTreasures(treasures) {
      while (treasures.length > 0) {
        const nextDungeon = treasures
                                .map(getDungeonOrThrow)
                                // Sort according to the rules
                                .sort(
                                    (d1, d2) => (cachedDeps.get(d1).size -
                                                 cachedDeps.get(d2).size) ||
                                        d1.name.localeCompare(d2.name))
                                // Get the first one
                                .shift();
        getTreasures(
            nextDungeon.dependencies.filter(t => !treasureSack.has(t)));
        visitDungeon(nextDungeon);

        treasures = treasures.filter(t => !treasureSack.has(t));
      }
    }
    getTreasures(targets);

    return plan.join(' ');
  } catch (e) {
    // Uncomment for more information why it's not possible
    // console.log(e);
    return 'not possible';
  }
}