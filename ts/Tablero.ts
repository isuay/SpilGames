import { Carta } from "./Carta";
export class Tablero {
    /**
     * Mazo de cartas entrada del jugador, donde se almacenan als cartas que sobran de todasCartas
    */
    mazoEntrada: Carta[];
    /**
     * Las 7 columnas con cartas del tablero
     */
    columnasCartas: Carta[][];
    /**
     * Los 4 almacenes que tendran para tener los 4 paquetes de cartas que saldra
     */
    almacenCartas: Carta[][];
    /**
     * Donde se almacenan las cartas Iniciales
     */
    todasCartas: Carta[];
    /**
     * Array de los palos de las cartas
     */
    palos: string[] = ['C', 'D', 'T', 'P'];
    /**
     * 
     */

    constructor() {
        this.rellenarTodasCartas();
        this.rellenarColumnas();
        this.rellenarMazoEntrada();
        

    }
    /**
     * Funcion para rellenar el Array de las cartas 
     */
    rellenarTodasCartas() {
        let color: string = 'rojo';
        for (let i = 1; i <= 13; i++) {
            for (const palo of this.palos) {
                if (palo === 'C' || palo === 'D') {
                    color = 'rojo';
                }
                else {
                    color = 'negro';
                }
                const carta: Carta = new Carta(color, i, palo, false);
                this.todasCartas.push(carta);
            };
        }
        this.todasCartas.sort((a, b) => 0.5 - Math.random());
    }
    /**
     * Funcion para rellenar las 7 columnas
     */
    rellenarColumnas(){
        this.columnasCartas = [];
        for(let i = 7; i > 0; i--){
            this.columnasCartas[i] = [];
            for(let j = i; j > 0; j--){
                this.columnasCartas[i].push(this.todasCartas.pop());
            }
        }
    }
    /**
     * Funcion para rellenar el Mazo de entrada del jugador
     */
    rellenarMazoEntrada(){
        this.mazoEntrada = [];
        for(let i = 0; i < this.todasCartas.length; i++){
            this.mazoEntrada.push(this.todasCartas.pop());
        }
    }

}


