# PART 1

## Question 1

OUTPUT = 
values added: 20

add = true so the the program will enter the if
num1 (10) + num2 (10) = result (20) (line 7)

## Question 2

OUTPUT = 
final results: 20

add = true so the the program will enter the if
num1 (10) + num2 (10) = result (20) (line 7)
you can still access the result because it is var even outside of its initial declared scope
so line 13 it will print out the value

## Question 3
OUTPUT = 
values added: 20
add = true so the the program will enter the if
num1 (10) + num2 (10) = result (20) (line 7)
The console.log works since variable result is a let and it is called inside the block it is defined in

## Question 4

Error
The console.log doesn't work since variable result is a let and it is called outside the block it is defined in

# Question 5

Error
A Const variable can't be reassigned after the first time.

# Question 6

Error
A Const variable can't be reassigned after the first time.


# PART 2 :

## Question 1
OUTPUT =
3
We have a var i = 0 declared in line 6. We can use it outside of its initial scope (for) and since the for condition will be accurate 3 times, i = 3.


## Question 2
OUTPUT =
150
every numbers of the array prices will be multiplied by the value of (1 - discount).
discount = 0.5
prices = [100, 200, 300]
since we're printing discountedPrice, the "temporary" value that was change everytime by the next element of the array by the loop,
discountedPrice will only have the last value of the array prices discounted by discount.


## Question 3
OUTPUT =
150
every numbers of the array prices will be rounded.
so for loop i = 2
prices[i] = 300
discount = 0.5
discountedPrice = 300 * (1 - 0.5) = 150
finalPrice = round 15000 / 100
finalPrice = 150
since we're printing finalPrice, the "temporary" value that was change everytime by the next element of the array by the loop,
finalPrice will only have the last value of the array prices discounted by discount.

## Question 4
THE FUNCTION WILL RETURN = 
[50, 100, 150]
dicounted is an array that have been pushed every value of finalPrice in the for loop. Since the discount is 0.5, every item of the initial array prices will now then be valued 50% off and stocked inside discounted.

## Question 5

Error
the variable let i is defined inside the for scope. It cannot be used outside of this scope.

## Question 6

Error
the variable let discountedPrice is defined inside the for scope. It cannot be used outside of this scope.

## Question 7
OUTPUT = 
150

the let variable finalPrice can be used inside the for and outside of it since it was first created in the parent scope.

## Question 8
THE FUNCTION WILL RETURN = 
[50, 100, 150]
the let variable discounted can be used inside the for and outside of it since it was first created in the parent scope.

## Question 9

Error
the variable let i is defined inside the for scope. It cannot be used outside of this scope.

## Question 10
OUTPUT =
3
the console.log and the variable initialization is in the same scope so no problem.

## Question 11
OUTPUT =
[50, 100, 150]

Few changes inside the function: that length is now a const, and that finalPrice was removed, but it doesn't change the outcome of the output since it is 0.5 discounted. if it was for example 0.9 discount, the value of the first iteration of the for loop
will be 9.9999, and the math round of finalPrice could come in handy in that situation.
