// let product={
//     pid:100,
//     name:"TV",
//     price:4000000,
//     getDiscountPrice:function(discount){
//         let discountAmount = (this.price * discount/100);
//         return this.price - discountAmount;
//     }
// }
// console.log(product.getDiscountPrice(18));

// //Array operations

// let num = [12,4,67,45,3,79];
// console.log(num);

// //insert

// num.unshift(54,75);
// console.log(num);


// num.push(15,43,55);
// console.log(num);


// num.splice(3,0,23,37);
// console.log(num);

// //delete

// let x =  num.shift();
// console.log(num);
// console.log(x);


// let y = num.pop();
// console.log(num);
// console.log(y);


// let z = num.splice(4,2);
// console.log(num);
// console.log(z);

// //update

// num.splice(3,1,27);
// console.log(num);

// import {a} from './srctest1.js';

// console.log(a);


let textInput = document.querySelector("#username");
let emailInput = document.querySelector("#email");
let form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let name = textInput.value;
    let eMail = emailInput.value;

    console.log({name,eMail});
})