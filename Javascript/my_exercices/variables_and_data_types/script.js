
const firstNumber = 5;
const secondNumber = 10;

const result = firstNumber /secondNumber

console.log(result); 

const isCool =false;

if (isCool){

console.log('Hi man, you are cool ' );
} else {
    console.log("Fuckkks")
}

var age= 20
console.log(age>20);


let age = null;

age = 20; 

//Object
const name ='John';
const age = 25;

const person ={
    name: 'John',
    age: 25,
}

console.log(person)

//Dot notation
console.log(person.name)

console.log(typeof person.name)


//Array
const arr = [1, 2, 3, 4];
console.log(arr);


const date = new Date();

console.log(date);
console.log(typeof date);

//Statically typed
let message = 'Hello world';
console.log(typeof message);

message = 5;

console.log(typeof message);

message = True;
console.log(typeof message);

// comparison operators ==> True/ false
const a = 5;
const b =10;
// Greater than or equal to
console.log(a >= b);

// Smaller than or equal to
console.log(a <= b);

//Equality operator
console.log(a == b);

//Not equal; 
console.log(a!=b);

//Strict equallity
console.log(a === b); 
//Strict inequallity
console.log(a ! === b);

console.log( 5 == '5'); // we get True
console.log( 5 === '5'); // we get False

//Strict Equallity ===
//Compares Values and DATA types 
// return True only if both are the same
console.log( 20 === '20'); // False even thought values seem the same they are not the same type


//Loose equality ==  (don't use it often in Javascript, it could cause errors)
// Doesn't compare data types 
console.log (20 == '20')

// The good ones ===  !===
// The evil ones == !==

// Logical operators
//AND && => Check if all operands are true, if yes it returns true
console.log(true && false); // false
console.log(true && true); // true
console.log(true && false && true); // false
//OR  || if at least one operand is true returns => true
console.log(true || false); // True
console.log(false || false); // false
//NOT
console.log(!true) //returns false


// if statement (the condition is evaluate to true or false)
const age = 18; 
/*if(condition){
    block of code executed if the condition turns out to be true
} 
*/
if(age > 18){
    console.log('You may enter!');
} else if ( age === 18){
    console.log('You just turned 18');

} else{
    console.log('Grow up!');
}

// While loop
/* while(condition) {
    code is executed
} */

let i = 0;

while(i < 10){
    console.log(1);
    i ++;
}

// for loop => it runs a certain amount of time

for (let i = 0 /*initialisation*/; i < 10 /*condition*/; i++/*incrementation*/){
    console.log(i);
}

//DRY don't repeat yourself never write DRY code, always use loop









