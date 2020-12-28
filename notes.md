\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

preventDefault ()

to stop forms from automatically submitting when the submit button is clicked, giving you a chance to instead submit the form data asynchronously using JavaScript and something like the Fetch API to make an Ajax request
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


\\\\\\\\\\\\\\\\\\\\\\Arrow Functions\\\\\\\

no name
can be used as object methods

const Shayla = () => {


}

- 1 parameter OMIT paratheses

const Shayla = param => {


}

-1 statement 
const run = param => 'running'
run()

biggest difference is.this & how .this is bound in the Method

regular - .this object itself


arrow - onject instance, dont use for object methods when you want to access this

dont have their own this , retains its this value of the enclsoing lexical context

.this 

cant be set by assignemnt during execution 

outside the function refers to the global object

THIS INSIDE THE FUNCTION 
 dependant on how the function is call 

 .this in CLASSES

 - A REGULAT OBJECT 
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 preventDefault();

preventDefault(); does one thing: It stops the browsers default behaviour.

When to use them?

We know what they do but when to use them? Simply it depends on what you want to accomplish. Use preventDefault(); if you want to “just” prevent the default browser behaviour. Use return false; when you want to prevent the default browser behaviour and prevent the event from propagating the DOM. In most situations where you would use return false; what you really want is preventDefault().
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

\\\\\\\\\\\\\\\\\\\\\\HOISTING\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

Hoisting is JavaScript's default behavior of moving declarations to the top.

Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
In other words; a variable can be used before it has been declared.


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

Variables defined with let and const are hoisted to the top of the block, but not initialized.

YOU CAN SET AVARIABLE WITH LET & CONST BUT THEY CANNOT BE USED UNTIL IT HAS BEEN DECLARED OR ASSGINED TO SOME VALUE
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Meaning: The block of code is aware of the variable, 
but it cannot be used until it has been declared.

JavaScript only hoists declarations, not initializations.

declare all variables at the beginning of every scope.

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
the variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code.

PLACEHOLDER IDEA IN THE DOM

One of the advantages of JavaScript putting function declarations into memory before it executes any code segment is that it allows you to use a function before you declare it in your code. 

var num; // Declaration
num = 6; // Initialization (ASSIGNED)

Initializations using let and const are also not hoisted. 

\\\\\
It allows us to call functions before even writing them in our code.
\\\\

Always remember that in the background the Javascript is first declaring the variable and then initializing them. It is also good to know that variable declarations are processed before any code is executed.

Declaration –> Initialization/Assignment –> Usage

let x = “hoisting”;

Variables and constants declared witJavaScript only hoists declarations, not initializations.
h let or const are not hoisted!

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var a   //declaration
a = 5   // initialization

let b //declaration 
b = 10  //initialization

var c = 5  //declaration plus initialization in one step
let d = 5  //declaration plus initialization in one step

const a ; // SyntaxError: Missing initializer in const declaration
a = 5;
console.log(a);
const a = 5
console.log(a) //5


1: when we start our variable with var, let is called declaration. e.g: var a; or let a;
2: when we start our variable and assigning value it is declaration and initialization with value

3: const cannot be declared only, you need to initialize it with declaration


Let and const have a block scope but var has function scope.

let and const hoist but you cannot access them before the actual declaration is evaluated at runtime. 


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



1: var and let can change their value and const cannot change its value
2: var can be accessible anywhere in function but 

let and const can only be accessible inside the block where they are declared.

3: const cannot be declared only, you need to initialize it with declaration

4: let and const hoist but you cannot access them before the actual declaration is evaluated at runtime. So in case of let and const you cannot access them before declaration.


When JavaScript is executed inside the browser, the window object is the JavaScript Global object. The document object is a property of the window object.

The window object represents the browser window.
The document object represents the HTML document loaded in that window.
\\1

The frontend (Javascript) will send a fetch request to our backend hosted on
index controller route

\\2

in return json data 
returned as a ARRAY OF OBJECTS AS A PROMISE

GIVEN ACCESS TO THE DATA FROM THE BACKEND 

\\ TAKE THE RETURN DATA AND RENDER THE OBJECTS ONTO YOUR HTML 

GET=> CONTROLLER => CONTROLERR ACCESS OUR DATABASE 
=> RETURNS THE DATA WE WANTED SENDING TI BACK TO THE FRONTEND 


POST = > GATHER INPUT DATA => PASS IT BACK TO THE DATABASE THROUGHT THE POST FECTH REQUEST 
SENT TO THE JSON DATA USED WITHIN THE FETCH 

METHOD LETS THE CONTROLER KNOW WHAT ACTION TO SEND THE REQUEST TO 

I usually don’t use arrow functions inside for the event callback, because we cannot access this.

Javascript is executed in a linear manner within the page,