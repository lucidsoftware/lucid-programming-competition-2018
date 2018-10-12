# Art

You got so excited about games that you decided to open your own game store!  After you buy a register you realize that the receipt printer is super lame and can only print small characters.  You decide that you still want to have the name of your store in big letters at the top of the receipt, so you need to write a program that can use ASCII art to draw big characters with small characters.

To avoid confusion we will refer define different types of symbols as follows:
The characters in the string given to render as ASCII will be called letters.
The “small characters” used to render the ASCII art will be called subcharacters.
The “big characters” rendered with ASCII art will be called characters.

## Input
The first line will contain a string of letters to encode as an ASCII font. The string may include any lowercase letter, period ‘.’, colon ‘:’, or space ‘ ’.
The second line contains a single integer **N**, which is the number of characters defined in the ASCII font.
The third line contains a single integer **H** which is the number of rows of subcharacters make up a single characters.
The remaining lines define the ASCII font.
1. The first of the remaining lines will contain a single letter.
2. The next **H** lines will contain an amount of subcharacters equal to the width of that character.
3. Repeat 1 and 2 **N** times.
The input will always end with a newline.

>Note: The ASCII font will always contain at least enough characters to render the string given.

## Output
The first line of text converted to the defined ASCII art font

## Examples
###  Input:
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
