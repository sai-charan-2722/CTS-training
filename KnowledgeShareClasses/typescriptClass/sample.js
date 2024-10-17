// let x:string = "saicharan"
// let y:number = 20
// console.log(x,y)
// let arr:number[] = [];
// const arry:string[] = [];
// arry.push("anand")
// arry.push("sai")
// console.log(arry)
// let car:string|number;
// car = "innova";
// car = 20;
// function gethelp(firstName:string,age:number):any{
//     console.log(`my firstname is ${firstName} and age is ${age}`);
// }
// gethelp("sai",22);
// interface Engine{
//     carName:string,
//     model:number,
//     color?:string,
//     brandNew?:boolean
// }
// let carEngine:Engine[] = [];
// carEngine.push({
//     carName:"ford",
//     model:24,
//     color:"blue",
//     brandNew:true
// })
//  carEngine.push({
//     carName:"BMW",
//     model:34,
//     color:"red"
//  })
// console.log(carEngine);
// class Food{
//     item:string;
//     orderId:number
//     constructor(item:string,orderId:number){
//     }
// }
// let foodItem = new Food("halwa",120)
// console.log(foodItem)
// let group:[number,boolean,string];
// var color = "red";
// color = "blue";
// console.log(color);


let now = new Date();

now = now.toISOString().split('T')[0]
// console.log(now);

function clicking(){
    const btn = document.getElementById("btn").addEventListener("click",()=>{
        const inp = document.getElementById("dateOfBirth").value;
        console.log(inp)
        
    })
}
