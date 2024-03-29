let employeData = document.querySelector(".empList");
let right_side=document.querySelector('.content-right')
async function getUserData(){
    let res = await fetch("https://dummy.restapiexample.com/api/v1/employees");
    let userData = res.json();


for(let i=0;i<userData.data.length;i++){
    let newLi = document.createElement('li');
    let img=`https://reqres.in/img/faces/${i+1}-image.jpg`
    newLi.setAttribute("id",i)
    userData.data[i].profile_img=img
 
    if (i % 2 !== 0) {
        newLi.setAttribute("class", "odd");
        
        
    } else {
        newLi.setAttribute("class", "even");
    }
    newLi.innerHTML = `Name: ${userData.data[i].employee_name} id:${i+1}`;
    employeData.appendChild(newLi);
    right_side.innerHTML= `<div class="container"><img src="${userData.data[0].profile_img}" alt="Profile Image" class="images">
    <div class="details-text">
    <h2 class="right-header-name">Name: ${userData.data[0].employee_name}</h2>
    <p class="designation">Associate</p>
    <div class="emp-description">
    <p>ID: ${userData.data[0].id}</p>
    <p>Age: ${userData.data[0].employee_age}</p>
    <p>Salary: ${userData.data[0].employee_salary}</p></div></div></div>`

    newLi.addEventListener("click",()=>{
        displayDetails(userData.data[i]);
 
    })
}
}
const displayDetails=(employee)=>{
    // right_side.innerHTML=""
     
    right_side.innerHTML= `<div class="container"><img src="${employee.profile_img}" alt="Profile Image" class="images">
    <div class="details-text">
    <h2 class="right-header-name">Name: ${employee.employee_name}</h2>
    <p class="designation">Associate</p>
    <div class="emp-description">
     
    ID: ${employee.id}</p>
    <p>Age: ${employee.employee_age}</p>
    <p>Salary: ${employee.employee_salary}</p></div></div></div>`
}