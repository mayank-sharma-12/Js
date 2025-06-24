function hello(){
    console.log("Hello");
}

hello();
hello();

function isAdult(){
    let age = 19;
    if(age >= 18){
        console.log("You are Adult.");
    } else{
        console.log("You are under age.");
    }
}
isAdult();

function oneto10(){
    for(let i = 1; i <= 10; i++){
        console.log(i);
    }
}
oneto10();

console.log("----------Dice Game---------");

//Roll A Dice function
function rollDice(){
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
}

rollDice();

console.log("---------Functions with arguments--------------");
//Function with Arguments

function studentInfo(name, age){
    console.log(`${name} is just ${age}.`);
}

studentInfo("Mayank Sharma", 28);
studentInfo("Pavan Sharma", 26);

//Add to number by using functions

function sum(a, b){
    console.log(a + b);
}
sum(1, 2);
sum(5, 7);
sum(1, 9);

//Practice of Functions for Average calculation

function avg(a, b, c){
    let cal = (a + b + c)/3;
    console.log("Average of three number is ", cal);
}

avg(4, 6, 7);

// Practice of Functions for printing tables
console.log("Print the table");
function printTable(n){
    for(let i = n; i <= n * 10; i += n){
        
        console.log(i);
    }
}

printTable(3);

//Using return keyword in functions

function isAdults(age){
    if(age >= 18){
        return "Adult";
    } else{
        return "Not Adult";
    }
}

console.log(isAdults(20)); //Get output by using this statement.

// Sum of 1 to n numbers
function getSum(n){
    let sum = 0;
    for(i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

console.log(getSum(10));// The output is 55

//Concating a string using functions

let str = ["Hello", " My", " Name", " is", " Mayank"];

function concate(str){
    let result = "";
    for(let i = 0; i < str.length; i++){
        result += str[i];
    }
    return result;
}

console.log(concate(str));

// Function scope (Global Scope, Function scope)

// let sum = 65; // Global Scope Variable

function getAdd(a, b){
   let sum = a + b; // Function scope variable
   console.log(sum);
}
console.log(getAdd(1, 5));
// console.log(sum);

//Block scope

{
    let a = 40; //This is a block scope variable declaration
    console.log("Value of a is ", a);  //we can access the value of block scope variable inside the scope.
}
// console.log(a); It is not accessible out side the curly braces

let sums = function(a, b){
    return console.log(`Sum of two variables are =`, a + b);
} //Function Express Syntax
sums(1, 12);


//Higher Order Function used for API integration
function highOrderFunction(func, count){
    for(let i = 1; i <= count; i++){
        func();
    }
}
    let greets = function(){
        console.log("Hello");
    }

highOrderFunction(greets, 200);

//Multiple step multiorderfunctions

function oddEvenTest(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n % 2 == 0));
        }
    } else if(request == "even"){
        return function(n){
            console.log(n % 2 == 0);
        }
    } else{
        console.log("wrong request");
    }
}

let request = "odd"; //even

//Function Method

const calculator = {
    add(a, b){
        return a + b
    },

    sub(a, b){
        return a - b
    },

    mul(a, b){
        return a * b
    }
}

console.log(calculator.add(8, 7));
console.log(calculator.sub(84, 51));
calculator.mul(7, 6);