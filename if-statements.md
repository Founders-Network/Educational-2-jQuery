# If Statements

If statements let you conditionally execute blocks of code.

Example:
```javascript
if (x == 1) {
  // if x equals 1, then do this
} else if (x < 3) {
  // if x does not equal 1, but is less than 3, do this
} else {
  // if all else fails, do this
}
```
We have some options as to what we put in the brackets for `if`, `else if` and `else`.

## Conditionals

**Assignment vs. Equality**  
`=` indicates a value is assigned to certain variable  
`==` is a conditional that tests for the equality between two variables or values

`>` is greater than  
`<` is less than  
`>=` is greater than or equal to  
`<=` is less than or equal to  
`!=` is does not equal  

## Combining conditionals

`&&` means **AND**  
* Both conditions must be met in order to `// do this`
Example:
```javascript
if (x == 3 && y == 5) {
  // do this
}
```
`||` means **OR**  
* At least one of the conditions must be met in order to `// do this`
Example:
```javascript
if (x == 3 || y == 5) {
  // do this
}
```
`!` means **NOT**  
* The condition must NOT be met in order to `// do this`
Example:
```javascript
if (!(y == 5)) {
  // do this
}
```

## Nesting If Statements

If statements can be nested within other `if`, `else if`, and `else` statements  
Example:
```javascript
if (m == 4) {
  // if m is equal to 4 and x can be anything, do this
  if (x == 6) {
    // if m is equal to 4 and x is equal to 6, do this
  }
}
```
