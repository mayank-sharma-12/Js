const student = {
    name : "Mayank",
    age : 28,
    marks : 98,
    city : "Delhi"
}

let newCity = (student.city = "Mumbai"); // Add new city in student object
let addGender = (student.gender = "Female");// Add new property in student object gender = "Female"
let newMarks = (student.marks = "A"); //Change the marks to "A"
console.log(`Change city in student object : ${newCity}`);
console.log(`Add new property gender : ${addGender}`);
console.log(`Marks change ${newMarks}`);
console.log(student) //New object will be this => {name: 'Mayank', age: 28, marks: 'A', city: 'Mumbai', gender: 'Female'}


// Nested Object

const clgInfo = {
    mayank : {
                grade : "A+",
                city : "Mumbai"
    },
    bhanu : {
                grade : "A",
                city : "Delhi"
    },
    pavan : {
                grade : "O",
                city : "UP"
    },
    rohit : {
                grade : "O+",
                city : "Jharkhand"
    }
}

//How to access the value from nested object.
//see below:
console.log(`This is mayank data : ${clgInfo.mayank.grade}`) // This is mayank data : A+
console.log(`This is bhanu data : ${clgInfo.bhanu.grade}`) // This is bhanu data : A
console.log(`This is rohit data : ${clgInfo.rohit.city}`) // This is rohit data : Jharkhand
console.log(`This is pavan data : ${clgInfo.pavan.city}`) // This is pavan data : UP

//I want to change city value for pavan
let pavanCity = (clgInfo.pavan.city = "Bangalore");
console.log(`This is pavan new city : ${pavanCity}`); //This is pavan new city : Bangalore


//Array of Objects
const classInfo = [
    {
        name : "Mayank",
        grade : "A+",
        city : "Delhi"
    },
    {
        name : "Bhanu",
        grade : "A",
        city : "Madoli"
    },
    {
        name : "Pavan",
        grade : "O+",
        city : "UP"
    },
];

//How to get data?
//See the process below:

console.log(classInfo[0].name); // Output is Mayank
console.log(classInfo[1].name); // Output is Bhanu
console.log(classInfo[2].name); // Out is Pavan

//If you want to change some value then see below
console.log(classInfo[0].city = "Mumbai"); // Output is "Mumbai"
console.log(classInfo[0]) // Output is {name: 'Mayank', grade: 'A+', city: 'Mumbai'}

console.log("----------------------------------------")

//Random Number Program
let rand = Math.floor(Math.random() * 10000) + 1;
console.log(`Your Hotstar OTP code : ${rand}`);

//Random number 1 to 100
let newRand = Math.floor(Math.random() * 100) + 1;
console.log(`Random Numer between 1 to 100 : ${newRand}`);

//Random number 1 to 5
let newRandom = Math.floor(Math.random() * 5) + 1;
console.log(`Random Numer between 1 to 5 : ${newRandom}`);

//Random number 61 to 70
let newRand1 = Math.floor(Math.random() * 10) + 61;
console.log(`Random Numer between 61 to 70 : ${newRand1}`);