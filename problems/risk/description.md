# Risky Business

Despite your better judgement, you have agreed to play a game of Risk with some friends.
In order to make the best of this unfortunate situation, and maximize your chances of winning, you have decided to write a program to calculate the probability of being able to capture a territory, given the number of armies on each side.
With this program's help you'll be able to know your chances of victory before you start a land war in Asia.

### Rules
In Risk, territory is gained by attacking a neighboring territory using at least 2 armies. The attack is successful if you defeat all of the armies defending that territory in a series of battles. The attack is unsuccessful if you don't have at least 2 armies to continue the attack. Each battle is decided by the roll of 2 to 5 six-sided dice according to the following rules:

- You, the attacker, will roll 1, 2 or 3 dice: You must have at least one more army in your territory than the number of dice you roll.
- The defender will roll either 1 or 2 dice: To roll 2 dice, he or she must have at least 2 armies on the territory under attack.
- To decide a battle, compare the highest die each of you rolled. If yours (the attacker’s) is higher, the defender loses one army from the territory under attack. But if the defender’s die is equal to or higher than yours, you lose one army from the territory you attacked from.
- If each of you rolled more than one die, now compare the two next-highest dice and repeat the process.

Some examples:

- Attacker rolls 3 dice: 6, 1, 1. Defender rolls 1 die: 3.
  - 6 > 3; defender loses 1 army.
- Attacker rolls 2 dice: 3, 3. Defender rolls 2 dice: 4, 3.
  - 3 <= 4 and 3 <= 3; attacker loses 2 armies.
- Attacker rolls 3 dice: 6, 1, 2. Defender rolls 2 dice: 3, 2.
  - 6 > 3 and 2 <= 2; attacker and defender each lose 1 army.
- Attacker rolls 1 die: 6. Defender rolls 2 dice: 5, 4.
  - 6 > 5; defender loses 1 army.

### Problem
Assuming both players always roll the maximum number of dice, and you continue to battle until either you can no longer attack, or there are no more defenders. What is the probability that you will be able defeat the defending army and take the territory?

## Input Format
The first line will contain a single integer `1 <= N <= 100`, the number of pairings you will need to compute.
Then next `N` lines will each contain two integers `1 <= A <= 1000` (the number of attacking armies) and `1 <= D <= 1000` (the number of defending armies) separated by a single space.

## Output Format
`N` lines, each containing a single number, the probability you will successfully capture the territory, accurate within `0.000001`.

## Examples
<table>
  <tr>
    <th width="50%">Input</th>
    <th width="50%">Output</th>
  </tr>
  <tr>
    <td>
<pre>
3
1 1
100 1
100 115
</pre>
    </td>
    <td>
<pre>
0
1.0
0.5032907
</pre>
    </td>
  </tr>
</table>
