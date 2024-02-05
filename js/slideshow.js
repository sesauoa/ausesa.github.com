// Slideshow
let headerBackgrounds = document.querySelectorAll(".background");
let imageIndex = 0; 

function changeBackground() {
  headerBackgrounds[imageIndex].classList.remove("showing");
  imageIndex = (imageIndex + 1) % headerBackgrounds.length;
  headerBackgrounds[imageIndex].classList.add("showing");
}

setInterval(changeBackground, 3000);