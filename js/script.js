function menuToggle () {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    // add responsive to className to show menu
    x.className += ' responsive';
  } else {
    // change className back to hide menu
    x.className = 'navtoggle';
  }
}

/*
// set active class to button when clicked in navbar: https://youtu.be/BI3kNsTruWo
const currentLocation = location.href;
const menuItem = document.querySelectorAll('.nav-link');
const menuLength = menuItem.length;

for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = 'active';
  }
}
*/

// manual Slideshow
var slideIndex = 1;
showSlides(slideIndex);

// next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/*
// automatic slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
*/
