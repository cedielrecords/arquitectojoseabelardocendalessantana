const imagenes = [
  { src: "img/1.jpeg", caption: "Diseño y construcción - Colegio Cardenal Sancha, Bogotá, 1997." },
  { src: "img/2.png", caption: "Proyecto arquitectónico institucional - Bogotá." },
  { src: "img/3.png", caption: "Intervención estructural y ampliación de edificio educativo." },
  { src: "img/4.png", caption: "Desarrollo arquitectónico y ejecución de obra civil." },
  { src: "img/6.png", caption: "Obra civil y diseño arquitectónico." },
  { src: "img/7.png", caption: "Proyecto estructural institucional." },
  { src: "img/8.png", caption: "Infraestructura educativa - Bogotá." },
  { src: "img/9.png", caption: "Desarrollo técnico y constructivo." },
  { src: "img/10.png", caption: "Proyecto arquitectónico y estructural." },
  { src: "img/11.png", caption: "Intervención estructural especializada." },
  { src: "img/12.png", caption: "Obra arquitectónica institucional." }
];

let indice = 0;
let startX = 0;

document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("imagenActual");
  const caption = document.getElementById("caption");
  const btnContinuar = document.getElementById("btnContinuar");
  const portada = document.getElementById("portada");
  const galeria = document.getElementById("galeria");
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");

  // Cargar caption inicial (evita vacío)
  caption.textContent = imagenes[0].caption;

  function mostrarImagen(nuevoIndice) {
    indice = (nuevoIndice + imagenes.length) % imagenes.length;

    img.style.opacity = "0.4"; // fade suave sin negro

    setTimeout(() => {
      img.src = imagenes[indice].src;
      caption.textContent = imagenes[indice].caption;
      img.style.opacity = "1";
    }, 150);
  }

  // CONTINUAR (mantiene tu intro intacta)
  btnContinuar.addEventListener("click", () => {
    portada.style.transition = "opacity 0.8s ease";
    portada.style.opacity = "0";

    setTimeout(() => {
      portada.style.display = "none";
      galeria.classList.remove("oculto");
      mostrarImagen(0);
    }, 800);
  });

  // Flechas
  next.addEventListener("click", () => mostrarImagen(indice + 1));
  prev.addEventListener("click", () => mostrarImagen(indice - 1));

  // Swipe móvil estable (sin bugs)
  document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  document.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        mostrarImagen(indice + 1);
      } else {
        mostrarImagen(indice - 1);
      }
    }
  });
});