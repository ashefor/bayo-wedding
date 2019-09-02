AOS.init();



let countDownDate = new Date("Oct 5, 2019 07:30:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    let spandays = document.querySelector('.days')
    let spanhours = document.querySelector('.hours')
    let spanminutes = document.querySelector('.minutes')
    let spanseconds = document.querySelector('.seconds')
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
   
  
  spandays.innerHTML = ('0' + days).slice(-2)
  spanhours.innerHTML = ('0' + hours).slice(-2)
  spanminutes.innerHTML = ('0' + minutes).slice(-2)
  spanseconds.innerHTML = ('0' + seconds).slice(-2)
  // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
}, 1000);