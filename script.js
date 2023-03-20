function validateEmail(emailInputId) {
  const emailInput = document.getElementById(emailInputId);
  if(!emailInput) {
    return;
  }
  const email = emailInput.value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorText = document.querySelector(`.${emailInputId}`);

  console.log(email)
  
  if (!emailRegex.test(email)) {
    errorText.style.display = "block";
    emailInput.style.border = "1px solid red"
    return false;
  }
  
  errorText.style.display = "none";
  emailInput.style.border = "1px solid black";
  return true;
}
