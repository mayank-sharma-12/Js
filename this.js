//This keyword
const student = {
    name : "Mayank Sharma",
    age : 28,
    math : 50,
    eng : 70,
    phy : 98,
    avgMark(){
        console.log(this); //{name: 'Mayank Sharma', age: 28, math: 50, eng: 70, phy: 98, …}
        let avg = (this.math + this.eng + this.phy) / 3;
        console.log(`${this.name} has scored ${avg}.`); //Mayank Sharma has scored 72.66666666666667.
    }
}
    function avgMark(){
        console.log(this);
    }
