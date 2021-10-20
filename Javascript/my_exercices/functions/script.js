//functions
// = a block of code to perform a task
console.log('Print');

//function declaration
// we are defining a function 
//the code is not executed
function square(number){
    return number * number;
}

// function call (ivoking/calling or executing the function)
//the code is executed
const result = square(5);
console.log(result);

//ex a function declaration
//utility have access to 'utility' word
function name(parameters){
    //statements
}

//function expression
// anonymous function = function that has no name

const name = function(parameters){
    //statements
}

// an arrow function (most used)
// = shorter syntax to write an expression
const name =(parameters) =>{
    //statements
}

//ex

function sayHi(name) {
    console.log("Hi, ${name}");
}

sayHi('Joe');
sayHi('Jane');

//Retuns undefined
// if we don't say what the function has to return it is undefined
function add(a, b){
    return a + b;
}

const sum = add(2, 2);
console.log(sum);

function test(){
    console.log(1);
    return true;
    console.log(2);
    return false;
}

const bool = test();
console.log(bool);

// arrow function = modern way of writing javascript function
const square =(number) => {
    return number * number;
}

const square1 = (number) => number*number; // the same as square 
// everything after => is returned

// remark if you have only 1 parameter you can remove the ()
const square1 = number => number*number;

const result = square(5);
console.log(result);

