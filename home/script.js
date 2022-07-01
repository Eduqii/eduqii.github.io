const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if (email === "adjierteh@yahoo.com" && password === "1!35") {
        // alert("You have successfully logged in.");
        return window.location.assign("../home/index.html");
    }
  }
