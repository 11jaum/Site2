let slideIndex = 0;

function moveSlide(n) {
  const slides = document.getElementsByClassName("card");
  const maxIndex = slides.length - 1;
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = maxIndex;
  } else if (slideIndex > maxIndex) {
    slideIndex = 0;
  }
  slides[slideIndex].scrollIntoView({ behavior: "smooth" });
}
