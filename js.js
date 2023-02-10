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
  ResetTimeout();
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

// Carousel Auto Slide
var ASTimeout;
function autoSlides() {
  ASTimeout = setTimeout(function(){
    Advance(1);
  }, 10000);
}

// Advance the carousel
function Advance(direction){
  plusSlides(direction);
  ResetTimeout();
}

// Reset the Timeout Delay
function ResetTimeout(){
  clearTimeout(ASTimeout);
  ASTimeout = null;
  autoSlides();
}

// Detect Arrow key for Carousel
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

// Detect Swipe on Carousel
document.addEventListener('swiped-left', function(e) {
  Advance(1);
});
document.addEventListener('swiped-right', function(e) {
  Advance(-1);
});

window.addEventListener("scroll", function() {
  var elementTarget = document.getElementById("CarouselOverlay");
  var DotParent = document.getElementById("DotParent");
  if (window.scrollY > ((elementTarget.offsetTop + elementTarget.offsetHeight)-50)) {
      DotParent.classList.add("stuck");
      DotParent.classList.remove("DPAnim");
  } else {
    DotParent.classList.remove("stuck");
    this.setTimeout(function(){
      DotParent.classList.add("DPAnim");
    }, 1000)
  }
});