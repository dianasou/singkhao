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

// set active class to button when clicked in navbar: https://youtu.be/BI3kNsTruWo
const currentLocation = location.href;
const menuItem = document.querySelectorAll('.nav-link');
const menuLength = menuItem.length;

for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = 'active';
  }
}

// add/subtract numPeople for Reservations
function increase() {
  var userInput = document.getElementById('numPeople');
  if (userInput.value < 20) {
    userInput.value++;
  }
}

function decrease() {
  var userInput = document.getElementById('numPeople');
  if (userInput.value > 2) {
    userInput.value--;
  }
}

// manual slideshow
var slideIndex = 1;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

/*
// automatic slideshow
var slideIndex2 = 0;
carousel();

function carousel() {
  var z;
  var slides2 = document.getElementsByClassName('mySlides2');
  for (z = 0; z < slides2.length; z++) {
    slides2[z].style.display = 'none';
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {
    slideIndex2 = 1;
  }
  slides2[slideIndex2 - 1].style.display = 'block';
  setTimeout(carousel, 4000); // Change image every 4 seconds
}
*/
