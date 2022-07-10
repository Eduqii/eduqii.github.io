// get the element
const visitorB = document.getElementById('juniorHigh')

// always checking if the element is clicked, if so, do alert('hello')
visitorB.addEventListener("click", () => {
  var visitors = document.getElementById('page_visits');
  visitors += 1;
  console.log(visitors);
 document.getElementById('page_visits').innerHTML = visitors;
});