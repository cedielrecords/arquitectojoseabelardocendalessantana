const images = [
"img/1.jpeg",
"img/2.png",
"img/3.png",
"img/4.png",
"img/6.png",
"img/7.png",
"img/8.png",
"img/9.png",
"img/10.png",
"img/11.png",
"img/12.png",
"img/13.1.png",
"img/13.2.png",
"img/14.1.png",
"img/14.2.png",
"img/14.3.png",
"img/14.4.png",
"img/14.5.png",
"img/14.6.png",
"img/14.7.png",
"img/15.2.png",
"img/16.png",
"img/16.1.png",
"img/16.2.png",
"img/16.3.png",
"img/17.png",
"img/17.1.png",
"img/18.png",
"img/22.jpeg",
"img/23.jpeg",
"img/24.png",
"img/25.png",
"img/26.png",
"img/27.png",
"img/28.png"
];

const captions = {
1: "Diseño y Construcción Ampliación planta física, GANALAC. Área 126 m2 - Marzo 2022",
2: "Construcción cerramiento colegio departamental Santa María Ubaté",
3: "Construcción cerramiento colegio departamental Santa María Ubaté",
4: "Reconstrucción alcaldía municipio Susa, Cundinamarca 1992",
5: "Reconstrucción alcaldía municipio Susa, Cundinamarca 1993",
6: "Diseño y construcción casa cural Guachetá 1990",
7: "Ampliación edificio occidental Colegio Cardenal Sancha Bogotá 1997",
13: "Reforzamiento estructural del Colegio Cardenal Sancha en Bogotá",
16: "Reforzamiento estructural del Colegio Cardenal Sancha en Bogotá",
17: "Reforzamiento estructural del Colegio Cardenal Sancha en Bogotá",
27: "Pavimentación Vereda Guatancuy, Ubaté 2003",
28: "Pavimentación Vereda Guatancuy, Ubaté 2004"
};

let index = 0;
const imgElement = document.getElementById("galleryImage");
const captionElement = document.getElementById("caption");

function showImage() {
    imgElement.src = images[index];

    let number = images[index].match(/\d+/)[0];
    captionElement.textContent = captions[number] || "Registro fotográfico de obra arquitectónica";
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage();
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}

showImage();
