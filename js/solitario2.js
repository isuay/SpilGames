//clase que crea la carta
/* class PerDisplayCardBuilder {
    this.CardsBaseParamsDisplayBuilder.Flushes UsingFlush;
    var CardDexer;
    var CardDisplay;

    PerDisplayCardBuilder() {
        UsingFlush = CardsBaseParamsDisplayBuilder.Flushes.Spades;
        CardDexer = 1;
        CardDisplay = null;
    }

    PerDisplayCardBuilder(PerDisplayCardBuilder AsNew) {
        UsingFlush = AsNew.UsingFlush;
        CardDexer = AsNew.CardDexer;
        CardDisplay = AsNew.CardDisplay;
    }

} 


class CardsBaseParamsDisplayBuilder {
    // Create new instances of the same class as static attributes
    static Spades = new Season("Spades")
    static Clovers = new Season("Clovers")
    static Diamonds = new Season("Diamonds")
    static Hearts = new Season("Hearts")

    constructor(name) {
        this.name = name
    }
    enum Flushes  {
        Spades,
        Clovers,
        Diamons,
        Hearts
   }
}  */

class Carta {
    constructor(color, numero, palo, visible_si_no) {

        this.numero = numero;
        this.palo = palo;
        this.img = "img/" + numero + palo + ".PNG";
        this.visible_si_no = visible_si_no;
        this.color = color;
        this.id = numero + palo;
    }



}

//clase para crear el tablero
class Tablero {

    constructor(columnas1, columnas2, columnas3, columnas4, columnas5, columnas6, columnas7, mazo_Entrada, almacenamiento, almacenamiento2, almacenamiento3, almacenamiento4) {

        this.columnas1 = columnas1;
        this.columnas2 = columnas2;
        this.columnas3 = columnas3;
        this.columnas4 = columnas4;
        this.columnas5 = columnas5;
        this.columnas6 = columnas6;
        this.columnas7 = columnas7;
        this.mazo_Entrada = mazo_Entrada;
        this.almacenamiento = almacenamiento;
        this.almacenamiento2 = almacenamiento2;
        this.almacenamiento3 = almacenamiento3;
        this.almacenamiento4 = almacenamiento4;
    }
}
//funcion para crear las cartas
function crear_cartas(palo, color, visible_si_no) {

    for (let step = 1; step <= 13; step++) {
        let nueva_Carta = new Carta(palo, step, color, visible_si_no);
        todas_Cartas.push(nueva_Carta);

    }
}

function visible(columna) {

    ultima_carta = columna.length - 1;
    columna[ultima_carta].visible_si_no = "si";
}

function agregar(columna) {

    columna.push(todas_Cartas.pop())
}

function mover_cartas(columna_origen, columna_destino, cuantas) {


    /* if (columna_origen[posicion_array].palos === columna_destino[posicion_array].palos1 &&
         columna_origen[posicion_array].color === columna_destino[posicion_array].color1 &&
         columna_origen[posicion_array].numero === columna_destino[posicion_array].numero1){*/
    for (let step = 0; step < cuantas; step++) {
        carta = columna_origen[step];
        if (columna_destino === 'columna1') {
            tab.columna1.push(carta);
        } else if (columna_destino === 'columna2') {
            tab.columna2.push(carta);
        } else if (columna_destino === 'columna3') {
            tab.columna3.push(carta);
        } else if (columna_destino === 'columna4') {
            tab.columna4.push(carta);
        } else if (columna_destino === 'columna5') {
            tab.columna5.push(carta);
        } else if (columna_destino === 'columna6') {
            tab.columna6.push(carta);
        } else if (columna_destino === 'columna7') {
            tab.columna7.push(carta);
        }

    }
    columna_origen.splice(step, cuantas);
    // }
}

function pintar_carta(carta, columnahtml, step) {
    let palo = carta.palo;
    let numero = carta.numero;
    let visible_si_no = carta.visible_si_no;
    let margin = "margin-top:";
    let marginConst = 20;

    for (let i = 0; i < step; i++) {
        marginConst += 20;
    }
    margin = margin + marginConst + "px;";
    if (visible_si_no === "si") {

        //document.getElementById(columnahtml).innerHTML = "<img src=img/" + numero + palo + ".PNG'>";
        //console.log(document.getElementById(columnahtml).innerHTML);
        return "<li id=\"listElementUp\" class=\"list-group-item\" style=" + margin + " ondragstart=\"drag(event)\"> <img id ='" + numero + palo + "'  src='../img/solitario/" + numero + palo + ".PNG'> </li>";
    } else {
        // document.getElementById(columnahtml).innerHTML = "<img src='img/no.PNG'>";
        //console.log(document.getElementById(columnahtml).innerHTML);
        return "<li  id=\"listElementDown\" class=\"list-group-item\" style=" + margin + "> <img id = '" + numero + palo + "' src='../img/solitario/no.PNG'> </li>";
    }
}

function pintar_columna() {
    var html = "";
    var html2 = "";
    var html3 = "";
    var html4 = "";
    var html5 = "";
    var html6 = "";
    var html7 = "";
    //columna1
    for (step = 0; step < columna1.length; step++) {
        let ver_carta = pintar_carta(columna1[step], "columna1", step);
        html += ver_carta;

    }
    document.getElementById("columna1").innerHTML = html;


    //columna2
    for (step = 0; step < columna2.length; step++) {
        let ver_carta = pintar_carta(columna2[step], "columna2", step);
        html2 += ver_carta;

    }
    document.getElementById("columna2").innerHTML = html2;


    //columna3
    for (step = 0; step < columna3.length; step++) {
        let ver_carta = pintar_carta(columna3[step], "columna3", step);
        html3 += ver_carta;

    }
    document.getElementById("columna3").innerHTML = html3;


    //columna4
    for (step = 0; step < columna4.length; step++) {
        let ver_carta = pintar_carta(columna4[step], "columna4", step);
        html4 += ver_carta;

    }
    document.getElementById("columna4").innerHTML = html4;


    //columna5
    for (step = 0; step < columna5.length; step++) {
        let ver_carta = pintar_carta(columna5[step], "columna5", step);
        html5 += ver_carta;

    }
    document.getElementById("columna5").innerHTML = html5;


    //columna6
    for (step = 0; step < columna6.length; step++) {
        let ver_carta = pintar_carta(columna6[step], "columna6", step);
        html6 += ver_carta;

    }
    document.getElementById("columna6").innerHTML = html6;

    //columna7
    for (step = 0; step < columna7.length; step++) {
        let ver_carta = pintar_carta(columna7[step], "columna7", step);
        html7 += ver_carta;

    }
    document.getElementById("columna7").innerHTML = html7;

}

function pintar_mazo(todas_Cartas) {
    if (todas_Cartas.length > 0) {
        document.getElementById("mazo_Entrada").innerHTML = "<img src='img/no.PNG'>";;
    }
}

//selectores html
const tablero = document.querySelectorAll("#tablero div");
let columna_origen = "";
let columna_destino = "";
let numero_click = 0;
//console.log(tablero);
//id = tablero[0].getAttribute('id');
// console.log(id);
function escuchar_tablero(tablero) {
    tablero.forEach(columna => {
        columna.addEventListener('click', escuchar_carta);
    });

    function escuchar_carta(e) {
        //let posicion = 0;
        const nArray = Array.from(tablero);
        // posicion = nArray.indexOf(e.target);
        id = e.target.getAttribute('id');
        console.log(id);
        if (numero_click === 0) {
            click1(id);
            numero_click++;


        } else if (numero_click === 1) {
            click2(id);
            numero_click++;
            mover_cartas(columna_origen, columna_destino, 1)
            document.getElementById().src = "img/'" + +"'.PNG"
        } else if (numero_click === 2) {
            numero_click = 0;
        }


        //columna1
        for (step = 0; step < columna1.length; step++) {
            let id1 = columna1[step].id;
            //console.log(id1);
            if (id1 === id) {
                columnas = "columna1"

            }
        }

        //columna2
        for (step = 0; step < columna2.length; step++) {
            let id2 = columna2[step].id;
            //console.log(id2);
            if (id2 === id) {
                columnas = "columna2"

            }
        }



        //console.log(posicion);
    }
}

function click1(id) {
    document.getElementById(id).src = "img/cuadradoamarillo.jpg"
    columna = saber_columna(id);
    columna_origen = columna;
    console.log(columna_origen);
}

function click2(id) {
    columna = saber_columna(id)
    columna_destino = columna;
    console.log(columna_destino);

}

function saber_columna(id) {
    let columnas = "";
    //columna1
    for (step = 0; step < columna1.length; step++) {
        let id1 = columna1[step].id;
        //console.log(id1);
        if (id1 === id) {
            columnas = "columna1";

        }
    }
    //columna2
    for (step = 0; step < columna2.length; step++) {
        let id2 = columna2[step].id;
        //console.log(id1);
        if (id2 === id) {
            columnas = "columna2";

        }
    }
    //columna3
    for (step = 0; step < columna3.length; step++) {
        let id3 = columna3[step].id;
        //console.log(id1);
        if (id3 === id) {
            columnas = "columna3";

        }
    }
    //columna4
    for (step = 0; step < columna4.length; step++) {
        let id4 = columna4[step].id;
        //console.log(id1);
        if (id4 === id) {
            columnas = "columna4";

        }
    }
    //columna5
    for (step = 0; step < columna5.length; step++) {
        let id5 = columna5[step].id;
        //console.log(id1);
        if (id5 === id) {
            columnas = "columna5";

        }
    }
    //columna6
    for (step = 0; step < columna6.length; step++) {
        let id6 = columna6[step].id;
        //console.log(id1);
        if (id6 === id) {
            columnas = "columna6";

        }
    }
    for (step = 0; step < columna7.length; step++) {
        let id7 = columna7[step].id;
        //console.log(id1);
        if (id7 === id) {
            columnas = "columna7";

        }
    }
    return columnas;
}




//array de cartas
let todas_Cartas = [];


//array de las columnas que seran utilizadas en el tablero
let columna1 = [];
let columna2 = [];
let columna3 = [];
let columna4 = [];
let columna5 = [];
let columna6 = [];
let columna7 = [];

//crear almacen de cartas
let almacenamiento = [];
let almacenamiento2 = [];
let almacenamiento3 = [];
let almacenamiento4 = [];

//creando los diferentes tipos de cartas
crear_cartas("rojo", "D", "no");
crear_cartas("negro", "P", "no");
crear_cartas("rojo", "C", "no");
crear_cartas("negro", "T", "no");

//barajeando el mazo de cartas
todas_Cartas.sort((a, b) => 0.5 - Math.random());

//rellenando las columnas del tablero
for (let step = 1; step <= 7; step++) {

    if (step === 1) {
        carta1 = todas_Cartas.pop();
        columna1.push(carta1);
    } else if (step === 2) {
        carta1 = todas_Cartas.pop();
        carta2 = todas_Cartas.pop();
        columna2.push(carta1, carta2);
    } else if (step === 3) {
        carta1 = todas_Cartas.pop();
        carta2 = todas_Cartas.pop();
        carta3 = todas_Cartas.pop();
        columna3.push(carta1, carta2, carta3);
    } else if (step === 4) {
        carta1 = todas_Cartas.pop();
        carta2 = todas_Cartas.pop();
        carta3 = todas_Cartas.pop();
        carta4 = todas_Cartas.pop();
        columna4.push(carta1, carta2, carta3, carta4);
    } else if (step === 5) {
        carta1 = todas_Cartas.pop();
        carta2 = todas_Cartas.pop();
        carta3 = todas_Cartas.pop();
        carta4 = todas_Cartas.pop();
        carta5 = todas_Cartas.pop();
        columna5.push(carta1, carta2, carta3, carta4, carta5);
    } else if (step === 6) {
        carta1 = todas_Cartas.pop();
        carta2 = todas_Cartas.pop();
        carta3 = todas_Cartas.pop();
        carta4 = todas_Cartas.pop();
        carta5 = todas_Cartas.pop();
        carta6 = todas_Cartas.pop();
        columna6.push(carta1, carta2, carta3, carta4, carta5, carta6);
    } else if (step === 7) {
        carta1 = todas_Cartas.pop();
        carta2 = todas_Cartas.pop();
        carta3 = todas_Cartas.pop();
        carta4 = todas_Cartas.pop();
        carta5 = todas_Cartas.pop();
        carta6 = todas_Cartas.pop();
        carta7 = todas_Cartas.pop();
        columna7.push(carta1, carta2, carta3, carta4, carta5, carta6, carta7);
    }
}
let tab = new Tablero(columna1, columna2, columna3, columna4, columna5, columna6, columna7, todas_Cartas, almacenamiento, almacenamiento2, almacenamiento3, almacenamiento4);


//vuelve visible la primera carta de cada columna
visible(columna1);
visible(columna2);
visible(columna3);
visible(columna4);
visible(columna5);
visible(columna6);
visible(columna7);

//agrega cartas a las columnas


//volver visible la carta agregada

//drag and drop
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    console.log(ev.currentTarget.childNodes);
    ev.dataTransfer.setData("text", ev.target.id);

}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(document.getElementById(data));
    ev.target.appendChild(document.getElementById(data));
}


/* function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
} */

console.log(tab);
console.log(tab);

pintar_columna();
pintar_mazo(todas_Cartas);
escuchar_tablero(tablero);