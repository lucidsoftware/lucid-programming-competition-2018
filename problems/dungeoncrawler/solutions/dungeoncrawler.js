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
    const targets = new Set(targetRaw.split(/\s+/));
    const dungeons = dungeonsRaw.map(r => {
      const [, name, reward, count, treasuresRaw] =
          r.match(/^([^\s]+)\s+([^\s]+)\s+(\d+)\s*(.*)$/)
              .concat(/* Make the regex result a real array */);
      const treasures = treasuresRaw.length ? treasuresRaw.split(/\s+/) : [];

      // Validate input
      if (count != treasures.length) {
        throw new Error('Bad Input');
      }
      return {
        name, reward, treasures, height: 0
      }
    });

    // Validate input
    if (numDungeons != dungeons.length) {
      throw new Error('Bad Input');
    }
    const seenDungeonNames = new Set();
    const seenTreasureNames = new Set();
    dungeons.forEach(d => {
      if (seenDungeonNames.has(d.name) || seenTreasureNames.has(d.reward)) {
        throw new Error('Bad Input');
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
    let plan = [];  // The list of dungeons we're going to visit
    const treasureSack = new Set();  // The treasures we've gotten

    function clearHeights() {
      dungeons.forEach(d => d.height = 0)
    }

    /**
     *
     * @param {((typeof dungeons[0])[]} stack
     * @param {typeof dungeons[0]} d
     */
    function getHeight(stack, d) {
      if (stack.indexOf(d) >= 0) {
        throw new Error(
            `Cycle ${stack.map(d => d.reward).join('->')}->${d.reward}`);
      }
      stack.push(d);
      if (d.height == 0) {
        d.height = 1 +
            Math.max(
                0,
                ...(d.treasures.filter(t => !treasureSack.has(t))
                        .map(getDungeonOrThrow)
                        .map(getHeight.bind(this, stack))));
      }
      stack.pop(d);
      return d.height;
    }


    /**
     * @param {string} treasure
     * @param {(typeof dungeons[0])[]} visited
     */
    function getDeps(treasure, visited) {
      const d = getDungeonOrThrow(treasure);
      if (visited.indexOf(d) >= 0) {
        return visited;
      }

      d.treasures
          // Remove already obtained treasures from the list
          .filter(t => !treasureSack.has(t))
          // Map the treasures to the dungeons that reward them
          .map(getDungeonOrThrow)
          // Sort according to the rules
          .sort((d1, d2) => d1.name.localeCompare(d2.name))
          // Recursivly get their deps
          .forEach(d => getDeps(d.reward, visited));

      visited.push(d);
      return visited;
    }



    /**
     *
     * @param {typeof dungeons[0]} d
     */
    function visitDungeon(d) {
      plan.push(d.name);
      treasureSack.add(d.reward);
      targets.delete(d.reward);
    }

    // We put this in a while loop,
    // getting the first treasure may affect the number of
    // dependencies required for the rest of the treasures
    while (targets.size > 0) {
      clearHeights();

      getDeps(
        [...targets]
          // V8's sort is stable afaik so we sort alphabetically first
          .sort()
          .map(getDungeonOrThrow)
          .map(d => {
            getHeight([], d)
            return d
          })
          // Go for the treasure with least dependencies first
          .sort((d1, d2) => d1.height - d2.height)
          // Get the first one
          .shift().reward, []
        )
        .forEach(visitDungeon);
    }

    return plan.join(' ');
  } catch (e) {
    // Uncomment for more information why it's Not Possible
    // console.log(e);
    return 'Not Possible';
  }
}