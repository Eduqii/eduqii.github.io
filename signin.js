const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginlevelerrormsg = document.getElementById("login-levelerror-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const level = loginForm.level.value;
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if (level == "jhs") 
    {
        if (email === "adjierteh@yahoo.com" && password === "1!35") 
        {
        // alert("You have successfully logged in.");
        juniorHigh();
        // return window.location.assign("../home/index.html");
        } 
        else if(email === "benjamin.amoah1970@gmail.com" && password === "478@"){
            // return window.location.assign("../home/index.html");
            juniorHigh()
        }
        else if(email === "azumah@yahoo.co.uk" && password === "567#"){
            juniorHigh()
            // return window.location.assign("../home/index.html");
        }
        else if(email === "melodyakuamoah@yahoo.com" && password === "236#"){
            juniorHigh()
            // return window.location.assign("../home/index.html");
        }
        else if(email === "kamahsdaa@yahoo.co.uk" && password === "456("){
            juniorHigh()
            // return window.location.assign("../home/index.html");
        }
        else if(email === "toodles@me.com" && password === "tiidles2"){
            juniorHigh()
            // return window.location.assign("../home/index.html");
        }
        else if(email === "earthgoggles@gmail.com" && password === "1478@"){
            document.write("Logging in as Sir Prince. Please wait...")
            juniorHigh()
            // return window.location.assign("../home/index.html");
        }
        else if(email === "richardcudjoe91@gmail.com" && password === "1378@"){
            juniorHigh()
            // return window.location.assign("../home/index.html");
        }
        else if(email === "felixfelixantwi@gmail.com" && password === "a478@"){
            juniorHigh()
            // return window.location.assign("../home/index.html");
        }
        else if(email === "eshunbismark84@gmail.com" && password === "4h78@"){
            juniorHigh()
            // return window.location.assign("../home/index.html");
        }
        else if(email === "eshunbismark84@gmail.com" && password === "4h78@"){
            juniorHigh()
            // return window.location.assign("../home/index.html");
        }
        else if(email === "SirSammy@username" || email== "sirsammy@username" || email=="SIRSAMMY@USERNAME" && password === "100%1"){
            document.write("Logging in as Sir Sammy. Please wait...")
            juniorHigh()
            // return window.location.assign("../home/index.html");
        }
        else if(email ==="guestuser@me" && password ==="g100"){
            document.write("logging in as guest. Please wait...");
            juniorHigh()
            // return window.location.assign("../home/index.html");
        }

    }
    else if (level == "primary") {
        return window.location.assign("https://eduqii.github.io/level/primarylevel/index.html");
    }
    else if (level == "null") {
        loginErrorMsg.style.opacity = 1;
    }

    else 
        {
        loginErrorMsg.style.opacity = 1;
        }
    

})

function juniorHigh(){
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  window.location.assign("https://eduqii.github.io/level/jhslevel/allcourses/pastquestions_mobile/index.html");
}
else{
  window.location.assign("https://eduqii.github.io/level/jhslevel/allcourses/web_pastquestions/index.html");
}
       }
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

