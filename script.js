// GALERÍA CON RUTAS REALES (SEGÚN TU CARPETA img)

const imagenes = [
    { src: "img/1.jpeg", caption: "Obra Arquitectónica 1" },
    { src: "img/1.jpg", caption: "Obra Arquitectónica 2" },
    { src: "img/2.png", caption: "Obra Arquitectónica 3" },
    { src: "img/3.png", caption: "Obra Arquitectónica 4" },
    { src: "img/4.png", caption: "Obra Arquitectónica 5" },
    { src: "img/6.png", caption: "Obra Arquitectónica 6" },
    { src: "img/7.png", caption: "Obra Arquitectónica 7" },
    { src: "img/8.png", caption: "Obra Arquitectónica 8" },
    { src: "img/9.png", caption: "Obra Arquitectónica 9" },
    { src: "img/10.png", caption: "Obra Arquitectónica 10" },
    { src: "img/11.png", caption: "Obra Arquitectónica 11" },
    { src: "img/12.png", caption: "Obra Arquitectónica 12" },
    { src: "img/13.1.png", caption: "Obra Arquitectónica 13" },
    { src: "img/13.2.png", caption: "Obra Arquitectónica 14" },
    { src: "img/14.1.png", caption: "Obra Arquitectónica 15" },
    { src: "img/14.2.png", caption: "Obra Arquitectónica 16" },
    { src: "img/14.3.png", caption: "Obra Arquitectónica 17" },
    { src: "img/14.4.png", caption: "Obra Arquitectónica 18" },
    { src: "img/14.5.png", caption: "Obra Arquitectónica 19" },
    { src: "img/14.6.png", caption: "Obra Arquitectónica 20" },
    { src: "img/14.7.png", caption: "Obra Arquitectónica 21" },
    { src: "img/15.2.png", caption: "Obra Arquitectónica 22" },
    { src: "img/16.png", caption: "Obra Arquitectónica 23" },
    { src: "img/16.1.png", caption: "Obra Arquitectónica 24" },
    { src: "img/16.2.png", caption: "Obra Arquitectónica 25" },
    { src: "img/16.3.png", caption: "Obra Arquitectónica 26" },
    { src: "img/17.png", caption: "Obra Arquitectónica 27" },
    { src: "img/17.1.png", caption: "Obra Arquitectónica 28" },
    { src: "img/18.png", caption: "Obra Arquitectónica 29" },
    { src: "img/22.jpeg", caption: "Obra Arquitectónica 30" },
    { src: "img/23.jpeg", caption: "Obra Arquitectónica 31" },
    { src: "img/24.png", caption: "Obra Arquitectónica 32" },
    { src: "img/25.png", caption: "Obra Arquitectónica 33" },
    { src: "img/26.png", caption: "Obra Arquitectónica 34" },
    { src: "img/27.png", caption: "Obra Arquitectónica 35" },
    { src: "img/28.png", caption: "Obra Arquitectónica 36" }
];

let indice = 0;

// ELEMENTOS DEL DOM
const btnContinuar = document.getElementById("btnContinuar");
const portada = document.getElementById("portada");
const galeria = document.getElementById("galeria");
const imagenActual = document.getElementById("imagenActual");
const caption = document.getElementById("caption");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

// MOSTRAR IMAGEN
function mostrarImagen() {
    imagenActual.src = imagenes[indice].src;
    caption.textContent = imagenes[indice].caption;
}

// BOTÓN CONTINUAR (ARREGLA EL BOTÓN MUERTO)
btnContinuar.addEventListener("click", () => {
    portada.style.display = "none";
    galeria.classList.remove("oculto");
    mostrarImagen();
});

// SIGUIENTE
btnNext.addEventListener("click", () => {
    indice++;
    if (indice >= imagenes.length) {
        indice = 0;
    }
    mostrarImagen();
});

// ANTERIOR
btnPrev.addEventListener("click", () => {
    indice--;
    if (indice < 0) {
        indice = imagenes.length - 1;
    }
    mostrarImagen();
});

// PRELOAD (para que carguen rápido y no salgan en blanco)
window.addEventListener("load", () => {
    imagenes.forEach(img => {
        const i = new Image();
        i.src = img.src;
    });
});