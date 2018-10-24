# Art

You got so excited about games that you decided to open your own game store! After you buy a cash register you realize that the receipt printer is super lame and can only print small characters. You decide that you still want to have the name of your store in big letters at the top of the receipt, so you need to write a program that can use ASCII art to draw big characters using small characters.

To avoid confusion we will define different types of symbols as follows:
- Letters: characters in the string to translate to ASCII art.
- Subcharacters: The “small characters” used to draw the ASCII art.
- Characters: The “big characters” drawn with ASCII art.

## Input
Every line in the input ends with a newline. The input is defined as follows:
* The first line contains the word(s) you want printed across the top of your receipt. This is the string of letters to encode in the ASCII font. This string may include any lowercase letter, period (.), colon (:), or space ( ).
* The second line contains a single integer N which is the number of characters defined in the given ASCII font.
* The third line contains a single integer H which is the number of rows of subcharacters that make up a single character.
* The remaining lines define the ASCII font as follows:
  * The first line will contain a single letter. This is the letter of the ASCII character that is being defined.
  * The next **H** lines will contain the subcharacters that make up this single character.
  * Repeat the above two bullets **N** times to get all the characters defined by ASCII font.

>Note: The ASCII font will always contain at least enough characters to draw the required word(s).

## Output
The word(s) defined in the first line of input, but drawn with the defined ASCII art font

## Examples
###  Input:
>Note: The whitespace after the the 'h' character is for the space character.
```
hello world
8
5
d
  # 
### 
# # 
### 
    
e
    
### 
##  
### 
    
h
#   
### 
# # 
# # 
    
 
    
    
    
    
    
l
#  
#  
#  
## 
o
    
### 
# # 
### 
    
r
    
### 
#   
#   
    
w
    
# # 
### 
### 
    

```
Output:
```
#        #   #                       #    # 
### ###  #   #  ###     # # ### ###  #  ### 
# # ##   #   #  # #     ### # # #    #  # # 
# # ###  ##  ## ###     ### ### #    ## ### 
                                            
```
