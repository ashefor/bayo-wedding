AOS.init({
  disable: false,
  duration: 900,
  easing: 'ease',
  once: true,
});

let countDownDate = new Date("Oct 5, 2019 09:00:00").getTime();
let x = setInterval(function () {

  let now = new Date().getTime();

  let distance = countDownDate - now;
  let spandays = document.querySelector('.days')
  let spanhours = document.querySelector('.hours')
  let spanminutes = document.querySelector('.minutes')
  let spanseconds = document.querySelector('.seconds')
  let countercontainer = document.querySelector('#timer_div')
  let expiredtimer = document.querySelector("#counter")

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);


  if (distance > 0) {
    spandays.innerHTML = ('0' + days).slice(-2)
    spanhours.innerHTML = ('0' + hours).slice(-2)
    spanminutes.innerHTML = ('0' + minutes).slice(-2)
    spanseconds.innerHTML = ('0' + seconds).slice(-2)
  }
  else if (distance < 0) {
    expiredtimer.innerHTML = "Welcome to OA2019!";
  }
}, 1000);

var $slider = $('.js-slider').slick({
  centerMode: true,
  centerPadding: '5%',
  slidesToShow: 5,
  autoplay: true,
  prevArrow: '.js-arrow-prev',
  nextArrow: '.js-arrow-next',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});

window.onscroll = function () { myFunction() };

var header = document.getElementById("navmenu");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

let navburger = document.querySelector('.navbar-burger')
let navmenu = document.querySelector('.navbar-menu')

showmenu = () => {
  console.log('succ')
  navburger.classList.toggle('is-active')
  navmenu.classList.toggle('is-active')
}

$(".navbar-burger").click(function(){
  $(".navbar-menu").toggleClass('is-active');
  $(".navbar-burger").toggleClass('is-active');

  if ($(window).width() < 768) {
    $(".navbar-item").on("click", function () {
      $(".navbar-burger").click();
    })
  }
})
