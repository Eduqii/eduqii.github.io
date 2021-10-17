const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if (email === "Joseph@gmail.com" && password === "01!mrcommey100") {
        alert("You have successfully logged in.");
        return window.location.assign("../home/index.php");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
    // switch (true) {
    //     case (email ==="Joseph@gmail.com" && password === "01!mrcommey100"):
    //     alert("You have successfully logged in.");
    //     // return window.location.assign("../home/index.php");
    //       break;
    //     default:
    //         loginErrorMsg.style.opacity = 1;
    //   }

})