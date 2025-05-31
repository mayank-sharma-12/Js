// Template Literals

let pencilPrice = 30;
let sharpnerPrice = 10;

console.log(`The price of Pencil and Sharpner will be : ${pencilPrice + sharpnerPrice} Rupees`);

// Conditional Statements (if)

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

let color = "yellow";

if(color === "red"){
    console.log("Stop");
}else if(color === "yellow"){
    console.log("Slow Down");
}else if(color === "green"){
    console.log("Go");
}

// Conditional Statements (else if)

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