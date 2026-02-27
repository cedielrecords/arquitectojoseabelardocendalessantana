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
  { src: "img/12.png", caption: "Obra arquitectónica institucional." },
  { src: "img/13.1.png", caption: "Desarrollo urbano y arquitectónico." },
  { src: "img/14.1.png", caption: "Proyecto de ampliación arquitectónica." },
  { src: "img/15.2.png", caption: "Reforzamiento estructural - Colegio Cardenal Sancha, Bogotá." },
  { src: "img/16.png", caption: "Ejecución de obra civil y supervisión arquitectónica." },
  { src: "img/17.png", caption: "Infraestructura institucional educativa." },
  { src: "img/18.png", caption: "Desarrollo técnico y constructivo arquitectónico." },
  { src: "img/22.jpeg", caption: "Proyecto arquitectónico - documentación fotográfica." },
  { src: "img/23.jpeg", caption: "Registro de obra civil y proceso constructivo." },
  { src: "img/24.png", caption: "Diseño arquitectónico estructural." },
  { src: "img/25.png", caption: "Ejecución y dirección de obra." },
  { src: "img/26.png", caption: "Proyecto institucional arquitectónico." },
  { src: "img/27.png", caption: "Infraestructura y desarrollo constructivo." },
  { src: "img/28.png", caption: "Obra arquitectónica finalizada." }
];

let indice = 0;

document.addEventListener("DOMContentLoaded", function () {

  // ELEMENTOS (coherentes con tu HTML corregido)
  const img = document.getElementById("imagenActual");
  const caption = document.getElementById("caption");
  const btnContinuar = document.getElementById("btnContinuar");
  const portada = document.getElementById("portada");
  const galeria = document.getElementById("galeria");
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");

  // Verificación de seguridad (evita que todo se rompa si algo falta)
  if (!img || !caption || !btnContinuar || !portada || !galeria) {
    console.error("Error: elementos del DOM no encontrados.");
    return;
  }

  // FUNCIÓN PRINCIPAL (fade suave + carga segura)
  function mostrarImagen(nuevoIndice) {
    indice = nuevoIndice;

    if (indice >= imagenes.length) indice = 0;
    if (indice < 0) indice = imagenes.length - 1;

    const nuevaImagen = new Image();
    nuevaImagen.src = imagenes[indice].src;

    // Fade out
    img.style.opacity = "0";

    nuevaImagen.onload = () => {
      img.src = nuevaImagen.src;
      caption.textContent = imagenes[indice].caption;

      // Fade in suave (cinematográfico)
      requestAnimationFrame(() => {
        img.style.opacity = "1";
      });
    };

    // Si una imagen falla, no rompe la galería
    nuevaImagen.onerror = () => {
      console.warn("No se pudo cargar:", imagenes[indice].src);
      caption.textContent = "Imagen no disponible.";
      img.style.opacity = "1";
    };
  }

  // BOTÓN CONTINUAR (NO toca el diseño del intro)
  btnContinuar.addEventListener("click", function () {
    // Desvanecer portada suavemente
    portada.style.transition = "opacity 0.8s ease";
    portada.style.opacity = "0";

    setTimeout(() => {
      portada.style.display = "none";
      galeria.classList.remove("oculto");
      mostrarImagen(0);
    }, 800);
  });

  // FLECHA DERECHA
  if (next) {
    next.addEventListener("click", function () {
      mostrarImagen(indice + 1);
    });
  }

  // FLECHA IZQUIERDA
  if (prev) {
    prev.addEventListener("click", function () {
      mostrarImagen(indice - 1);
    });
  }

  // SWIPE MÓVIL (iPhone UX real)
  let startX = 0;

  document.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
  }, { passive: true });

  document.addEventListener("touchend", function (e) {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        mostrarImagen(indice + 1); // swipe izquierda
      } else {
        mostrarImagen(indice - 1); // swipe derecha
      }
    }
  });

  // SCROLL PARA CAMBIAR IMÁGENES (efecto dossier premium)
  window.addEventListener("wheel", function (e) {
    if (galeria.classList.contains("oculto")) return;

    if (e.deltaY > 0) {
      mostrarImagen(indice + 1);
    } else {
      mostrarImagen(indice - 1);
    }
  });

});