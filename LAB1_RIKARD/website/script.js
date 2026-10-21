
const form = document.getElementById("feedback-form");
const inputName = document.getElementById("name");

form.addEventListener("submit", function(event) {
    event.preventDefault();                 //stop reload page
   
        if (inputName.value.trim().length < 2) {
        alert("You must have at least 2 letter.");
    } else {
        alert("Your name is OK.");
    }
});


