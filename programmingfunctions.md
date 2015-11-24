<b>Functions</b>


A function perferoms a specific task.  
Function names follow the same conventions as variables.  
Functions are defined by the `function` keyword followed by the name of the function and `()`  
For example: 
```javascript 
function calculateSum(number1, number2) {
  var sum = number1 + number 2;
  return sum;
}
var x = calculateSum(3,6);
```
`number1, number2` are called parameters to the function while the values it receives, `3, 6` are called arguments.  
The `return` statement indicates the end of the function.  
Functions usually compute a value which is returned to the "caller".  
In this case, `x` will have a value of 9.

Functions allow us to basically reuse a block of code to perform a specific task, but also allow us the felxibility to change the parameters around when calling them with arguments. This prevents us from having to rewrite the same code over and over again. 

We are also allowed to use function in equations, just like variables. For example, let's take the "calculateSum" function:
```javascript
var z = 5;
var y = calculateSum(3,6) + calculateSum(1,2) + 1 - y; 
```


