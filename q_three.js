// What is the difference between Call, Apply and Bind


var batObj = {name:"Keaton", release_date: "5th March 2022"};
var pluObj = {name:"Kenji", theme: "Saving the world"};

function someOp(som_line, ano_line){

    console.log(som_line+ '' + '' + this.name + '' + '' + this.release_date + ''+ ano_line);
    //console.log(som_line+ '' + ano_line + this.name+ '' + this.theme);
}

// someOp.call(batObj,"There is","something there");
// someOp.call(pluObj,"There is","something there");


// Apply-------


var monsObj= {name:"Frederich", surname:"Heineman"};
var monstObj = {name:"Kenzo", surname:"Tenma"};

function anOp(paramone, paramtwo){

    console.log(paramone+ '' + this.name+ '' + this.surname+ '' + '' + paramtwo);

}

// anOp.apply(monsObj,['Hello','this is Johan Liebert']);
// anOp.apply(monstObj,['Hello','this is Johan Liebert']);



// Bind----------

var dragObj = {name:"Goku", surname:"Unknown"};
var dragonObj ={name:"Vegeta", surname:"Unknown"};

function kameHa(arg){
    console.log(this.name + this.surname + arg);
}

var draObjOne = kameHa.bind(dragObj);
var draObjTwo = kameHa.bind(dragonObj);

draObjOne('Its Freeza!!!!');
draObjTwo('Its Freeza!!!!');

console.log(draObjOne);
console.log(draObjTwo);

