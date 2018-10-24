# Rectangle

Pat and Avery are secretive people. They're honest, but not <i>too</i> honest. They don't say more than they have to.

When they are together, their friend Kendall says she is thinking of a rectangle with integer dimensions `w` and `h`, such that `L ≤ w ≤ h ≤ U`. She says she will give Pat the perimeter and Avery the area. She then privately gives the perimeter to Pat and the area to Avery.

They then have the following honest conversation.

> <b>Avery:</b> I don't know what `w` and `h` are.<br>
> <b>Pat:</b> I knew that.<br>
> <b>Avery:</b> Now I know what they are.<br>
> <b>Pat:</b> I now know too.

In additional to being honest, both Pat and Avery are very smart. They use all the information they have available.

What are the possible values for `w` and `h`?


## Input

Input is two lines. The first line is the integer `L`, and the second line is the integer `U`.

<pre>1 ≤ L ≤ U ≤ 1000</pre>

## Output

Ouput the possible values for `w` and `h`. Use one line for each pair, and separate the numbers in pair by a single space.

Sort by `w` and then by `h`.

It may be that there are no possibilties. (In that case, Kendall must've made a mistake.)

## Examples

<table>
    <tr>
        <th>Input</th>
        <th>Input</th>
    </tr>
    <tr>
        <td>
            <pre>1
15</pre>
        </td>
        <td>
            <pre>2
865</pre>
        </td>
    </tr>
    <tr>
        <th>Output</th>
        <th>Output</th>
    </tr>
    <tr>
        <td>
            <pre>1 4
3 4</pre>
        </td>
        <td>
            <pre>4 13</pre>
        </td>
    </tr>
</table>