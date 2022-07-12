const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const level = loginForm.level.value;
    const email = loginForm.email.value;
    const password = loginForm.password.value;


        if(level === "jhs" && email ==="guestuser@me" && password ==="g100"){
            var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            document.write("logging in as guest. Please wait...");
            if (isMobile) {
              window.location.assign("https://eduqii.github.io/level/jhslevel/allcourses/pastquestions_mobile/index.html");
            }
            else{
              window.location.assign("https://eduqii.github.io/level/jhslevel/allcourses/web_pastquestions/index.html");
            }
        }
        else if(level === "jhs" && email === "eshunbismark84@gmail.com" && password === "4h78@"){
            var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                document.write("logging in as Sir Bismark. Please wait...");
                if (isMobile) {
                  window.location.assign("https://eduqii.github.io/level/jhslevel/allcourses/pastquestions_mobile/index.html");
                }
                else{
                  window.location.assign("https://eduqii.github.io/level/jhslevel/allcourses/web_pastquestions/index.html");
                }
        }
        else if(level === "jhs" && email === "SirSammy@username" || email== "sirsammy@username" || email=="SIRSAMMY@USERNAME" && password === "100%1"){
            var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                document.write("logging in as Sir Sammy. Please wait...");
                if (isMobile) {
                  window.location.assign("https://eduqii.github.io/level/jhslevel/allcourses/pastquestions_mobile/index.html");
                }
                else{
                  window.location.assign("https://eduqii.github.io/level/jhslevel/allcourses/web_pastquestions/index.html");
                }
        }
        else if(level === "jhs" && email === "earthgoggles@gmail.com" && password === "1478@"){
            var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                    document.write("logging in as Sir Prince. Please wait...");
                    if (isMobile) {
                      window.location.assign("https://eduqii.github.io/level/jhslevel/allcourses/pastquestions_mobile/index.html");
                    }
                    else{
                      window.location.assign("https://eduqii.github.io/level/jhslevel/allcourses/web_pastquestions/index.html");
                    }
        }
        else if(level === "jhs" && email === "richardcudjoe91@gmail.com" && password === "1378@"){
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                document.write("logging in as Mr. Richard Cudjoe. Please wait...");
                if (isMobile) {
                  window.location.assign("https://eduqii.github.io/level/jhslevel/allcourses/pastquestions_mobile/index.html");
                }
                else{
                  window.location.assign("https://eduqii.github.io/level/jhslevel/allcourses/web_pastquestions/index.html");
                }
        }
        else if (level == "primary" && email ==="guestuser@me" && password ==="g100") {
            return window.location.assign("https://eduqii.github.io/level/primarylevel/index.html");
        }
        else if(level === "primary" && email === "eshunbismark84@gmail.com" && password === "4h78@"){
            return window.location.assign("https://eduqii.github.io/level/primarylevel/index.html");
            // var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            //     document.write("logging in as Sir Bismark. Please wait...");
            //     if (isMobile) {
            //       window.location.assign("https://eduqii.github.io/level/jhslevel/allcourses/pastquestions_mobile/index.html");
            //     }
            //     else{
            //       window.location.assign("https://eduqii.github.io/level/jhslevel/allcourses/web_pastquestions/index.html");
            //     }
        }
        else if(level === "primary" && email === "SirSammy@username" || email== "sirsammy@username" || email=="SIRSAMMY@USERNAME" && password === "100%1"){
            return window.location.assign("https://eduqii.github.io/level/primarylevel/index.html");
            // var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            //     document.write("logging in as Sir Sammy. Please wait...");
            //     if (isMobile) {
            //       window.location.assign("https://eduqii.github.io/level/jhslevel/allcourses/pastquestions_mobile/index.html");
            //     }
            //     else{
            //       window.location.assign("https://eduqii.github.io/level/jhslevel/allcourses/web_pastquestions/index.html");
            //     }
        }
        else if(level === "primary" && email === "earthgoggles@gmail.com" && password === "1478@"){
            return window.location.assign("https://eduqii.github.io/level/primarylevel/index.html");
            // var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            //         document.write("logging in as Sir Prince. Please wait...");
            //         if (isMobile) {
            //           window.location.assign("https://eduqii.github.io/level/jhslevel/allcourses/pastquestions_mobile/index.html");
            //         }
            //         else{
            //           window.location.assign("https://eduqii.github.io/level/jhslevel/allcourses/web_pastquestions/index.html");
            //         }
        }
        else if(level === "primary" && email === "richardcudjoe91@gmail.com" && password === "1378@"){
            return window.location.assign("https://eduqii.github.io/level/primarylevel/index.html");
        // var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        //         document.write("logging in as Mr. Richard Cudjoe. Please wait...");
        //         if (isMobile) {
        //           window.location.assign("https://eduqii.github.io/level/jhslevel/allcourses/pastquestions_mobile/index.html");
        //         }
        //         else{
        //           window.location.assign("https://eduqii.github.io/level/jhslevel/allcourses/web_pastquestions/index.html");
        //         }
        }

        else 
            {
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

