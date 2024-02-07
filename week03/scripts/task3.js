/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2)
{
    return number1+number2;
}
// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers()
{
    let number1=parseInt(document.getElementById("addend1").value);
    let number2=parseInt(document.getElementById("addend2").value);
    document.getElementById("sum").value = add(number1,number2);
}
// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
const addbuttonElement = document.getElementById("addNumbers");
addbuttonElement.addEventListener('click',addNumbers);
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const subtract = function(number1,number2)
{
    return number1-number2;
}
const subtractNumbers = function()
{
    let number1=parseInt(document.getElementById("minuend").value);
    let number2=parseInt(document.getElementById("subtrahend").value);
    document.getElementById("difference").value = subtract(number1,number2);
}
const subbuttonElement = document.getElementById("subtractNumbers");
subbuttonElement.addEventListener("click",subtractNumbers);
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiple=(number1,number2)=> number1*number2;
const multiplyNumbers = ()=>
{
    let number1=parseInt(document.getElementById("factor1").value);
    let number2=parseInt(document.getElementById("factor2").value);
    document.getElementById("product").value = multiple(number1,number2);
}
const mulbuttonElement = document.getElementById("multiplyNumbers");
mulbuttonElement.addEventListener("click",multiplyNumbers);
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
const divide=(number1,number2)=> number1/number2;
const divideNumbers = ()=>
{
    let number1=document.getElementById("dividend").value;
    let number2=document.getElementById("divisor").value;
    document.getElementById("quotient").value = divide(number1,number2);
}
const divbuttonElement = document.getElementById("divideNumbers");
divbuttonElement.addEventListener("click",divideNumbers);
// Step 9: Test all of the mathematical functionality of the task3.html page.
//Finally got it all to work- had problems using innerHTML instead of value, but was able to fix it after reiewing the solution. 

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let date = new Date;
// Step 2: Declare a variable to hold the current year
let year = date.getFullYear;
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById("year").value=year;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let arr = [25];
for(let i=1;i<=25;i++)
{
    arr[i-1]=i;
}
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").innerHTML=arr;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) 
document.getElementById('odds').innerHTML = arr.filter((i)=>i%2==1);
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.getElementById('evens').innerHTML = arr.filter((i)=>i%2==0);
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
document.getElementById('sumOfArray').innerHTML = arr.reduce((i,j)=>i+j)
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
document.getElementById("multiplied").innerHTML = arr.map((i)=>i*2);
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.getElementById('sumOfMultiplied').innerHTML=arr.map((i)=>i*2).reduce((i,j)=>i+j);