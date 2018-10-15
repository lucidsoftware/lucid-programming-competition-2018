# Dungeon Crawler

You are an adventurer and a local NPC will pay you handsomely for a list of valuable treasures. There are many dungeons, each dungeon will reward you with one treasure. No two dungeons have the same name or reward you with the same treasure. In order to unlock a dungeon to enter it, you will need to hold **zero or more** specific treasures (which you obtain from other dungeons).

> Note: A dungeon may require treasures that don't exist or are unobtainable

The NPC has told many adventurers about these treasures, so time is of the essence. You decide that the first treasure you should get will be the treasure which requires completing the fewest dungeons. The next treasure will then be the next fewest (remembering that you may already have some treasures at this point.) *If there are two or more equally good choices for the next treasure, choose the alphabetically least one.*

> Note: You may not have to complete every dungeon to collect all the requested treasures

## Input
The first line is, **N** `(1 <= N <= 1000)`, the number of dungeons.

The second line is the list of treasures that you are trying to obtain (in no particular order).

The next **N** lines describe the dungeons in the following format:
>`DUNGEON_NAME REWARD_TREASURE_NAME X [REQUIRED_TREASURE_NAME ...]`
>
>Where **X** `(0 <= X <= 1000)` is the number of following treasures.


## Output
Output the shortest space-separated list of dungeons you’d have to complete in order to obtain the treasures. *If there are two or more dungeons you can complete in any order, go through these dungeons in alphabetical order.* If it is not possible to obtain **all** the requested treasures, output: `Not Possible`

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
Diamond Ruby
DarkerTombs BlueKey 1 BrownKey
LonelyMazes BrownKey 0
GraniteLair Diamond 2 BlueKey RedKey
DreadDelves Ruby 1 BrownKey
BoilingPits RedKey 1 BrownKey
</pre>
        </td>
        <td>
            <pre>
2
Apple
A Orange 1 Apple
B Apple 1 Orange
</pre>
        </td>
    </tr>
    <tr>
        <th>Output 1</th>
        <th>Output 2</th>
    </tr>
    <tr>
        <td>
            <pre>LonelyMazes DreadDelves BoilingPits DarkerTombs GraniteLair</pre>
        </td>
        <td>
            <pre>Not Possible</pre>
        </td>
    </tr>
    <tr>
        <th>Explanation 1</th>
        <th>Explanation 2</th>
    </tr>
    <tr>
        <td><pre>It is faster to get the Ruby than the Diamond, so get that first. <br>When obtaining the Diamond, remember that we already have the BrownKey. <br>We need to get the BlueKey and RedKey in any order, so we go visit the BoilingPits first. <br>(because BoilingPits is alphabetically less than DarkerTombs)</pre></td>
        <td><pre>It is not possible to obtain the Apple, because dungeons A and B form a cycle in their dependencies.</pre></td>
    </tr>
</table>
