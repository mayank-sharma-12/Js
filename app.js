// Template Literals

let pencilPrice = 30;
let sharpnerPrice = 10;
console.log("--Template Literals--");
console.log(`The price of Pencil and Sharpner will be : ${pencilPrice + sharpnerPrice} Rupees`);

// Conditional Statements (if)
console.log("--Conditional Statements (if)--");
console.log("Before if statement");

let age = 26;

if(age > 18){
    console.log("You can vote");
}

let myName = "Mayank";
if(myName == "Mayank"){
    console.log(`Welcome, ${myName}`);
}

console.log("After if statement");

// Traffic Signal Task by (If statement / else if statement)
console.log("--Traffic Signal Task by (If statement / else if statement)--");
let color = "yellow";

if(color === "red"){
    console.log("Stop");
}else if(color === "yellow"){
    console.log("Slow Down");
}else if(color === "green"){
    console.log("Go");
}

// Conditional Statements (else if)
console.log("--Conditional Statements (else if)--");
let marks = 62;

if(marks >= 80){
    console.log("Grade A+");
}else if(marks >= 60){
    console.log("Grade A");
}else if(marks >= 33){
    console.log("Grade B");
}else if(marks < 33){
    console.log("Grade F");
}

// Popcorn Price Calculator
console.log("--Popcorn Price Calculator--");

let size = 'XL';

if(size === 'XL'){
    console.log("Price is Rs. 250");
}else if(size === 'L'){
    console.log("Price is Rs. 200");
}else if(size === 'M'){
    console.log("Price is Rs. 100");
}else{
    console.log("Price is Rs. 50");
}

// Nested if else condition

console.log("--Nested if else condition--");

let schoolMarks = 80;

if(schoolMarks >= 33){
    console.log("You are pass");
    if(schoolMarks >= 75){
        console.log("Grade : O");
    }else{
        console.log("Grade : A")
    }
}else{
    console.log("Better luck next time.");
}

//Logical Operator (&&, ||, !)
console.log("--Logical Operator (&&, ||, !)--");

let colMarks = 80;
if((colMarks > 33) && (colMarks >= 80) || !false){
    console.log("Pass, Grade A");
}
else{
    console.log("Fail");
}
