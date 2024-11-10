// Date: 2021/05/24

// use of getElementById
myForm = document.getElementById("my-form");
console.log(myForm);

// use of querySelector
const firstName = document.querySelector(".first-name");
console.log(firstName);
const lastName = document.querySelector(".last-name");
console.log(lastName);
const email = myForm.elements["email"];
console.log(email);

const password = myForm.elements["password"];
const confirmPassword = myForm.elements["confirm-password"];
console.log(confirmPassword);
const usernameField = myForm.elements["username"];
const stateField = myForm.elements["state"];
const cityField = myForm.elements["city"];
const zipField = myForm.elements["zip"];
const checkField = myForm.elements["checkbox"];


// selecting using parentElement and nextElementSibling 
const parentElement = firstName.parentNode;
console.log(parentElement);
const siblingElement = parentElement.nextElementSibling;
console.log(siblingElement);


// use of addEventListener 1

myForm.addEventListener("submit", function(event) {
    if (password.value!== confirmPassword.value) {
        event.preventDefault(); 
        showCustomAlert('Passwords do not match');
    }
    
    });

// use of addEventListener 2
function togglePassword(){
    if (password.type === "password"){
        password.type = "text";
    } else {
        password.type = "password";
    }
}
function togglePassword1(){
    if (confirmPassword.type === "password"){
        confirmPassword.type = "text";
    } else {
        password.type = "password";
    }
}
// add a border if the passwords do not match when typing
confirmPassword.addEventListener("input", function(event){
    if (password.value !== confirmPassword.value){
        confirmPassword.style.border = "2px solid red";
    } else {
        confirmPassword.setCustomValidity("");
        confirmPassword.style.border = "2px solid green";
    }
});

