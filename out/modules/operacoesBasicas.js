"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divisor = exports.Multiplicador = exports.Subtrador = exports.Somador = void 0;
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
class Multiplicador {
    constructor() {
        this.calcular = (numero1, numero2) => {
            return numero1 * numero2;
        };
    }
}
exports.Multiplicador = Multiplicador;
class Divisor {
    constructor() {
        this.calcular = (numero1, numero2) => {
            return numero1 / numero2;
        };
    }
}
exports.Divisor = Divisor;
