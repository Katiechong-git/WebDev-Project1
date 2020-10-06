var slideNum = 0;
carousel();

function carousel() {
  var slidesArray = document.getElementsByClassName("mySlides");

  // reset to the beginning of slides array if we display all the images already
  if (slideNum > slidesArray.length) {
    slideNum = 0;
  }

  // do not display any images first
  for (var i = 0; i < slidesArray.length; i++) {
    slidesArray[i].style.display = "none";
  }

  // display the current image
  slidesArray[slideNum].style.display = "block";

  slideNum++;
  // Change image every 3 second
  setTimeout(carousel, 3000);
}
