
const form = document.getElementById("feedback-form");
const inputName = document.getElementById("name");
const nameError = document.getElementById("name-error");
const namePattern = /^[\p{L}]+(?:[ '-][\p{L}]+)*$/u;

form.addEventListener("submit", function(event) {
    event.preventDefault();                 //stop reload page
   
        if (inputName.value.trim().length < 2 || !namePattern.test(inputName.value.trim())) {
        nameError.textContent = "Name must have at least 2 characters. Only letters, spaces, apostrophes and hyphens are allowed.";
        inputName.style.border = "2px solid red";
    } else {
        nameError.textContent = "";
        inputName.style.border = "2px solid green";
    }
});


inputName.addEventListener("input", function() {
    nameError.textContent = "";
    inputName.style.border = "";
});

