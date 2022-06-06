$(document).ready(function () {

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

    var arrayComparar = []; // Array que guarda el src de las 2 cartas a comparar
    var arrayEliminar = []; // Array que guarda el elemento al que le quitaremos la clase flipped
    var contadorMov = 0; // Contador de movimientos
    var contadorFin = 0; // Contador de parejas encontradas para acabar el juego


    // Funcion para barajar el array de cartas y salgan aleatorias
    function barajarCartas(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i]; // Guarda la carta en posición i
            array[i] = array[j]; // Cambia la carta en posición i por otra de una posición aleatoria
            array[j] = temp; // Cambia la carta de la posición aleatoria por la que había en la posición i
        }
        return array;
    }

    // Funcion para imprimir las cartas aleatorias al inicio del juego
    function empezarJuego() {

        // NodeList con una lista de todos los elementos que contienen la clase reverso
        const casillas = document.querySelectorAll(".reverso");

        // Usamos la función para mezclar las imágenes y las guardamos en otro array
        var array = barajarCartas(cards);

        // Imprimimos las imágenes en la parte de atrás de cada carta
        setTimeout(function () {
            for (var i = 0; i < casillas.length; i++) {
                var img = document.createElement("img");
                img.src = "img/memoria/" + array[i];
                casillas[i].appendChild(img);
            }
        }, 200);
    }

    // Listener del click
    $(".carta").on("click", girar);

    // Función que gira la carta
    function girar() {
        // Verifica si la carta tiene la clase flipped
        if ($(this).find(".inner-wrap").hasClass("flipped")) {
            return;
        } else {
            $(this).find(".inner-wrap").toggleClass("flipped");
        }
        arrayComparar.push($(this).find("img").attr("src")); // Añade el src de la imagen al array
        arrayEliminar.push($(this).find(".inner-wrap")); // Añade el div con clase inner-wrap al que hemos dado click al array
        comparar();
    }

    // Función para comparar si dos cartas son iguales
    function comparar() {

        if (arrayComparar.length === 2) {
            // Quita el listener a las cartas para que no le puedas dar click
            $(".carta").off("click", girar);
            setTimeout(function () {
                if (arrayComparar[0] !== arrayComparar[1]) {
                    arrayEliminar[0][0].classList.remove("flipped");
                    arrayEliminar[1][0].classList.remove("flipped");
                } else {
                    contadorFin += 2;
                }
                contadorMov++;
                arrayComparar = [];
                arrayEliminar = [];
                ganar();
                document.querySelector("#movimientos").innerHTML = contadorMov;
                // Vuelve a añadir el listener del click a las cartas
                $(".carta").on("click", girar);
            }, 1000);
        }
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
        $(".inner-wrap").removeClass("flipped");
        $(".reverso").find("img").remove();
        arrayComparar = [];
        arrayEliminar = [];
        contadorMov = 0;
        contadorFin = 0;
        empezarJuego();
    }

    empezarJuego();
});