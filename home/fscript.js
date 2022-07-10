
function donateNow(){
    var page = window.open("https://flutterwave.com/donate/bjplsepb2trh");
    return page;
  }
//logout
  function logout(){
    window.setTimeout(function() {
            document.write("You are currently logged out \n redirecting to login page, please wait...");
    window.location.href = 'https://eduqii.github.io/signin/index.html';
}, 3000);
  }
//prevent page from moving back
function preventBack() { 
            window.history.forward(); 
        }
        setTimeout("preventBack()", 0);
        window.onunload = function () { null };