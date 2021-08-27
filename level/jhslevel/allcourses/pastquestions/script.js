// get the element
const visitorB = document.getElementById('loading')

// always checking if the element is clicked, if so, do alert('hello')
visitorB.addEventListener("load", () => {
  var visitors = document.getElementById('page_visits');
  visitors += 1;
  console.log(visitors);
  document.write(visitors + 1);
});