const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

const link = document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreeting()
}

function paintGreeting(){
    const username = localStorage.getItem(
        USERNAME_KEY
    );
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = `Hello ${username}`;
}

const savedUserName = localStorage.getItem(
    USERNAME_KEY
);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit" , onLoginSubmit);
}else{
    paintGreeting()
}