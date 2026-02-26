const btnContinuar = document.getElementById("btnContinuar");
const portada = document.getElementById("portada");
const galeria = document.getElementById("galeria");
const imagen = document.getElementById("imagenActual");
const caption = document.getElementById("caption");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

/* ORDEN CRONOLÓGICO SEGÚN TUS ARCHIVOS REALES */
const fotos = [
    { src: "img/1.jpeg", texto: "Diseño y construcción ampliación planta física, Asociación de Ganaderos de Cucunubá (GANALAC). Área 126 m². Marzo 2022." },
    { src: "img/2.png", texto: "Construcción cerramiento Colegio Departamental Santa María, Ubaté, Cundinamarca." },
    { src: "img/3.png", texto: "Reconstrucción Alcaldía Municipio de Susa, Cundinamarca, 1992." },
    { src: "img/4.png", texto: "Reconstrucción Alcaldía Municipio de Susa, Cundinamarca, 1993." },
    { src: "img/6.png", texto: "Diseño y construcción casa cural, Municipio de Guachetá, Cundinamarca, 1990." },
    { src: "img/7.png", texto: "Diseño y construcción ampliación edificio occidental, Colegio Cardenal Sancha, Bogotá, 1997." },
    { src: "img/8.png", texto: "Dirección de obra Plaza de Mercado del Municipio de Ubaté, Año 2000. Área total 24.000 m²." },
    { src: "img/13.png", texto: "Reforzamiento estructural Colegio Cardenal Sancha, Bogotá." },
    { src: "img/16.png", texto: "Reforzamiento estructural Colegio Cardenal Sancha, Bogotá (Proceso constructivo)." },
    { src: "img/17.png", texto: "Reforzamiento estructural Colegio Cardenal Sancha, Bogotá (Estructura)." },
    { src: "img/22.jpeg", texto: "Diseño de vivienda, Fusagasugá, propiedad Jhanett Palencia, 2015." },
    { src: "img/23.jpeg", texto: "Diseño de vivienda, Fusagasugá, propiedad Jhanett Palencia, 2016." },
    { src: "img/24.png", texto: "Diseño de vivienda, La Vega, Cundinamarca, 2022. Propietaria: Marcela Silva." },
    { src: "img/27.png", texto: "Pavimentación Vereda Guatancuy, Municipio de Ubaté, 2003." },
    { src: "img/28.png", texto: "Pavimentación Vereda Guatancuy, Municipio de Ubaté, 2004." }
];

let index = 0;

/* BOTÓN CONTINUAR (ARREGLADO) */
btnContinuar.addEventListener("click", () => {
    portada.style.display = "none";
    galeria.classList.remove("oculto");
    mostrarImagen();
});

function mostrarImagen() {
    imagen.src = fotos[index].src;
    caption.textContent = fotos[index].texto;
}

next.addEventListener("click", () => {
    index = (index + 1) % fotos.length;
    mostrarImagen();
});

prev.addEventListener("click", () => {
    index = (index - 1 + fotos.length) % fotos.length;
    mostrarImagen();
});
