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
    
    // console.log(cards);
    // console.log(cards.length);
    
    // const rotar = document.querySelectorAll('.inner-wrap');
    
    // console.log(rotar);
    
    // NodeList con una lista de todos los elementos que contienen la clase carta
    const cartaSeleccionada = document.querySelectorAll('.carta');
    
    // Verificancion de clicks
    cartaSeleccionada.forEach(el => el.addEventListener('click', event => {
        // console.log(el);
        const hijo = el.firstElementChild;
        // console.log(hijo);
        // console.log(hijo.classList);
        // console.log(hijo.classList.contains("flipped"));
        // console.log(hijo.classList.add("flipped"));
        var error = hijo.classList.add("flipped");
        if (hijo.classList.contains("flipped")) {
            return;
        } else {
            hijo.classlist.add("flipped");
        }
    
        // rotar.forEach(rot => rot.addEventListener('click', event => {
        //     console.log(rot);
        //     if (rot.classList.contains("flipped")) {
        //         return;
        //     }
        //     rot.classList.add("flipped");
        //     console.log('Click');
        // }))
        // console.log('He hecho click');
    }));
    
    // function random_card2() {
    //     if (cards.lenght > 0) {
    //         var rand = Math.floor(Math, random() * cards.lenght);
    //         var html = "card: <img src='Imagenes/" + cards[rand][0] + "'/><br/>points:" + document.getElementById("myDiv").innerHTML += html;
    //         cards.splice(rand, 1);
    //     }
    // }
    
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
    // });