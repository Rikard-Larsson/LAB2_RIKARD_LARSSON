
const form = document.getElementById("feedback-form");
const inputName = document.getElementById("name");
const nameError = document.getElementById("name-error");
const namePattern = /^[\p{L}]+(?:[ '-][\p{L}]+)*$/u;
const inputEmail = document.getElementById("email");
const emailError = document.getElementById("email-error");
const inputTopic = document.getElementById("topic");
const topicError = document.getElementById("topic-error");
const charCounter = document.getElementById("char-counter");
const inputMessage = document.getElementById("message");
const messageError = document.getElementById("message-error");
const inputWebsite = document.getElementById("website");
const websiteError = document.getElementById("website-error");



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
        if (inputTopic.value === "") {
        topicError.textContent = "Please choose a topic.";
        inputTopic.style.border = "2px solid red";
    } else {
        topicError.textContent = "";
        inputTopic.style.border = "2px solid green";
    }
        if (inputMessage.value.trim().length < 15) {
        messageError.textContent = "Please write at least 15 characters.";
        inputMessage.style.border = "2px solid red";
    } else {
        messageError.textContent = "";
        inputMessage.style.border = "2px solid green";
    }
        if (inputWebsite.value.trim() !== "" && !inputWebsite.validity.valid) {
        websiteError.textContent = "This is not a valid website URL.";
        inputWebsite.style.border = "2px solid red";
    } else {
        websiteError.textContent = "";

    if (inputWebsite.value.trim() !== "") {
        inputWebsite.style.border = "2px solid green";
    } else {
        inputWebsite.style.border = "";
    }

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

inputTopic.addEventListener("change", function() {
    if (inputTopic.value === "") {
        topicError.textContent = "Please choose a topic.";
        inputTopic.style.border = "2px solid red";
    } else {
        topicError.textContent = "";
        inputTopic.style.border = "2px solid green";
    }
});

inputMessage.addEventListener("input", function() {
    const count = inputMessage.value.length;
    charCounter.textContent = count + " characters (minimum 15)";
    if (count < 15) {
        charCounter.style.color = "red";
    } else {
        charCounter.style.color = "green";
        inputMessage.style.border = "2px solid green";
        messageError.textContent = "";
    }
});

inputWebsite.addEventListener("input", function() {
    websiteError.textContent = "";
    inputWebsite.style.border = "";
});