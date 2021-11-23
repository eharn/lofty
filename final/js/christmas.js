let today = new Date();
let deadline = new Date(today.getFullYear(), 11, 25).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var timeSpan = deadline - now;
      
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

  const santaImg = document.querySelector('#santa');
  santaImg.addEventListener('click', laugh, false);

  function laugh() {
    let audio = new Audio("audio/ho-ho-ho-sound-effect-46578980.mp3");
    audio.play();
 
  }