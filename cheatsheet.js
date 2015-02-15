//variables and data types

var name = "Jacob"; //string variable
var x = 1; //number variable
var GreenSky = false; //Boolean variable
//4th datatype is Undefined(no value)
//to determine datatype:
typeof(name);
>string

typeof(x);
>number

typeof(GreenSky);
>boolean

//debugging

js
console.log("My Console"); //outputs "My Console" into the console log directly

alert("Welcome!"); //creates a pop up window, which will read "Welcome"

//"this is a one line comment"
/* This
Is
a multi-line
comment
*/

//arrays are collections of data
["red", "blue", "green", "yellow"] //this is an array, the value of each element from left to right is 0,1,2,3.
var colors = ["red", "blue", "green", "yellow"] //you can declare arrays as variables
var shapes = ["circle", "square"] // this declares a second array

var character = [colors, shapes] //this declares a multi-dimensional array

// access the first array inside
// then the first item inside that array
console.log(character[0][0]); 
> "red"
// access the second array inside
// then the first item inside that array
console.log(character[1][0]);
> "circle"

//Testing

"stringone" === "stringtwo" //tests if these two strings are equal
>false //output is false
//best to use three equal sings to avoid confusion
//using two equal signs will not check the object type

"stringone" !== "stringtwo" //tests the two strings to make sure they're not equal
>true //output would be true

5 > 10;
>false

//usting if statements to test
if(5>10){
  console.log("You'll never see this in the console because 5 is not greater than 10");
}
if(5<10){
  console.log("But you'll definitely see this");
} //this will be what is actually printed

if(5>10){
  console.log("You'll never see this because 5 is not greater than 10");
} else{
  console.log("You will see this though, since 5 < 10 evaluates to false");
}// using else means you don't have to use two seaparte if statements, also creates "default" outputs

if(5>10){
  console.log("You'll never see this because 5 is not greater than 10");
}else if(5===5){
  console.log("Yes, 5 really is equal to 5, so this will show up in the console") //this is the one you'll see
}else{
  console.log("We won't get here because our else if evaluates to true");
} //the logic stops before ever getting to this else statement because the
// esle if statement ended up being true.

//functions

// Declare a function called someName that takes
// two arguments: numberOne and otherNumber
function someName(numberOne, otherNumber){
  // return the sum of numberOne, 10, and otherNumber
  return numberOne + 10 + otherNumber;
}
// call your new function, giving it 2 argument values
// numberOne = 4, otherNumber = 14
// log the result to the console
console.log(someName(4, 14));
// Calling a function is also known as "invoking" it
>28

// declare a function with the name alertName
// that takes one argument, somePersonsName
function alertName(somePersonsName){
  // the function returns an alert with their name
  return alert(somePersonsName);
}
// invoke the function
alertName("Zach");
//this causes an alert to pop up that reads "Zach"



