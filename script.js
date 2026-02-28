function entrarGaleria() {
  document.getElementById("hero").style.display = "none";
  document.getElementById("gallery").style.display = "block";
}

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const gallery = document.getElementById("gallery");
const zoomIcon = document.getElementById("zoomIcon");

function mostrarSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function cambiarSlide(direccion) {
  slideIndex += direccion;

  if (slideIndex < 0) slideIndex = slides.length - 1;
  if (slideIndex >= slides.length) slideIndex = 0;

  mostrarSlide(slideIndex);
}

/* ZOOM / ENCAJAR IMAGEN + CAMBIO DE ICONO */
function toggleZoom() {
  gallery.classList.toggle("fit-mode");

  if (gallery.classList.contains("fit-mode")) {
    // Icono flechas hacia adentro (reducir)
    zoomIcon.innerHTML = `
      <path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"
        stroke="white"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"/>
    `;
  } else {
    // Icono flechas hacia afuera (expandir)
    zoomIcon.innerHTML = `
      <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"
        stroke="white"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"/>
    `;
  }
}
