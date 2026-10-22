
const form = document.getElementById("feedback-form");
const inputName = document.getElementById("name");
const nameError = document.getElementById("name-error");

form.addEventListener("submit", function(event) {
    event.preventDefault();                 //stop reload page
   
        if (inputName.value.trim().length < 2) {
        nameError.textContent = "Name must have at least 2 characters.";
    } else {
        
    }
});


