function setFrormMessage(formElement, type, message) {
    const message = formElement.querySelector('.form__message');

    messageElemenet.textContent = message;
    messageElemenet.classList.remove("form__message--success", "form__message--error");
    messageElemenet.classList.add('form__messsage--${type}');
}

setFormMessage(loginForm, "success", "You'rs logged in!");

document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.addEventListener("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

document.querySelector("#linkLogin").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
});

loginForm.addEventListener("submit", e => {
    e.preventDefault();

    //Perform your AJAX/Fetch login

    setFormMessage(loginform, "error", "Invalid username/password combination");
  });
});