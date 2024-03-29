let url = "https://dummy.restapiexample.com/api/v1/employees";
let EmployData=document.querySelector("ul")
let right_side=document.querySelector('.right-content')
const getData = async (url) => {
    try {
        const response = await fetch(url);
 
        // Check if the response status is OK (200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
 
        const parsedData = await response.json();
   console.log(parsedData)
 
 
for (let i = 0; i < parsedData.data.length; i++) {
    let newLi = document.createElement('li');
    let img=`https://reqres.in/img/faces/${i+1}-image.jpg`
    newLi.setAttribute("id",i)
    parsedData.data[i].profile_img=img
 
    if (i % 2 !== 0) {
        newLi.setAttribute("class", "odd-col");
        
        
    } else {
        newLi.setAttribute("class", "even-col");
    }
 
    newLi.innerHTML = `Name: ${parsedData.data[i].employee_name} id:${i+1}`;
    EmployData.appendChild(newLi);
right_side.innerHTML= `<div class="container"><img src="${parsedData.data[0].profile_img}" alt="Profile Image" class="images">
<div class="details-text">
<h2 class="right-header-name">Name: ${parsedData.data[0].employee_name}</h2>
<p class="designation">Associate</p>
<div class="emp-description">
<p>ID: ${parsedData.data[0].id}</p>
<p>Age: ${parsedData.data[0].employee_age}</p>
<p>Salary: ${parsedData.data[0].employee_salary}</p></div></div></div>`
 
    newLi.addEventListener("click",()=>{
        displayDetails(parsedData.data[i]);
 
    })
    
}
 
        
    } catch (error) {
        console.error(error);
    }
};
 
getData(url)
 
const displayDetails=(employee)=>{
right_side.innerHTML=""
 
right_side.innerHTML= `<div class="container"><img src="${employee.profile_img}" alt="Profile Image" class="images">
<div class="details-text">
<h2 class="right-header-name">Name: ${employee.employee_name}</h2>
<p class="designation">Associate</p>
<div class="emp-description">
 
ID: ${employee.id}</p>
<p>Age: ${employee.employee_age}</p>
<p>Salary: ${employee.employee_salary}</p></div></div></div>`
}