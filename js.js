// NAV Code
function MenuExpand(){
  $('.rightMenu').toggleClass('Expanded');
  $('.MEIcon').toggleClass('flip');
  $('.DotParent').toggleClass('DotsExpanded');
}

// Carousel Code
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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

var ASTimeout;
function autoSlides() {
  ASTimeout = setTimeout(function(){
    Advance(1);
  }, 10000);
}

function Advance(direction){
  plusSlides(direction);
  clearTimeout(ASTimeout);
  ASTimeout = null;
  autoSlides();
}

document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 37:
    Advance(-1);
    break;
    case 39:
    Advance(1);
    break;
  }
};

document.addEventListener('swiped-left', function(e) {
  Advance(1);
});
document.addEventListener('swiped-right', function(e) {
  Advance(-1);
});