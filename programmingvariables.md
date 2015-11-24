<b>Variables</b>


A variable stores data values.  
Variable names has to be unique, and these unique names are called "identifiers".  
These identifiers can not be any of the reserved words: `break, if, var`  
Identifiers can be letters or words but no numbers: `1, 23`  
By convention identifiers usually start with lowercase: `name`  
If a variable name contains multiple words, the additional words start with a capital: `firstName, lastName`  


We could think of variables like variables in algebra: 1. To store values 2. To use them in equations


For example,  we could have variables `a` and `b`, and we could put these variables in a equation such as `a + b`   
As a full example, we could have:  
```javascript
var price1 = 1;
var price2 = 2;
var total = price1 + price2;
```
The variable total would have a value of 3.


The general rules for constructing names for variables (unique identifiers) are:
<ul>
<li>Names can contain letters, digits, underscores, and dollar signs</li>
<li>Names must begin with a letter</li>
<li>Names can also begin with $ and _ (but we will not use it in this tutorial) </li>
<li>Names are case sensitive (y and Y are different variables)</li>
<li>Reserved words (like JavaScript keywords) cannot be used as names</li>
</ul>


Creating a variable in Javascript is called “declaring” a variable, and we declare a variable with the `var` keyword.   
For example: `var uniqueVariableName`  
After declaration, the variables have no values, and are undefined.  
To assign a value, we use the assignment operator, which is just an equal sign, `=`  
For example: `var uniqueVariableName = 1`
