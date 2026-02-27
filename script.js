function entrarGaleria() {
  document.getElementById("hero").style.display = "none";
  document.getElementById("gallery").style.display = "block";
}

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function cambiarSlide(direccion) {
  slideIndex += direccion;

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  mostrarSlide(slideIndex);
}