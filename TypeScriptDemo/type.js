// let a:number;
// a=10;
// console.log(a);
function getArrayOfObject(cust) {
    var array = [];
    array.push(cust);
    return array;
}
console.log(getArrayOfObject({ name: "charan", id: 11 }));
