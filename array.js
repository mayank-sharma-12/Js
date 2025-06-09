//Arrays are mutable

let cars = ["Tata", "Mahindra", "Farrari"];

cars[0] = "BMW";

//Array Push, Pop, Unshift and Shift

let students = ["Mayank", "Pawan", "Bhanu"];
students.push("Rohit"); // ['Mayank', 'Pawan', 'Bhanu', 'Rohit']

students.pop(); //['Mayank', 'Pawan', 'Bhanu']

students.unshift("Rohit"); //['Rohit', 'Mayank', 'Pawan', 'Bhanu']

students.shift(); //['Mayank', 'Pawan', 'Bhanu']

//indexof[] and includes

students.indexOf("Bhanu"); // Output:- 1
students.includes("Mayank"); // True

// Concate & Reverse

let fruits = ["Mango", "Apple", "Orange"];
let veg = ["Potato", "Tomato", "Pumpkin"];

let allconcate = fruits.concat(veg); //['Mango', 'Apple', 'Orange', 'Potato', 'Tomato', 'Pumpkin']
veg.concat
console.log(allconcate);

let allReverse = fruits.reverse(); //['Orange', 'Apple', 'Mango']
console.log(allReverse);

