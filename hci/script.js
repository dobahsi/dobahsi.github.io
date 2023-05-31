var nav = document.querySelector('.nav-bg');
console.log(nav);

function toggleMenu() {
    if (nav.classList.contains('displaynone')) {
        nav.classList.remove('displaynone');
    } else {
        nav.classList.add('displaynone');
    }
}

function toggleExtendUl(e) {
    
    if (e.target.localName == 'box-icon') {
        var ul = e.target.parentElement.parentElement.querySelector('.nav-extend-ul');

    } else {
        var ul = e.target.parentElement.querySelector('.nav-extend-ul');
    }

    var icon = ul.parentElement.querySelector('box-icon');

    
    if (ul.classList.contains('displaynone')) {
        ul.classList.remove('displaynone')
        icon.classList.add('rotate180');
    } else {
        ul.classList.add('displaynone')
        icon.classList.remove('rotate180');
    }   
    
}

var button = document.getElementById("theme-button");

button.addEventListener("click", function() {
    var root = document.documentElement;

    if (root.classList.contains("theme-dark")) {
        root.classList.remove("theme-dark");
    } else {
        root.classList.add("theme-dark");
    }
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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
