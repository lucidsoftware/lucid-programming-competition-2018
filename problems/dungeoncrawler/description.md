# Dungeon Crawler

You are an adventurer and a local NPC will pay you handsomely for a list of valuable treasures. There are many dungeons, each dungeon will reward you with one treasure. No two dungeons have the same name or reward you with the same treasure. In order to unlock a dungeon to enter it, you will need to hold **zero or more** specific treasures (which you obtain from other dungeons).

> Note: A dungeon may require treasures that don't exist or are unobtainable

> Note: All dungeon names and treasure names only contain lowercase `a-z`

The NPC has told many adventurers about these treasures, so time is of the essence. In order to enter a dungeon, you must have the required treasures. When deciding which treasures to collect first you choose the one that requires you to visit the smallest number of dungeons. If there are two or more equally good choices, visit the dungeons in alphabetical order.

> Note: You may not have to complete every dungeon to collect all the requested treasures

## Input
The first line is, **N** `(1 <= N <= 1000)`, the number of dungeons.

The second line is the list of treasures that you are trying to obtain (in no particular order).

The next **N** lines describe the dungeons in the following format:
>`DUNGEON_NAME REWARD_TREASURE_NAME X [REQUIRED_TREASURE_NAME ...]`
>
>Where **X** `(0 <= X <= 1000)` is the number of following treasures.


## Output
Output the shortest space-separated list of dungeons you’d have to complete in order to obtain the treasures. If it is not possible to obtain **all** the requested treasures, output: `not possible`

## Examples
<table>
    <tr>
        <th width="50%">Input 1</th>
        <th>Input 2</th>
    </tr>
    <tr>
        <td>
            <pre>
5
diamond ruby
darkertombs bluekey 1 brownkey
lonelymazes brownkey 0
granitelair diamond 2 bluekey redkey
dreaddelves ruby 1 brownkey
boilingpits redkey 1 brownkey
</pre>
        </td>
        <td>
            <pre>
2
apple
a orange 1 apple
b apple 1 orange
</pre>
        </td>
    </tr>
    <tr>
        <th>Output 1</th>
        <th>Output 2</th>
    </tr>
    <tr>
        <td>
            <pre>lonelymazes dreaddelves boilingpits darkertombs granitelair</pre>
        </td>
        <td>
            <pre>not possible</pre>
        </td>
    </tr>
    <tr>
        <th>Explanation 1</th>
        <th>Explanation 2</th>
    </tr>
    <tr>
        <td>It is faster to get the `ruby` than the `diamond`, so get the `ruby` first. Next when obtaining the `diamond`, remember that we already have the `brownkey`. We need to get the `bluekey` and `redkey` neither of which requires visiting any other dungeons first, so we go visit the boilingpits first. (Because `boilingpits` is alphabetically less than `darkertombs`.)</td>
        <td>It is not possible to obtain the `apple`, because dungeons `a` and `b` form a cycle in their dependencies.</td>
    </tr>
</table>
<br>
<br>
<hr>
<br>
<br>
<table>
    <tr>
        <th width="50%">Input 3</th>
        <th>Input 4</th>
    </tr>
    <tr>
        <td>
            <pre>
6
give up
up up 2 na you
never never 0
gon gon 1 never
give give 2 na gon
you you 0
na na 1 gon
</pre>
        </td>
        <td>
            <pre>
1
gold
narnia gold 1 unicorn
</pre>
        </td>
    </tr>
    <tr>
        <th>Output 3</th>
        <th>Output 4</th>
    </tr>
    <tr>
        <td>
            <pre>never gon na give you up</pre>
        </td>
        <td>
            <pre>not possible</pre>
        </td>
    </tr>
    <tr>
        <th>Explanation 1</th>
        <th>Explanation 2</th>
    </tr>
    <tr>
        <td>We're no strangers to love. You know the rules and so do I. We believe you can solve this problem.</td>
        <td>Unicorns don't exist, so you can't enter `narnia`.</td>
    </tr>
</table>