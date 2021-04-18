import "../scss/main.scss";

const submitBtn = document.getElementById("sign-up-submit");
const errorMessageEl = document.getElementById(" email-error-message");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const submittedEmail = document.getElementById("email").value;
  if (validateEmail(submittedEmail)) {
    errorMessageEl.classList.remove("visible");
  } else {
    errorMessageEl.classList.add("visible");
  }
});

const validateEmail = (submittedEmail) => {
  const mailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (submittedEmail.match(mailRegEx)) {
    return true;
  }
  return false;
};
