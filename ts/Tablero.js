"use strict";
exports.__esModule = true;
exports.Tablero = void 0;
var Carta_1 = require("./Carta");
var Tablero = /** @class */ (function () {
    /**
     *
     */
    function Tablero() {
        /**
         * Array de los palos de las cartas
         */
        this.palos = ['C', 'D', 'T', 'P'];
        this.rellenarTodasCartas();
    }
    /**
     * Funcion para rellenar el Array de las cartas
     */
    Tablero.prototype.rellenarTodasCartas = function () {
        var color = 'rojo';
        for (var i = 1; i <= 13; i++) {
            for (var _i = 0, _a = this.palos; _i < _a.length; _i++) {
                var palo = _a[_i];
                if (palo === 'C' || palo === 'D') {
                    color = 'rojo';
                }
                else {
                    color = 'negro';
                }
                var carta = new Carta_1.Carta(color, i, palo, false);
                this.todasCartas.push(carta);
            }
            ;
        }
    };
    return Tablero;
}());
exports.Tablero = Tablero;
