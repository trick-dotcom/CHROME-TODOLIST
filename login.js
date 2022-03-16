const loginUser = document.querySelector(".login_user input");
const nameOfUser = document.querySelector(".welcome");

function handleLoginForm(){
    console.log(loginUser.value)
}


loginUser.addEventListener("submit", handleLoginForm);
