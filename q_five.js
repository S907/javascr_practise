// Slice method :- Some points to remember
// slice method does not mutate the array



let arrInt = [1,2,3,4,5];
let arrIntt = [9,8,3,5];

let arrFlash = arrInt.slice(0,1);
//console.log(arrFlash);

let arrSup = arrIntt.splice(0,3);
console.log(arrSup);
console.log(arrIntt);
console.log(arrIntt[3]);// Splice methods take away it means mutates the array.