// document.addEventListener('DOMContentLoaded', () => {

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

var arrayComparar = [];
var arrayEliminar = [];
var contadorMov = 0;
var contadorFin = 0;


// NodeList con una lista de todos los elementos que contienen la clase carta
const cartaSeleccionada = document.querySelectorAll('.carta');


empezarJuego();

// Verificancion de clicks
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

clicked();
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


function empezarJuego() {

    // NodeList con una lista de todos los elementos que contienen la clase reverso
    const casillas = document.querySelectorAll(".reverso");

    // Usamos la función para mezclar las imágenes de nuestro array
    var array = random_card(cards);

    // Imprimimos las imágenes en la parte de atrás de cada carta
    for (var i = 0; i < casillas.length; i++) {
        var img = document.createElement("img");
        img.src = "img/memoria/" + array[i];
        casillas[i].appendChild(img);
    }
}

function comparar() {
    // cartaSeleccionada.removeEventListener('click', clicked);
    setTimeout(function () {
        if (arrayComparar.length === 2) {
            if (arrayComparar[0] !== arrayComparar[1]) {
                console.log('No son iguales');
                // console.log(hijo1);
                // console.log(hijo);
                arrayEliminar[0].classList.remove("flipped");
                arrayEliminar[1].classList.remove("flipped");
                contadorMov++;
                arrayComparar = [];
                arrayEliminar = [];
            } else {
                contadorMov++;
                contadorFin += 2;
                arrayComparar = [];
                arrayEliminar = [];
                ganar();
            }
        }
    }, 2000)
}

function ganar() {
    if (contadorFin === 18) {
        alert('¡Enhorabuena! Has acabado el juego con ' + contadorMov + ' movimientos');
        reiniciar();
    }
}

function reiniciar() {
    cartaSeleccionada.forEach(sel => {
        const hijo = sel.firstElementChild;
        if (hijo.classList.contains("flipped")) {
            hijo.classList.remove("flipped");
            hijo.lastElementChild.firstElementChild.remove();
        }
    });
    checkArray = [];
    idArray = [];
    contador = 0;
    fin = 0;
    empezarJuego();
}
    // });