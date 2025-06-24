let testMsg = `{
"fact":"A cat's normal pulse is 140-240 beats per minute, with an average of 195.",
    "length": 73}`;

let validRes = JSON.parse(testMsg);
console.log(validRes); //to parse the json data into object form

let student = {
    name : "Mayank",
    age : 28,
    city : "Delhi"
}

let convtObj = JSON.stringify(student);
console.log(convtObj); //This is become into the JSON format{"name":"Mayank","age":28,"city":"Delhi"}