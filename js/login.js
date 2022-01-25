const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");
const toDoList = document.querySelector(".todo-list");

const setKey = "myname";
const CLASSHIDDEN = "hidden";

function handleMyName(event){
    event.preventDefault();
    const myName = loginInput.value;
    localStorage.setItem(setKey, myName);
    handleClassList(myName);
}
function handleClassList(user){
    loginForm.classList.add(CLASSHIDDEN);
    greeting.innerText = `어서와요 ${user}님!`;
    toDoList.classList.remove(CLASSHIDDEN);
}
const userName = localStorage.getItem(setKey);

if(userName !==null){
    handleClassList(userName);
}


loginForm.addEventListener("submit", handleMyName);
