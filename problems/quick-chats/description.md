# Quick Chats

Generic Game Studios Inc. is a game company with an open floor plan. It's great for communication, but sometimes it feels *too* open, because it's not always clear how to most efficiently plan a route to a coworker. In addition to the raw distance from one desk to another, passing by a desk always seems to trigger a conversation with the person sitting at that desk. Help GGS employees find their way quickly through the office.

## Notes

- Because of the strange floorplan, it doesn't necessarily take the same amount of time to walk from  **A**'s  desk to  **B**'s  desk as it does from  **B**'s  desk to  **A**'s.
- In addition, the amount of time that  **B**  will talk to  **A**  as  **A**  passes by is not necessarily the same as how long  **A**  will talk to  **B**  as  **B**  walks by - some people are more chatty when they're at their desk.
- The distance from one employee's desk to their own desk is always zero, and the time they talk to themselves is zero (no one practices rubber duck debugging here)

## Input

The first line contains a single integer  **N**, the number of employees on the floor. The next line contains  **N**  strings, one for the first name of each employee, separated by a single space. The following line contains a single integer  **M**, the number of pairs of desks with a path between them. The next  **M**  lines are of the format  **n1  n2  d  t**, where:

- **n1** is the name of an employee
- **n2** is the name of another employee
- **d** is an integer representing the amount of time it takes to walk from  **n1**'s  desk to  **n2**'s  desk
- **t** is an integer representing the amount of time that  **n2**  will talk to  **n1**  as  **n1**  passes by  **n2** 's desk

The last line contains two strings,  **S**  and  **D**, the names of two employees.

## Contraints

- 1 <= **N** <= 100
- 1 <= **M** <= 10000
- 1 <= **d** <= 100
- 1 <= **t** <= 100

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
Solo
1
Solo Solo 1 5
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