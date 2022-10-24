## Question 12

### A
student.name
### B
student['Grad Year']
### C
student.greeting()
### D
student['Favorite Teacher'].name
### E
student.courseLoad[0]

## Question 13
### A
'32'
The + operator will always try to concat if one of the elements is a String. 3 is a String, 2 will now be transformed into a String and concat
### B
1
The - operator will transform Strings into Number if possible.
### C
3
3 + the void = 3 makes sense ?
### D
'3null'
The + operator will always try to concat if one of the elements is a String. 3 is a String, null will now be transformed into a String and concat
### E
4
true = 1 / 1 + 3 = 4
### F
0
false = 0 / 0 + null = 0 + the void = 0
### G
'3undefined'
The + operator will always try to concat if one of the elements is a String. 3 is a String, undefined will now be transformed into a String and concat
### H
NaN
Undefined is a variable that has not been assigned a value. undefined isnt completely equal to null because
'3' - null = 3. null is assigned not undefined.
but undefined - anything will result in a NaN.
--------
### A
true
The comparaison operator must likely transform the String into a Number.
### B
false
Just dont compare two strings, it will make some funky transformation (example = 10 will be transform into a boolean I think ?)
### C
true
The equality operator "==" will check if the two values can match even if they are not of the same type. so 2 and '2' is equal for this equality operator
### D
false
The equality operator "===" will check if the two values can match and that they are the same type. so 2 and '2' is not equal for this equality operator since one is a Number (2) and the other a String ('2')
### E
false
true is equal to 1 not 2
### F
true
true is still equal to 1 not 2. But the Boolean object constructor permits to create objects with an initial value of true. example such as ```const bSuLin = new Boolean('Su Lin');``` so yea Boolean(2) !== 2 but is equal to 1 so true == true.

## Question 15
The equality operator "==" will check if the two values can match even if they are not of the same type.
The equality operator "===" will check if the two values can match and that they are the same type.
EXAMPLE = undefined == null ? true // undefined === null ? false

## Question 17
THE RETURN VALUE OF THE FUNCTION modifyArray is =
[2, 4, 6]

the function modifyArray has two parameters, array and callback. It will return a new array with every member of the initial array being pushed inside newArr with the function callback being called first (line 4). The function callback simply take one parameter,
num that will be multiplied by 2. Since the for will treat the entire array (i < array.lenght) the new array will be every
items of the initial array multiplied by 2.

# Question 19
OUTPUT =
1
2
3
4

We will have to wait 1 second to print the 2 and then everything will be print instantly.

