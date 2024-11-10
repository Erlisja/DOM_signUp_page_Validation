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

myForm.addEventListener("submit", function (event) {
    if (password.value !== confirmPassword.value) {
        event.preventDefault();
        alert("Passwords do not match");
    }

});

// use of addEventListener 2
function togglePassword() {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}
function togglePassword1() {
    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
    } else {
        password.type = "password";
    }
}
// add a border if the passwords do not match when typing
confirmPassword.addEventListener("input", function (event) {
    if (password.value !== confirmPassword.value) {
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
    // prevent any click events from propagating to the parent elements
    alertBox.addEventListener('click', function (event) {
        event.stopPropagation();
    });
}

// Function to close the custom alert when the close buton is clicked
function closeCustomAlert() {
    const alertBox = document.getElementById('custom-alert');
    alertBox.style.display = 'none'; // Hide the alert
}

// function to validate the username
function validateUsername() {
    const usernameValue = usernameField.value;
    if (usernameValue.length < 4) {
        showCustomAlert("Username must be at least 4 characters long");
        usernameField.setAttribute("placeholder", "Username too short...");
        usernameField.style.border = "2px solid red";
        usernameField.focus();
        return false

    }
    // check if the username contains any special characters
    else if (!/^[a-zA-Z0-9]+$/.test(usernameValue)) {
        showCustomAlert("Username can only contain letters and numbers");
        usernameField.style.border = "2px solid red";
        usernameField.focus();
        return false;
    }
    else {
        closeCustomAlert();
        usernameField.style.border = "2px solid green";
    }
}
// this will validate the username when the user stops typing in the field
usernameField.addEventListener("blur", validateUsername);


//  event listener to show tha password strength
password.addEventListener("input", function () {
    const strengthBar = document.getElementById("passwordStrength");
    const password = this.value;
    let strength = 0;
    // change the color of the strength bar to green based on the strength
    strengthBar.style.accentColor = "green";
    if (password.length >= 8) strength += 20;
    if (/[A-Z]/.test(password)) strength += 20;
    if (/[0-9]/.test(password)) strength += 20;
    if (/[^A-Za-z0-9]/.test(password)) strength += 20;
    if (password.length >= 12) strength += 20;
    strengthBar.value = strength;
});


// form submission validation
// check if all the fields are filled in and they are valid before submitting the form
// use BOM properties to show the message to the user

myForm.addEventListener("submit", formValidation);

// function to validate the form
function formValidation() {
    const requiredFields = [firstName, lastName, email, password, confirmPassword, usernameField, stateField, cityField, zipField, checkField];
    let isValid = true;
    requiredFields.forEach((field) => {
        // if the input field is empty set the border to red
        if (!field.value || validateUsername() === false || password.value !== confirmPassword.value) {
            isValid = false;
            field.style.border = "2px solid red";
            return false;

        } else {
            field.style.border = "2px solid green";
            return true;

        }
    });
    if (!isValid) {
        feedbackMessage.style.display = "block";
        feedbackMessage.style.color = "red";
        feedbackMessage.textContent = "Form not submitted. Please fill in all the fields";
    } else {
        feedbackMessage.style.display = "block";
        feedbackMessage.textContent = "Form submitted successfully";
        feedbackMessage.style.color = "green";
        // set timeout to show the alert after the form is submitted
        setTimeout(() => {
            feedbackMessage.style.display = "none";
        }, 7000);

     // show BOM alert
    window.alert("Form submitted successfully");
    console.log("submitted");  
    }
}


// create a ne element and append it to the form
// ==== this is an element for feedback to the user

const feedbackMessage = document.createElement("div");
feedbackMessage.id = "feedback-message";
feedbackMessage.style.marginTop = "10px";
feedbackMessage.style.display = "none";
feedbackMessage.style.backgroundColor = "lightgrey";

//  append the feedback message to the form
myForm.prepend(feedbackMessage);

// use BOM properties to show the current URL
console.log("Current URL: ", window.location.href);


