# Scrambled Squares

Twin sisters Sophie and Samantha recently received a set of puzzles for their birthday.  Each puzzle consists of a collection square tiles.  Each of the four edges of the square tiles contains a single digit integer in the interval `[0, 9]`.

An example of a single tile is pictured below:

    \ 5 /
    3 X 4
    / 9 \

The object of the puzzle is to fit all the tiles together in a rectangular formation such that all the adjacent edges have matching numbers.  Here is an example of a solved 2x2 puzzle:

    \ 5 / \ 1 /
    3 X 4 4 X 0
    / 9 \ / 0 \
    \ 9 / \ 0 /
    1 X 0 0 X 3
    / 5 \ / 8 \

Here is an example of a solved 3x2 puzzle:

    \ 5 / \ 1 / \ 2 /
    3 X 4 4 X 0 0 X 1
    / 9 \ / 0 \ / 6 \
    \ 9 / \ 0 / \ 6 /
    1 X 0 0 X 3 3 X 7
    / 5 \ / 8 \ / 1 \

A valid solution must use all specified tiles exactly once.  The edges of each tile in a solution must match with those of any adjacent tiles.

## Input Format
The first line of input consists of two space separated integers _w_ and _h_, representing the width and height respectively of the puzzle, with _1 <= w <= 32_ and _1 <= h <= 32_.
The next _w * h_ lines of input specifies each of tiles to be used in solving the puzzle.  Each line specifying a tile consists of exactly four space separated integers in the range `[0, 9]`.  Each of the four integers specifies the value of one of the edges of the tile in clockwise order beginning at the top (that is, _top_, _right_, _bottom_, _left_). For example, the line `1 2 3 4` would specify the tile:

    \ 1 /
    4 X 2
    / 3 \

There is exactly one solution to each puzzle.  You should not rotate any tiles from their original specified orientation in order to solve the puzzle.

## Output Format
You must output your solution to each puzzle in a grid format shown below.  Every tile in the output should be exactly 5 characters wide by 3 characters high (don't forget the spaces!), with a single horizontal space between tiles.

### Example Input 1

    2 2
    2 1 3 2
    3 6 7 0
    5 6 7 1
    7 5 4 6

### Example Output 1

    \ 2 / \ 5 /
    2 X 1 1 X 6
    / 3 \ / 7 \
    \ 3 / \ 7 /
    0 X 6 6 X 5
    / 7 \ / 4 \

### Example Input 2

    3 1
    7 1 0 6
    5 6 1 4
    1 0 2 1

### Example Output 2

    \ 5 / \ 7 / \ 1 /
    4 X 6 6 X 1 1 X 0
    / 1 \ / 0 \ / 2 \
