"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subtrador = exports.Somador = void 0;
class Somador {
    constructor() {
        this.calcular = (numero1, numero2) => {
            return numero1 + numero2;
        };
    }
}
exports.Somador = Somador;
class Subtrador {
    constructor() {
        this.calcular = (numero1, numero2) => {
            return numero1 - numero2;
        };
    }
}
exports.Subtrador = Subtrador;
