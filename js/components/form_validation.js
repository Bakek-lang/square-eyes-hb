const contactForm = document.querySelector("form");
const contactName = document.getElementById("name");
const contactEmail = document.getElementById("email");

function checkContactName() {
  if (contactName.value.length < 1) {
    console.log("Not long enough");
    return false;
  }
  return true;
}

function checkContactEmail() {
  const emailValue = contactEmail.value;
  if (emailValue.trim().length < 1) {
    console.log("nope");
    return false;
  }
  return true;
}

function checkContactForm(event) {
  if (!checkContactName() || !checkContactEmail()) {
    event.preventDefault();
  }
}

contactForm.addEventListener("submit", checkContactForm);
