//print 1 to 5 numbers using forloop
for(let i = 1; i <= 5; i++){
    console.log(i);
}

console.log("-----------------Print Odd Numbers Backward----------------------");

//print 5 to 1 numbers
for(let i = 5; i >= 1; i--){
    console.log(i);
}

console.log("-----------------Print Odd Numbers Downward----------------------");

//print 1-15 odd numbers
for(let j = 1; j <= 15; j += 2){
    console.log(j);
}

console.log("-----------------Print Odd Numbers Backward----------------------");

for(let i = 15; i >= 1; i -= 2){
    console.log(i);
}

console.log("-----------------Print Even Numbers Downward----------------------");

for(let i = 2; i <= 10; i += 2){
    console.log(i);
}

console.log("-----------------Print Even Numbers Backward----------------------");

for(let i = 10; i >= 2; i -= 2){
    console.log(i);
}

console.log("-----------------Print Tables----------------------");
let n = +prompt("Enter the number for printing table");
for(let i = n; i <= n * 10; i += n){
    console.log(i);
}

console.log("-----------------Nested Loops----------------------");
for(let i = 1; i <= 3; i++){
    console.log(`Outer loop: ${i}`);
    for(let j = 1; j <= 3; j++){
        console.log(j);
    }
}

console.log("-----------------While Loops----------------------");

let i = 1;

while(i <= 5){
    console.log(i);
    i++;
}

console.log("-----------------Nested Loops Backward----------------------");

let j = 5;

while(j >= 1){
    console.log(j);
    j--;
}

console.log("----------Movie Game----------");

const favtMovie = "ironman";

let guess = prompt("Guess the favt movie");

while((guess != favtMovie) && (guess != "quit")){
    guess = prompt("Wrong guess, try again");
}

if(guess == favtMovie){
    console.log("Congrats!!");
}else{
    console.log("You have quit");
}

console.log("----------Array and for loop----------");
let fruits = ['Mango', 'Orange', 'Apple', 'Pineapple', 'Guava'];

for(let i = 0; i <= fruits.length-1; i++){
    console.log(i, fruits[i]);
}

console.log("----------Array and for loop backward----------");
let favFruit = ['Mango', 'Orange', 'Apple', 'Pineapple', 'Guava'];

for(let i = fruits.length-1; i >= 0; i--){
    console.log(i, favFruit[i]);
}

console.log("----------Nested Array with For loop");
let veg = [['Tomato', 'Potato'], ['Ladyfinger', 'Brinjal']];
for(i = 0; i < veg.length; i++){
    console.log(i);
    for(j = 0; j < veg[i].length; j++){
        console.log(veg[i][j]);
    }
}

console.log("---------------For Of Loop--------------------");
//For of Loop

let cars = ["BMW", "Audi", "Farrari", "XUV", "Safari"];
for(car of cars){
    console.log(car);
}

for(char of "MayankSharma"){
    console.log(char);
}

console.log("---------------Nested For Of Loop--------------------");
//Nested for of loops
let heroes = [["Superman", "Aquaman", "Iron Man", "Capt America"], ["Spiderman", "Thor", "Black Panther", "Locky"]];
for(list of heroes){
    for(name of list){
        console.log(name);
    }
}