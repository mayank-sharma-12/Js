const max = prompt("Enter a maximum number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while(true){
    if(guess == "quit"){
        console.log("You are quitting the game.");
        break;
    } if(guess == random){
        console.log("Congratulations you are guessing right!", random);
        break;
    } else if(guess < random){
        console.log("Hint: your number is small one, Please guess again");
        guess = prompt("Guess the number");
    } else if(guess > random){
        console.log("Hint: your number is big one, Please guess again");
        guess = prompt("Guess the number");
    } else{
        guess = prompt("Oops you guess the wrong number. Please try again");
    }
}