let todo = [];

let req = prompt("Please enter your request.");

while(true){
    if(req == "list"){
        console.log("-------------------");
        for(let i = 0; i < todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("-------------------");
    } else if(req == "add"){
        let task = prompt("Please enter your task here.");
        todo.push(task);
        console.log("Task has added");
    } else if(req == "delete"){
        let idx = prompt("Please enter the index of delete task");
        todo.splice(idx, 1);
        console.log("Task has deleted");
    } else if(req == "quit"){
        console.log("Quiting the app");
        break;
    } else{
        console.log("Your choice is incorrect. Please enter the correct choice.");
    }

    req = prompt("Please enter your request.");
}