function setFrormMessage(formElement, type, message) {
    const message = formElement.querySelector('.form__message');

    messageElemenet.textContent = message;
    messageElemenet.classList.remove("form__message--success", "form__message--error");
    messageElemenet.classList.add('form__messsage--${type}');
}

const port =8900;
app.listen(port);
console.log('Listening on server: http;//localhost:${port}');
setFormMessage(loginForm, "success", "You'rs logged in!");

//Landing page
app.get('/', (req,res)=>{
    res.send("loginForm");
})
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

//Handlebars setting
app.set("view engine","handlebars");
app.engine('hanldebars',exphandlebars({
       defaulthome: 'Hhanldehome.handlebars'
}));

loginForm.addEventListener("submit", e => {
    e.preventDefault();

    //Perform your AJAX/Fetch login

    setFormMessage(loginform, "error", "Invalid username/password combination");
  });
});
