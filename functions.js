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

