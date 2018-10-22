function processData(input) {
    const [T,R,B,L] = [0,1,2,3];

    // Parse Input
    const [d, ...g] = input.split('\n');
    const size = d.split(' ');
    const w = +size[0];
    const h = +size[1];
    const tiles = g.filter(r => r.length).map(r => r.split(' '));

    /**
     * Given a partial board, s,
     * a tile, t, and x,y coords
     *
     * Return whether t can be placed at x,y
     */
    const canFit = (s, t, x, y) => {
        if (s[y][x]) {
            return false;
        }
        if (x > 0 && s[y][x-1] && s[y][x-1][R] != t[L]) {
            return false
        }
        if (y > 0 && s[y-1][x] && s[y-1][x][B] != t[T]) {
            return false
        }
        if (x < w-1 && s[y][x+1] && s[y][x+1][L] != t[R]) {
            return false
        }
        if (y < h-1 && s[y+1][x] && s[y+1][x][T] != t[B]) {
            return false
        }

        return true;
    }

    const printTile = (t, r) => {
        const [T,R,B,L] = [0,1,2,3];
        return `\\ ${t[T]} /\n${t[L]} X ${t[R]}\n/ ${t[B]} \\`.split('\n')[r];
    }

    const getNextSpace = (s) => {
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                if (!s[y][x]) {
                    return [x,y];
                }
            }
        }

        throw new Error('Oops');
    }

    /**
     * Given a partially completed board, s,
     * and a set of remaining tiles,
     *
     * Pick an empty space on the board and try every valid tile in the position.
     *
     */
    const solve = (s, tiles) => {
        const [x,y] = getNextSpace(s);

        const attempted = new Set();
        const r = [...tiles].find(t => {
            if (!attempted.has(t.join(' ')) && canFit(s, t, x, y)) {
                s[y][x] = t;
                tiles.delete(t);
                if (tiles.size == 0 || solve(s, tiles)) {
                    // THE SOLUTION!
                    return true;
                }

                // Rollback
                attempted.add(t.join(' '));
                s[y][x] = undefined;
                tiles.add(t);
            }
        });

        if (r) {
            return true;
        }

        return false;
    }

    // Build empty board
    const solution = [];
    for (let y = 0; y < h; y++) {
        solution.push([]);
    }

    if (solve(solution, new Set(tiles)) != true) {
        throw new Error("No valid solution!");
    }

    // Print the board one line at a time.
    solution.forEach(r => {
        console.log(r.map(t => printTile(t,0)).join(' '));
        console.log(r.map(t => printTile(t,1)).join(' '));
        console.log(r.map(t => printTile(t,2)).join(' '));
    })
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
