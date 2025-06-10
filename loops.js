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
for(i = 1; i <= 3; i++){
    console.log(`Outer loop: ${i}`);
    for(j = 1; j <= 3; j++){
        console.log(j);
    }
}