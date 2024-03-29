// let a:number;
// a=10;
// console.log(a);

// IS-A and HAS-A relationship in inheritance
//car has a engine

// class Engine{
//     chassisNo:number;
//     modelName:string;
//     brand?:string
// }

// class Car{
//     // color:string;
//     // carNo:number;
//     // engine:Engine;
//     constructor(public color:string, public carNo:number, public engine:Engine){
        
//     }
// }

// class NewCar extends Car{
//     // speed:number;
//     // tyreType:string;
//     constructor(public color:string, public carNo:number, public engine:Engine, public speed:number, public tyreType:string){
//         super(color, carNo, engine);
//     }
// }

// let nCar:NewCar = new NewCar("blue", 123, {chassisNo:456, modelName:"ferrari"}, 789, "tubeless");

// console.log(nCar);

//tuple practice

// function getUsernames(person:[pid:number,username:string][]){
//     //return array of usernames['ravi','bhanu','kiran','vikas']
//     // let result:any = [];
//     // for(let i=0;i<person.length;i++){
//     //     result.push(person[i][1]);
//     // }
//     // return result;

//     let userNames = person.map((name)=>{
//         return name[1];
//     });
//     return userNames;
// }
// let x = getUsernames([[1,'ravi'],[2,'bhanu'],[3,'kiran'],[4,'vikas']])
// console.log(x);

interface Customer{
    name:string,
    id:number
}

function getArrayOfObject(cust:Customer):Customer[]{
    let array:Customer[] = [];
    array.push(cust);
    return array;
}

console.log(getArrayOfObject({name:"charan", id:11}))