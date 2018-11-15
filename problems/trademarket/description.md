# Trade Market

Recently, you and a group of friends have grown tired of the typical trading present in many board games. To liven things up a little, you have decided to institute a "trade market" to facilitate exchanges of gold for resources, with prices that vary each turn.

To help with your strategizing, you decide to write a program to determine the maximum profit you can make if you are given a list of the prices (in units of gold) for a given resource in the upcoming game. To keep your strategy simple, you decide to limit yourself to one "buy" operation and one "sell" operation.

> #### Notes:
>
> 1. You must "buy" once and "sell" once (and only once).
> 1. You cannot buy and sell in the same turn.
> 1. Shorting is not an option. You must buy before you sell.
> 1. Assume you are rich enough to buy at any time.
> 1. Maximum profit is not guaranteed to be positive.

## Input

The input is given as one line of `N` space-separated numbers, each representing the `exchange rate` for one turn.

`2 <= N <= 100,000`

`0 <= exchange rate <= 10,000,000`

## Output

Print out the maximum profit achievable in this game on its own line.

## Examples

<table>
    <tr>
        <th>Input 1</th>
        <th>Input 2</th>
    </tr>
    <tr>
        <td>
            <pre>103 99 100 101 100 102 101</pre>
        </td>
        <td>
            <pre>100 100 100 100 100 100 100</pre>
        </td>
    </tr>
    <tr>
        <th>Output 1</th>
        <th>Output 2</th>
    </tr>
    <tr>
        <td>
            <pre>3</pre>
        </td>
        <td>
            <pre>0</pre>
        </td>
    </tr>
    <tr>
        <th>Explanation 1</th>
        <th>Explanation 2</th>
    </tr>
    <tr>
        <td>
            <pre>1. buy on second turn
2. sell on sixth turn</pre>
        </td>
        <td>
            <pre>1. buy on any turn
2. sell on any (later) turn</pre>
        </td>
    </tr>
</table>