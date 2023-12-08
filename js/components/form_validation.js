const contactForm = document.querySelector("form");
const contactName = document.getElementById("name");
const contactEmail = document.getElementById("email");
const contactMessage = document.getElementById("subject");
const contactNameError = document.querySelector(".validation-message");
const contactEmailError = document.getElementById("email-validation");
const contactMessageError = document.getElementById("message-validation");

function checkContactName() {
  if (contactName.value.trim().length < 1) {
    contactNameError.classList.remove("hidden");
    contactNameError.textContent = "Please enter your name";
    return false;
  } else {
    contactNameError.classList.add("hidden");
    return true;
  }
}

function checkContactEmail() {
  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
  const emailValue = contactEmail.value;
  if (emailValue.trim().length < 1) {
    contactEmailError.classList.remove("hidden");
    contactEmailError.textContent = "Please enter your email";
    return false;
  } else if (!emailRegex.test(emailValue)) {
    contactEmailError.classList.remove("hidden");
    contactEmailError.textContent = "Please enter a valid email address";
    return false;
  } else {
    contactEmailError.classList.add("hidden");
    return true;
  }
}

function checkContactMessage() {
  if (contactMessage.value.trim().length < 1) {
    contactMessageError.classList.remove("hidden");
    contactMessageError.textContent = "Please enter a message";
    return false;
  } else {
    contactMessageError.classList.add("hidden");
    return true;
  }
}

function checkContactForm(event) {
  const checkContactNameValue = checkContactName();
  const checkContactEmailValue = checkContactEmail();
  const checkContactMessageValue = checkContactMessage();
  if (
    !checkContactNameValue ||
    !checkContactEmailValue ||
    !checkContactMessageValue
  ) {
    event.preventDefault();
  }
}

contactForm.addEventListener("submit", checkContactForm);
