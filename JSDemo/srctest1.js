// let product={
//     name:"mobile",
//     price:32000,
//     color:"green"
// }
// console.log(product);

// product.memory = "256gb";
// console.log(product);

// delete product.color;
// console.log(product);

// product.price = 38000;
// console.log(product);


// let employeeData = [
//     {
//         eno:10,
//         salary:10000,
//         name:"sai"
//     },
//     {
//         eno:20,
//         salary:20000,
//         name:"charan"
//     },
//     {
//         eno:30,
//         salary:30000,
//         name:"yadav"
//     }
// ];

// console.log(employeeData);

// employeeData[0].skill = ['js','react','node'];
// console.log(employeeData);


// function Student(sno,name,skills,address){
//     this.sno = sno;
//     this.name = name;
//     this.skills = skills;
//     this.address = address;
// }

// let s1 = new Student(1,"sai",["js","react"],"hyd");
// console.log(s1);


// let users = [
//     {
//       id: 1,
//       name: "Emily Johnson",
//       company: "ABC Corporation",
//       username: "emily_johnson",
//       email: "emily.johnson@abccorporation.com",
//     },
//     {
//       id: 2,
//       name: "Michael Williams",
//       company: "XYZ Corp",
//       username: "michael_williams",
//       email: "michael.williams@xyzcorp.com",
//     },
//     {
//       id: 3,
//       name: "John Smith",
//       company: "Acme Inc.",
//       username: "john_smith",
//       email: "john.smith@acmeinc.com",
//     },
//   ];
//   //dynamic insertion
//   users[0].pno = 1234567890;
//   //dynamic deletion
//   delete users[1].username;
//   //dynamic updation
//   users[2].name = "john sena";

//   console.log(users);

// let emp={
//     eno:100,
//     name:"ravi",
//     skills:['js','react','angular'],
//     address:{
//         city:'hyd',
//         pincode:5656565,
//         street:{
//             streetName:'kphb',
//             lane:10
//         }
//     }
// }


// emp.qualification = "engineer";
// emp.address.street.lane = 15;
// emp.address.pincode = 6666;

// console.log(emp);

// //array methods

// let users = [
//     {
//       id: 1,
//       email: "michael.lawson@reqres.in",
//       first_name: "Michael",
//       last_name: "Lawson",
//       avatar: "https://reqres.in/img/faces/7-image.jpg"
//     },
//     {
//       id: 2,
//       email: "lindsay.ferguson@reqres.in",
//       first_name: "Lindsay",
//       last_name: "Ferguson",
//       avatar: "https://reqres.in/img/faces/8-image.jpg"
//     },
//     {
//       id: 3,
//       email: "tobias.funke@reqres.in",
//       first_name: "Tobias",
//       last_name: "Funke",
//       avatar: "https://reqres.in/img/faces/9-image.jpg"
//     },
//     {
//       id: 4,
//       email: "byron.fields@reqres.in",
//       first_name: "Byron",
//       last_name: "Fields",
//       avatar: "https://reqres.in/img/faces/10-image.jpg"
//     },
//     {
//       id: 5,
//       email: "george.edwards@reqres.in",
//       first_name: "George",
//       last_name: "Edwards",
//       avatar: "https://reqres.in/img/faces/11-image.jpg"
//     },
//     {
//       id: 6,
//       email: "rachel.howell@reqres.in",
//       first_name: "Rachel",
//       last_name: "Howell",
//       avatar: "https://reqres.in/img/faces/12-image.jpg"
//     },
//   ];



// let result = users.filter(user=>user.id>=2 && user.id<=5);
// // let result = users.filter(function(user){
// //   return user.id>=2 && user.id<=5;
// // });
// console.log(result);

// let res1 = users.find(user=>user.first_name==="Rachel")
// console.log(res1);

// let res3 = users.reduce((acc,user)=>acc+user.id,0);
// console.log(res3)

// let res4 = users.map(user=>user.id+5);
// console.log(res4);

// let obj = {
//   sno:10,
//   name:'charan',
//   address:{
//     city:'hyd',
//     pin:1256
//   }
// }
// let copy = {... obj};
// obj.name = 'sai';


// console.log(obj);
// console.log(copy);

//promise-concept

// let loveForever = true;
// console.log("Gf promised bf that they are made for each other");
// let loveForeverPromise = new Promise((fulfilled,rejected)=>{
//   setTimeout(() => {
//     if(loveForever===true){
//       fulfilled('worlds greatest lover');
//     }else{
//       rejected('timepass love');
//     }
//   }, 5000);
// });

// loveForeverPromise
// .then(message=>console.log(message)).
// catch(rejMessage=>console.log(rejMessage));


// a=2;
// b=2;
// charan = (a,b) => {
//   c = a+b;
//   return c;
// }

// console.log(charan(a,b));

// a=2;
// b=3;
// console.log(a);
// function charan(a,b){
//   c=a+b;
//   return c;
// }
// console.log(charan(a,b));

// let text = '{"name":"sai","rollno":80}';
// let obj = JSON.parse(text);
// console.log(obj);

// let jsonText = JSON.stringify(obj);
// console.log(jsonText);



//DOM

// let element = document.querySelector("#heading");
// console.log(element);

// let hero = document.querySelector("hero");
// console.log(hero);
// let btn = document.querySelector('button');

// btn.addEventListener('click',()=>{
//     hero.innerHTML += '<a href="#">link</a>';
// });


//fetch api

// fetch("https://jsonplaceholder.typicode.com/comments?limit=1")
// .then(msg=>msg.json())
// .then(msgd=>console.log(msgd))
// .catch(ms=>console.error(ms))


// async function fetchDetails(){
//     let details = await fetch("https://jsonplaceholder.typicode.com/comments?limit=1");
//     det = await details.json();
//     console.log(det);
// }

// fetchDetails();


// let promiseExample = ()=>{
//     heads = true;
//     return new Promise((resolve,reject)=>{
//         if(!heads){
//             resolve("its heads toss again")
//         }else{
//             reject("its tails")
//         }
//     })
// }



// promiseExample()
// .then((val)=>{
//     console.log("kulfiii",val)
// })
// .catch((val)=>{
//     console.log("rejected",val)
// })