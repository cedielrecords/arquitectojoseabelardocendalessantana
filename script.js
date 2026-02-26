const fotos = [
    { img: "img/1.jpeg", texto: "Diseño y Construcción Ampliación planta física, Asociación de Ganaderos de Cucunubá, GANALAC. Área 126 m². Marzo 2022." },
    { img: "img/2.png", texto: "Construcción cerramiento Colegio Departamental Santa María, Ubaté, Cundinamarca. Área 285 m²." },
    { img: "img/3.png", texto: "Construcción cerramiento Colegio Departamental Santa María, Ubaté, Cundinamarca. Área 285 m³." },
    { img: "img/4.png", texto: "Reconstrucción Alcaldía Municipio de Susa, Cundinamarca. Año 1992." },
    { img: "img/6.png", texto: "Diseño y construcción Casa Cural, Municipio de Guachetá, Cundinamarca. Año 1990." },
    { img: "img/7.png", texto: "Diseño y construcción ampliación edificio occidental Colegio Cardenal Sancha, Bogotá. Año 1997. Área 1600 m²." },
    { img: "img/8.png", texto: "Ampliación edificio occidental Colegio Cardenal Sancha, Bogotá. Buitrago & Cendales." },
    { img: "img/9.png", texto: "Diseño y dirección de obra Plaza de Mercado del Municipio de Ubaté, Cundinamarca. Año 2000." },
    { img: "img/10.png", texto: "Plaza de Mercado del Municipio de Ubaté – Bodegas A, B y C. Área total 24.000 m²." },
    { img: "img/11.png", texto: "Dirección de obra Plaza de Mercado del Municipio de Ubaté, Cundinamarca." },
    { img: "img/12.png", texto: "Proyecto Plaza de Mercado del Municipio de Ubaté, Cundinamarca." },
    { img: "img/13.1.png", texto: "Reforzamiento estructural del Colegio Cardenal Sancha, Bogotá." },
    { img: "img/14.1.png", texto: "Proceso de reforzamiento estructural – Colegio Cardenal Sancha, Bogotá." },
    { img: "img/16.png", texto: "Intervención estructural y consolidación técnica – Colegio Cardenal Sancha, Bogotá." },
    { img: "img/17.png", texto: "Reforzamiento estructural del Colegio Cardenal Sancha en Bogotá." },
    { img: "img/18.png", texto: "Obra de reforzamiento estructural Colegio Cardenal Sancha." },
    { img: "img/22.jpeg", texto: "Diseño de vivienda Fusagasugá, propiedad Jhanett Palencia. Año 2015." },
    { img: "img/23.jpeg", texto: "Diseño de vivienda Fusagasugá, propiedad Jhanett Palencia. Año 2016." },
    { img: "img/24.png", texto: "Diseño de vivienda, propietaria Marcela Silva, La Vega, Cundinamarca. Año 2022. Área 235 m²." },
    { img: "img/25.png", texto: "Proyecto vivienda Marcela Silva – La Vega, Cundinamarca." },
    { img: "img/26.png", texto: "Desarrollo arquitectónico vivienda La Vega, Cundinamarca." },
    { img: "img/27.png", texto: "Pavimentación Vereda Guatancuy, Municipio de Ubaté. Año 2003." },
    { img: "img/28.png", texto: "Pavimentación Vereda Guatancuy, Municipio de Ubaté. Año 2004." }
];

let indice = 0;

const imagen = document.getElementById("imagen");
const titulo = document.getElementById("titulo");
const portada = document.getElementById("portada");
const galeria = document.getElementById("galeria");
const btnEntrar = document.getElementById("btnEntrar");

btnEntrar.onclick = () => {
    portada.style.display = "none";
    galeria.classList.remove("oculto");
    mostrarFoto();
};

function mostrarFoto(){
    imagen.style.opacity = 0;
    setTimeout(() => {
        imagen.src = fotos[indice].img;
        titulo.textContent = fotos[indice].texto;
        imagen.style.opacity = 1;
    }, 200);
}

function siguiente(){
    indice = (indice + 1) % fotos.length;
    mostrarFoto();
}

function anterior(){
    indice = (indice - 1 + fotos.length) % fotos.length;
    mostrarFoto();
}
