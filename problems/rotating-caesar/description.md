# Rotating Caesar Cipher

You want to send a secret message to your friends about the time and location for a game night. You've used normal Caesar Ciphers before, but your codes have been cracked, so now you need to up your game.

In a normal Caesar Cipher, each letter is always equivalent to another a certain distance away in the alphabet. So, in a Caesar Cipher with a shift of 2, 'a' always becomes 'c', 'b' always becomes 'd', etc. Start with a normal Caesar Cipher with a shift of 3 letters. This means 'a' is now 'd', 'b' is now 'e' and so on. But you want the cipher to change with every letter that is used. So, after using a single letter with a shift of 3, the second letter will have a shift of 4, the third letter in the message will have a shift of 5, and so on. Don't encode spaces, numbers and punctuation (they should not rotate the cipher, but should stay in the message), but account for capitalization (if a letter in the message is capitalized in the original message, it should stay capitalized in the coded version).

## Input

You will be given a single line of text to encode.

## Output

Print out the code your rotating cipher generates, on a single line.

## Examples

<table>
    <tr>
        <th>Input</th>
        <td>aaaaa</td>
    </tr>
    <tr>
        <th>Output</th>
        <td>defgh</td>
    </tr>
</table>
<table>
    <tr>
        <th>Input-2</th>
        <td>Let's meet in the old treehouse at noon (12:00pm).</td>
    </tr>
    <tr>
        <th>Output-2</th>
        <td>Oiy'y tmnd tz gvt ecv mlzaemtsf cw rtuu (12:00xv).</td>
    </tr>
</table>