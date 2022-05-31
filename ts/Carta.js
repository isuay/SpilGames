"use strict";
exports.__esModule = true;
exports.Carta = void 0;
var Carta = /** @class */ (function () {
    function Carta(color, numero, palo, esVisible) {
        this.img = "img/" + numero + palo + ".PNG";
        this.id = numero + palo;
    }
    return Carta;
}());
exports.Carta = Carta;
