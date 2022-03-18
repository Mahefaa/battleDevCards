# To make it work:
- Clone the repository
- Install Visual Studio Code V16.10.
- write 
```sh
node "Battledev Cards/battledev2(2020).js" 
```
on the terminal
- Or change the datas in "table=" then write the command on the terminal


# Statement
While walking in Las Vegas, you come across a stand with a simple game: the dealer 
mixes the card game (limited to cards from 1 to 9) and draws one. Before the draw, if 
you announced the right number, you win eight times your bet, otherwise you lose your 
money.
You know that the potential gains on this type of game are very low but your friend is 
not of the same opinion. He's going for it! Even if you watch him play, you advise him to 
play the numbers that often fall consecutively (there is no real explanation for this 
method, but hey, it's at least a strategy). So you look at past draws that are displayed on 
a screen above the table.

## Data format
### Entry
### Row 1: an integer N between 1 and 10 000 representing the number of draws displayed in the history.

### Rows 2 to N + 1: a digit between 1 and 9 representing the number of the card drawn.

## Output
### A number representing the length of the largest series where a number was repeated.
## Example
## Input

10
5
3
3
4
9
9
9
9
9
6

## Output
5
## because the longest series where a number has been repeated is when the 9 was drawn 5 times in a row