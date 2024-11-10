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
        alert("Passwords do not match");
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

// Function to show the custom alert with a specific message
function showCustomAlert(message) {
    const alertBox = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('custom-alert-message');
  
    alertMessage.textContent = message; // Set the message
    alertBox.style.display = 'block'; // Show the alert
  }
  
  // Function to close the custom alert when the close buton is clicked
  function closeCustomAlert() {
    const alertBox = document.getElementById('custom-alert');
    alertBox.style.display = 'none'; // Hide the alert
  }

// function to validate the username
function validateUsername(){
    const usernameValue = usernameField.value;
    if (usernameValue.length < 4){
        
        showCustomAlert("Username must be at least 4 characters long");
    }
    // check if the username contains any special characters
    else if (!/^[a-zA-Z0-9]+$/.test(usernameValue)){
        showCustomAlert("Username can only contain letters and numbers");
    }
    else {
        closeCustomAlert();
    }
}
// this will validate the username when the user stops typing in the field
usernameField.addEventListener("blur", validateUsername);