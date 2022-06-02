// document.addEventListener('DOMContentLoaded', () => {

// Array con las imágenes del juego
cards = [
    "AlianzaRebelde.png",
    "AlianzaRebelde.png",
    "BB-8.png",
    "BB-8.png",
    "BobaFett.png",
    "BobaFett.png",
    "C-3PO.png",
    "C-3PO.png",
    "Chewbacca.png",
    "Chewbacca.png",
    "DarthVader.png",
    "DarthVader.png",
    "KyloRen.png",
    "KyloRen.png",
    "R2-D2.png",
    "R2-D2.png",
    "Stormtrooper.png",
    "Stormtrooper.png",
];

// Guarda un NodeList - lista de todos los elementos que contienen la clase carta
const cartaSeleccionada = document.querySelectorAll('.carta');

var arrayComparar = []; // Array que guarda el src de las 2 cartas a comparar
var arrayEliminar = []; // Array que guarda el elemento al que le quitaremos la clase flipped
var contadorMov = 0; // Contador de movimientos
var contadorFin = 0; // Contador de parejas encontradas para acabar el juego


// Funcion para barajar el array de cartas y salgan aleatorias
function random_card(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i]; // Guarda la carta en posición i
        array[i] = array[j]; // Cambia la carta en posición i por otra de una posición aleatoria
        array[j] = temp; // Cambia la carta de la posición aleatoria por la que había en la posición i
        // console.log("Carta: " + temp);
        // console.log("array " + i + ": " + array[i]);
        // console.log("array " + j + ": " + array[j]);
        // console.log(" ");
    }
    return array;
}

empezarJuego();

// Funcion para imprimir las cartas aleatorias al inicio del juego
function empezarJuego() {

    // NodeList con una lista de todos los elementos que contienen la clase reverso
    const casillas = document.querySelectorAll(".reverso");

    // Usamos la función para mezclar las imágenes y las guardamos en otro array
    var array = random_card(cards);

    // Imprimimos las imágenes en la parte de atrás de cada carta
    for (var i = 0; i < casillas.length; i++) {
        var img = document.createElement("img");
        img.src = "img/memoria/" + array[i];
        casillas[i].appendChild(img);
    }

    clicked();
}

// Verificación de clicks
function clicked() {
    cartaSeleccionada.forEach(sel => sel.addEventListener('click', event => {
        console.log('He hecho click');
        const hijo = sel.firstElementChild;
        // console.log(hijo);
        if (hijo.classList.contains("flipped")) {
            return;
        } else {
            hijo.classList.add("flipped");
        }
        const imgNombre = hijo.lastElementChild.firstElementChild.src;
        // console.log(imgNombre);
        arrayComparar.push(imgNombre);
        arrayEliminar.push(hijo);
        console.log(arrayComparar);
        comparar();
    }));
}


// Función para comparar si dos cartas son iguales
function comparar() {
    // cartaSeleccionada.removeEventListener('click', clicked);
    setTimeout(function () {
        if (arrayComparar.length === 2) {
            if (arrayComparar[0] !== arrayComparar[1]) {
                console.log('No son iguales');
                arrayEliminar[0].classList.remove("flipped");
                arrayEliminar[1].classList.remove("flipped");
            } else {
                contadorFin += 2;
            }
            contadorMov++;
            arrayComparar = [];
            arrayEliminar = [];
            ganar();
        }
    }, 1500);
}

// Función para determinar si se ha ganado o no
function ganar() {
    if (contadorFin === 18) {
        alert('¡Enhorabuena! Has acabado el juego con ' + contadorMov + ' movimientos');
        reiniciar();
    }
}

// Función para reiniciar el juego
function reiniciar() {
    cartaSeleccionada.forEach(sel => {
        const hijo = sel.firstElementChild;
        if (hijo.classList.contains("flipped")) {
            hijo.classList.remove("flipped");
        }
    });
    setTimeout(function() {
        cartaSeleccionada.forEach(sel => {
            const hijo = sel.firstElementChild;
            if (!hijo.classList.contains("flipped")) {
                hijo.lastElementChild.firstElementChild.remove();
            }
        });
    }, 200);
    arrayComparar = [];
    arrayEliminar = [];
    contadorMov = 0;
    contadorFin = 0;
    empezarJuego();
}
    // });