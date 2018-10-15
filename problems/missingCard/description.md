# To Catch a Cheat #

Bowser is tired of stealing Princess Peach only to have Mario rush in and foil his plan. This time Bowser has a better idea, he challenges Mario to a card game. Each game has n cards in the deck.

Mario knows that Bowser is always up to no good so he suspects Bowser of cheating. Mario knows that Bowser will always remove a single card from the deck each game. Mario must look through the remaining cards and tell Bowser which card he took.

# Input #

The first line is an integer 2 <= N <= 25, the number of cards in the deck, and an integer 1 <= k <= 5, the number of rounds per game. The next k lines contain space seperated numbers denoting the cards in the deck on that round. The card values range from  1 to n with each value only appearing a single time in the deck.

# Output #

Print the value of the card missing from the deck for each round.

## Example  Input 1 ##

    12 2
    1 9 4 3 12 8 10 1 7 5 6
    7 2 6 12 3 1 5 4 8 10 9

## Example Output 1 ##

    2
    11

## Example Input 2 ##

    5 5
    3 5 4 1
    2 4 1 5
    5 3 1 4
    4 2 3 1
    1 5 2 3

## Example Output 2 ##

    2
    3
    2
    5
    4
