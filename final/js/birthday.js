const home = document.querySelector('.home');
    home.addEventListener("click", () => {
      document.location.href = 'https://eharn.github.io/lofty/final/main.html';
    })

let birthdate = localStorage.getItem('birthdate');
console.log(birthdate);
var time = new Date();


let bdt = new Date(birthdate);
bdt.setHours(24,0,0,0);
console.log(bdt);

let year = time.getFullYear();
let end = new Date(year, 12, 0);
end.setHours(24,0,0,0);
console.log(end);
if (bdt > now && bdt < end ){
  bdt.setFullYear(year);
}else {
  bdt.setFullYear(year+1);
}
let timespace = time.getTimezoneOffset();
let bdtspace = bdt.getTimezoneOffset();
console.log(timespace);
console.log(bdtspace);

if (timespace === bdtspace){
  var now = time.getTime();
  var bday = new Date(bdt).getTime();
  console.log(time);
} else {
  var now = time.getTime();
  var bday = new Date(bdt).getTime();
  let space = (timespace - bdtspace);
  console.log(space);
  let milspace = space * 60000;
  bday = bday + milspace;
}
console.log(bday);
console.log(now);

var x = setInterval(function() {

    // Find the distance between now and the count down date
    var timeSpan = bday - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(timeSpan / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeSpan % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeSpan % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeSpan % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.querySelector("#days").innerHTML = days;
    document.querySelector("#wordDays").innerHTML = "days";
    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#wordHours").innerHTML = "hours";
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#wordMinutes").innerHTML = "minutes";
    document.querySelector("#seconds").innerHTML = seconds;
    document.querySelector("#wordSeconds").innerHTML = "seconds"; 
   
  }, 1000);