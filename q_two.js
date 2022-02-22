// prototype chain source: mdn

const Obj = function(){
    this.a=1;
    this.b =2;

}
const anObj = new Obj();

//Adding other properties to the function's prototype

Obj.prototype.b=6;
Obj.prototype.c = 7;

console.log(anObj.a);


// Is there a 'b' own property on anObj? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited.
// This is called Property Shadowing
console.log(anObj.b);

console.log(anObj.c);
console.log(anObj.d);

//console.log(anObj);