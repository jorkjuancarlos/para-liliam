// ===== PANTALLAS =====

const inicio = document.getElementById("inicio");
const carga = document.getElementById("carga");
const portada = document.getElementById("portada");
const galeria = document.getElementById("galeria");
const carta = document.getElementById("carta");
const estatua = document.getElementById("estatua");
const final = document.getElementById("final");

// ===== BOTONES =====

const btnComenzar = document.getElementById("btnComenzar");
const btnGaleria = document.getElementById("btnGaleria");
const btnEstatua = document.getElementById("btnEstatua");
const btnCapibaras = document.getElementById("btnCapibaras");

const barra = document.getElementById("progreso");
const textoCarga = document.getElementById("textoCarga");

// ===== GALERIA =====

const foto = document.getElementById("fotoGaleria");
const titulo = document.getElementById("tituloFoto");
const descripcion = document.getElementById("descripcionFoto");

const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");

const imagenes = [

"imagenes/foto1.jpeg",
"imagenes/foto2.jpeg",
"imagenes/foto3.jpeg",
"imagenes/foto4.jpeg",
"imagenes/foto5.jpeg",
"imagenes/foto6.jpeg",
"imagenes/foto7.jpeg"

];

const titulos=[

"Nuestro primer recuerdo ❤️",
"Cada momento vale oro 🥰",
"Siempre contigo ❤️",
"Un día inolvidable 💕",
"Mi felicidad eres tú 😊",
"Más recuerdos juntos ❤️",
"Y los que faltan... ✨"

];

const frases=[

"Cada instante contigo es un regalo.",

"Gracias por hacerme tan feliz.",

"Siempre encuentro paz cuando estoy a tu lado.",

"Cada foto guarda una historia hermosa.",

"Gracias por acompañarme en cada paso.",

"Eres la mejor parte de mi vida.",

"Y esta historia apenas comienza."

];

let indice=0;

// ===== COMENZAR =====

btnComenzar.onclick=function(){

    const musica = document.getElementById("musica");
musica.play();

inicio.style.display="none";

carga.style.display="flex";

let progreso=0;

const mensajes=[

"❤️ Recordando nuestros momentos...",

"📷 Organizando nuestras fotos...",

"💌 Escribiendo unas palabras...",

"✨ Preparando una sorpresa..."

];

let mensaje=0;

textoCarga.innerHTML=mensajes[0];

const intervalo=setInterval(()=>{

progreso+=1;

barra.style.width=progreso+"%";

if(progreso==25){

textoCarga.innerHTML=mensajes[1];

}

if(progreso==50){

textoCarga.innerHTML=mensajes[2];

}

if(progreso==75){

textoCarga.innerHTML=mensajes[3];

}

if(progreso>=100){

clearInterval(intervalo);

carga.style.display="none";

portada.style.display="flex";

}

},35);

}
// ===== PORTADA A GALERÍA =====

btnGaleria.onclick = function(){

    portada.style.display = "none";
    galeria.style.display = "flex";

}

// ===== GALERÍA =====

function mostrarFoto(){

    foto.src = imagenes[indice];
    titulo.innerHTML = titulos[indice];
    descripcion.innerHTML = frases[indice];

}

siguiente.onclick = function(){

    indice++;

    if(indice >= imagenes.length){

        galeria.style.display = "none";
        carta.style.display = "flex";

        escribirCarta();

        return;

    }

    mostrarFoto();

}

anterior.onclick = function(){

    indice--;

    if(indice < 0){

        indice = 0;

    }

    mostrarFoto();

}

// ===== CARTA =====

const textoCarta = document.getElementById("textoCarta");

const cartaCompleta = `

Mi querida Liliam ❤️

Hoy celebramos 30 meses desde aquel 17 de enero del 2024.

Quise hacerte este pequeño regalo porque eres una de las personas más importantes de mi vida.

Gracias por cada sonrisa, cada abrazo y cada momento que hemos compartido.

Sé que a veces no soy el hombre perfecto y también cometo errores, pero quiero que nunca olvides algo...

Siempre podrás contar conmigo para lo que sea, mi vida.

Estaré contigo para apoyarte, escucharte y celebrar cada uno de tus logros.

Me siento muy orgulloso de los tremendos pasos que estás dando en la universidad.

Sé cuánto te esfuerzas y estoy seguro de que alcanzarás todas tus metas.

Nunca dejes de creer en ti, porque yo siempre creeré en ti.

Gracias por hacerme sentir tan feliz durante estos 30 meses.

Y nunca olvides que siempre serás...

Mi Capibara ❤️

Y mi Pulguita Aventurera ❤️

Te amo muchísimo.

Con todo mi amor,

Juan Carlos ❤️

`;

let posicion = 0;

function escribirCarta(){

    textoCarta.innerHTML = "";

    posicion = 0;

    const efecto = setInterval(function(){

        textoCarta.innerHTML += cartaCompleta.charAt(posicion);

        posicion++;

        if(posicion >= cartaCompleta.length){

            clearInterval(efecto);

        }

    },30);

}

// ===== ESTATUA =====

btnEstatua.onclick = function(){

    carta.style.display = "none";

    estatua.style.display = "flex";

}

// ===== FINAL =====

btnCapibaras.onclick = function(){

    estatua.style.display = "none";

    final.style.display = "flex";

}

// ===== INICIAR GALERÍA =====

mostrarFoto();