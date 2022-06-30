let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let forest = document.getElementById('forest');
let explor_bnt = document.getElementById('Explor_bnt');
let rocks = document.getElementById('rocks');
let water = document.getElementById('water');
let header = document.getElementById('header');

window.addEventListener('scroll',function () {
	let value = window.scrollY;
	text.style.top = 50 + value * -0.4 + '%';
	bird1.style.top = value * -1.5 + 'px';
	bird1.style.left = value * 2 + 'px';
	bird2.style.top = value * -1.5 + 'px';
	bird2.style.left = value * -5 + 'px';
	explor_bnt.style.marginTop = value * 1.5 + 'px';
	rocks.style.top = value * -0.12 + 'px';
	forest.style.top = value * 0.25 + 'px';
	header.style.top = value * 0.5 + 'px';
})

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2500); // Change image every 2.5 seconds
}