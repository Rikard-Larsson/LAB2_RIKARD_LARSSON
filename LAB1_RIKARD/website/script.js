
const form = document.getElementById("feedback-form");
const inputName = document.getElementById("name");
const nameError = document.getElementById("name-error");
const namePattern = /^[\p{L}]+(?:[ '-][\p{L}]+)*$/u;
const inputEmail = document.getElementById("email");
const emailError = document.getElementById("email-error");

form.addEventListener("submit", function(event) {
    event.preventDefault();                 //stop reload page
   
        if (inputName.value.trim().length < 2 || !namePattern.test(inputName.value.trim())) {
        nameError.textContent = "Name must have at least 2 characters. Only letters, spaces, apostrophes and hyphens are allowed.";
        inputName.style.border = "2px solid red";
    } else {
        nameError.textContent = "";
        inputName.style.border = "2px solid green";
    }

        if (!inputEmail.validity.valid) {
        emailError.textContent = "Please enter a valid email address.";
        inputEmail.style.border = "2px solid red";
    } else {
    emailError.textContent = "";
    inputEmail.style.border = "2px solid green";
    }
});


inputName.addEventListener("input", function() {
    nameError.textContent = "";
    inputName.style.border = "";
});

inputEmail.addEventListener("input", function() {
    emailError.textContent = "";
    inputEmail.style.border = "";
});