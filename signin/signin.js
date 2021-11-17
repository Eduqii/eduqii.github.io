const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if (email === "adjierteh@yahoo.com" && password === "1!35") {
        // alert("You have successfully logged in.");
        return window.location.assign("../home/index.html");
    } 
    else if(email === "benjamin.amoah1970@gmail.com" && password === "478@"){
        return window.location.assign("../home/index.html");
    }
    else if(email === "azumah@yahoo.co.uk" && password === "567#"){
        return window.location.assign("../home/index.html");
    }
    else if(email === "melodyakuamoah@yahoo.com" && password === "236#"){
        return window.location.assign("../home/index.html");
    }
    else if(email === "kamahsdaa@yahoo.co.uk" && password === "456("){
        return window.location.assign("../home/index.html");
    }
    else if(email === "toodles@me.com" && password === "tiidles2"){
        return window.location.assign("../home/index.html");
    }
    else if(email === "earthgoggles@gmail.com" && password === "1478@"){
        return window.location.assign("../home/index.html");
    }
    else if(email === "richardcudjoe91@gmail.com" && password === "1378@"){
        return window.location.assign("../home/index.html");
    }
    else if(email === "felixfelixantwi@gmail.com" && password === "a478@"){
        return window.location.assign("../home/index.html");
    }
    else if(email === "eshunbismark84@gmail.com" && password === "4h78@"){
        return window.location.assign("../home/index.html");
    }
    else if(email === "eshunbismark84@gmail.com" && password === "4h78@"){
        return window.location.assign("../home/index.html");
    }
    else if(email === "SirSammy@username" || email== "sirsammy@username" || email=="SIRSAMMY@USERNAME" && password === "100%1"){
        document.write("Logging in as Sir Sammy. Please wait...")
        return window.location.assign("../home/index.html");
    }
    else if(email ==="guestuser@me.com" && password ==="g100"){
        document.write("logging in as guest. Please wait...");
        return window.location.assign("../home/index.html");
    }

    else {
        loginErrorMsg.style.opacity = 1;
    }

})
// var setsession = window.sessionStorage.setItem("user", "loggedin");
   
//  const loginForm = document.getElementById("login-form");
// const loginButton = document.getElementById("login-form-submit");
// const loginErrorMsg = document.getElementById("login-error-msg");
// loginButton.addEventListener("click", (e) => {
// if(
// window.location.href!=="../home/index.html"
// )
// {
// /* some code to load */
// loginErrorMsg.style.opacity = 1;
// }else{
//  alert("You have successfully logged in.");
// }
// })

