const donateNow = document.getElementById("donate-Now");

donateNow.addEventListener("click", (e) => {
    e.preventDefault();

    return window.location.assign("https://dashboard.flutterwave.com/donate/ul0fl3zqnpre");
  }
