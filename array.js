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

// Array Slice Method

let fruits1 = ["Orange", "Grapes", "Apple", "Mango"];
console.log(fruits1.slice(2)); //['Apple', 'Mango']
console.log(fruits1.slice(1,3)); //['Grapes', 'Apple']
console.log(fruits1.slice(-2)); //['Apple', 'Mango']

// Array Splice Method
let subjects = ["Math", "English", "Science", "Accounts", "SST", "Physics", "Chemistry"];
console.log(subjects.splice(3)); //['Accounts', 'SST', 'Physics', 'Chemistry']
console.log(subjects); //['Math', 'English', 'Science']

// Practice Question
let months = ['january', 'july', 'march', 'august'];
console.log(months.splice(0,2, 'july', 'june'));

let skills = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
let revSkills = skills.reverse();
console.log(revSkills);
console.log(revSkills.indexOf('javascript'));

// Array Sorting

let alphabets = ['a', 'd', 'e', 'b', 'c'];
console.log(alphabets.sort()); //['a', 'b', 'c', 'd', 'e'] working fine with string

let num = [20, 5, 10, 75];
console.log(num.sort()); //[10, 20, 5, 75] not working fine with numbers

// Nested Array

let arr = [[2, 4], [3, 5], [7, 9], [6, 8]];
console.log(arr[0][0]);// 2
console.log(arr[0][1]);// 4
console.log(arr[0][0]);// 2
console.log(arr[1][1]);// 5
