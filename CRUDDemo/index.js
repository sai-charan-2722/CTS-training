let textInput = document.querySelector("#username");
let emailInput = document.querySelector("#email");
let form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(typeof e);
    let name = textInput.value;
    let eMail = emailInput.value;

    console.log({name,eMail});
})