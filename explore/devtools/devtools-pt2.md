## Question 1

The bug was that the document.getElementById("num1").value returns a String, and we now know that this line
  document.getElementById("sum").innerHTML = "Sum: " + calculateSum(num1, num2);
has the + operator. It will then try to concatenate the two Strings, so in the function calculateSum we have 
num1 + num2 = String + String = Concatenated new string.
So it printed for num1 = 20 and num2 = 30 = 2030.