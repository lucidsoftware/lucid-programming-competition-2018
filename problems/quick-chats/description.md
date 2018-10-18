# Quick Chats

Generic Game Studios Inc. is a game company with an open floor plan. It's great for communication, but sometimes it feels *too* open, because it's not always clear how to most efficiently plan a route to a coworker. In addition to the raw distance from one desk to another, passing by a desk always seems to trigger a conversation with the person sitting at that desk. Help GGS employees find their way quickly through the office.

## Notes

- The distance from one employee's desk to their own desk is always zero, and the time they talk to themselves is zero (no one practices rubber duck debugging here).
- Each employee has their own level of chattiness, and will talk to any other passing employee for the same amount of time.
- Because of the strange floorplan, it doesn't necessarily take the same amount of time to walk from  **A**'s  desk to  **B**'s  desk as it does from  **B**'s  desk to  **A**'s.
- In order to "arrive" at a desk, the conversation between  **A**  and  **B**  must conclude. Employees at GGS are very polite.

## Input

The first line contains a single integer  **N**, the number of employees on the floor. The following  **N** lines contain a string and an integer  **t**, separated by a single space, which represent the first name of the employee and how long they talk to passing coworkers, respectively.

The next line contains a single integer  **M**, the number of pairs of desks that have a path between them. The following  **M**  lines contain a pair of names and an integer  **d**  the amount of time it takes to walk between them, separated by single spaces.

The last line contains two strings,  **S**  and  **D**, the names of two employees.

## Contraints

- 1 <= **N** <= 100
- 1 <= **t** <= 100
- 1 <= **M** <= 10000
- 1 <= **d** <= 100

## Output

Print the minimum amount of time it will take for  **S**  to reach  **D**'s  desk and finish talking to them, or -1 if there is no path from  **S**  to  **D**.


## Examples

<table>
    <tr>
        <th>Input 1</th>
        <th>Input 2</th>
    </tr>
    <tr>
        <td>
            <pre>
1
Solo 10
1
Solo Solo 1
Solo Solo
            </pre>
        </td>
        <td>
            <pre>
3
Connor Kevin Jared
4
Connor Kevin 1 480
Jared Kevin 2 5
Connor Jared 1 0
Kevin Jared 2 0
Connor Kevin
            </pre>
        </td>
        <td>
            <pre>
3
Connor Kevin Jared
3
Connor Jared 1 0
Kevin Jared 2 0
Jared Connor 2 2
Connor Kevin
            </pre>
        </td>
    </tr>
    <tr>
        <th>Output 1</th>
        <th>Output 2</th>
    </tr>
    <tr>
        <td>
            <pre>0</pre>
        </td>
        <td>
            <pre>8</pre>
        </td>
        <td>
            <pre>-1</pre>
        </td>
    </tr>

</table>