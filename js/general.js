// start of the filter function for PhotoGallery
// reference: https://dev.to/dhintz89/simple-filters-in-css-or-js-185k
function filterObjects(e) {
    const objects = document.querySelectorAll(".filterableElementsPG div"); // select all element divs
    let filter = e.target.dataset.filter; // grab the value in the event target's data-filter attribute
    if (filter === '*'){
        objects.forEach(object => object.classList.remove('hidden'))// if filter=all, .hidden is not applied to every element
    }else{
        objects.forEach(object => {
            object.classList.contains(filter) // does the element have the filter in its class list?
            ? object.classList.remove('hidden') // if yes, make sure .hidden is not applied
            : object.classList.add('hidden'); // if no, apply .hidden
          });
    }
  };
// end of the filter function for PhotoGallery

// start of slideshow in About Me section
// reference: https://www.w3schools.com/howto/howto_js_slideshow.asp
// default: show slide 1
let slideIndex = 1;
showSlides(slideIndex);
// next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// current image 
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// function to control show which slide
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
//end of slideshow in About Me section

// start of the back to top button function of each page
// reference: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// the function for button to show up when scrolling the window for some value needs to be improved, as the button constantly shows up despite scrolling
var buttons = document.getElementsByClassName("topBtn")

for(var i=0; i < buttons.length(); i++){
  buttons[i].addEventListener('click', topFunction()) // when click the button, direct users back to top
  window.addEventListener('scroll', function(){
    if (this.document.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    buttons[i].style.display = "block";
  } else {
    buttons[i].style.display = "none";
  }
  })
  }
// when the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//end of the back to top button function of each page

//start of the function to switch between two different css files
//reference: https://stackoverflow.com/questions/30401880/switching-between-multiple-css-files-using-javascript
function switchToPrintStyles() {
    var stylesheet = document.querySelector('link[href="../css/general.css"]');
    stylesheet.href = '../css/print.css';

    var btnSwitchToPrint = document.getElementsByClassName('btnSwitchToPrint');
    var btnSwitchToNormal = document.getElementsByClassName('btnSwitchToNormal');

    for (var i = 0; i < btnSwitchToPrint.length; i++) {
        btnSwitchToPrint[i].style.display = 'none';
    }

    for (var i = 0; i < btnSwitchToNormal.length; i++) {
        btnSwitchToNormal[i].style.display = 'block';
    }
}

function switchToNormalStyles() {
    var stylesheet = document.querySelector('link[href="../css/print.css"]');
    stylesheet.href = '../css/general.css';

    var btnSwitchToPrint = document.getElementsByClassName('btnSwitchToPrint');
    var btnSwitchToNormal = document.getElementsByClassName('btnSwitchToNormal');

    for (var i = 0; i < btnSwitchToPrint.length; i++) {
        btnSwitchToPrint[i].style.display = 'block';
    }

    for (var i = 0; i < btnSwitchToNormal.length; i++) {
        btnSwitchToNormal[i].style.display = 'none';
    }
}
//switch functions for the index page (homepage)
function switchToPrintStylesHP() {
  var stylesheet = document.querySelector('link[href="./css/general.css"]');
  stylesheet.href = './css/print.css';
  document.getElementById('btnSwitchToPrintHP').style.display = 'none';
  document.getElementById('btnSwitchToNormalHP').style.display = 'block';
}

function switchToNormalStylesHP() {
  var stylesheet = document.querySelector('link[href="./css/print.css"]');
  stylesheet.href = './css/general.css';
  document.getElementById('btnSwitchToPrintHP').style.display = 'block';
  document.getElementById('btnSwitchToNormalHP').style.display = 'none';
}
//end of the function to switch between two different css files