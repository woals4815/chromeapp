const body= document.querySelector("body"),
    form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    h2 = body.querySelector("h2");

const USER = "currentUser",
    SHOWING = "showing";

function paintUser(user){
    h2.innerText = `Hello! ${user}`;
}

function saveUser(value){
    localStorage.setItem(USER, value);
}

function loadUser(){
    const user = localStorage.getItem(USER);     
    if (user){
        form.classList.remove(SHOWING);
        todoForm.classList.add(SHOWING);
        paintUser(user);
    }else{
        form.classList.add(SHOWING);
    }
}
function handleSubmit(event){
    event.preventDefault();
    const value = input.value;
    saveUser(value);
    loadUser();
}
function init(){
    loadUser();
    form.addEventListener("submit", handleSubmit);    
}
init();