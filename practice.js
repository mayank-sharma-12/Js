//Dice roll game

let dice = Math.floor(Math.random() * 6) + 1;

console.log(dice);

//Object task

let car = {
    name : "BMW",
    model : 2025,
    color : "Blue"
}

console.log("Print Car's name : ", car.name);

let person = {
    name : "Mayank Sharma",
    age : 28,
    city : "Delhi"
}

console.log("We are changing city name from delhi to", person.city = "New York");
console.log(person.country = "United States");
console.log(person); // {name: 'Mayank Sharma', age: 28, city: 'New York', country: 'United States'}
