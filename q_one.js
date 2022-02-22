// What are the possible ways to create objects in JavaScript?


const obj = {};
//console.log("Line number 5:", obj);



// Function Constructor

function personObj(name, surname, date){
    this.name= name;
    this.surname= surname;
    this.date= 11;
}

var aobj = new personObj("Sam", "Jackson", personObj.date);
//console.log(aobj);





//  ES6 class syntax

class objFunc{
    constructor(name, surname){
        this.name= name;
        this.surname = surname;
    }
}

var bObj = new objFunc("Damn" , "bad surname");
console.log(bObj.surname);


// Singleton pattern

var cObj = new function(){
    this.name = "name";

}

console.log(cObj);



