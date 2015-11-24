# Loops

Loops allow you to run blocks of code while a condition is met

## While loop
Example:
```javascript
var x = 0;
while (x < 10) {
  console.log(x);
  x = x + 1;
}
```
This will log the values 0 through 9. On the 10th loop, the while loop will not execute because x will be equal to 10. The condition x < 10 would not be met.

## Do While loop
Example:
```javascript
var x = 0;
do {
  console.log(x);
  x = x + 1;
}
while (x < 0);
```
This will log the value 0. It executes the loop once before checking if the condition in the while loop is met. x < 0 wouldn't have been met in a while loop, but because we used a do while loop, the code gets execited at least once.

## For loop
Example:
```javascript
for (i = 0; i < 5; i++) {
    console.log(i);
}
```
i is initialized as 0, the for loop checks that i is less than 5 before executing, and i increments by 1 each time the loop is executed.  
The values 0 through 4 will be logged.

**Note:** There are other loops that exist.
