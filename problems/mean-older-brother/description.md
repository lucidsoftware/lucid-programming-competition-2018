# Mean Older Brother

An older brother has (as usual) gotten tired of his annoying little brother so he has devised a game to get rid of him for good. He proposes a game of modified "Simon Says". Older brother will give little brother a series of instructions: take one step forward (F), turn to the right (R), or turn to the left (L). Little brother must repeat the series of instructions until he returns to where he started.

Little brother is excited to play with older brother but is suspicious that older brother will give him a series of instructions that will never return him back to where he started. He decides to write a program to see how many times he will have to repeat the sequence to return to where he started, or if his brother is trying to send him on a never ending journey.

### Note:

Passing through the starting position in the middle of a sequence does not count. Little brother must end a sequence in the same position he started in, regardless of the direction he is facing.

## Input

The input is given as one line of the characters 'F', 'R', and 'L' indicating a sequence of instructions that little brother must repeatedly do. 'F' indicates that little brother should move one step Forward. 'R' indicates that little brother should rotate 90 degrees to the Right. 'L' indicates that little brother should rotate 90 degrees to the Left.

## Output

Print out the number of moves it takes little brother to return to his starting position (at the end of a sequence and regardless of the direction he is facing). If little brother will never return to his starting position, print -1.


## Examples

<table>
    <tr>
        <th>Input 1</th>
        <th>Input 2</th>
    </tr>
    <tr>
        <td>
            <pre>FR</pre>
        </td>
        <td>
            <pre>FRRFFRRFF</pre>
        </td>
    </tr>
    <tr>
        <th>Output 1</th>
        <th>Output 2</th>
    </tr>
    <tr>
        <td>
            <pre>4</pre>
        </td>
        <td>
            <pre>-1</pre>
        </td>
    </tr>

</table>