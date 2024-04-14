import Cliente from "./clases/Cliente.js";
import Impuesto from "./clases/Impuesto.js";

let impuesto1 = new Impuesto(1000, 25);
let impuesto2 = new Impuesto(3500, 85);

let cliente1 = new Cliente('Juan', impuesto1);
let cliente2 = new Cliente('Catalina', impuesto2);

console.log(cliente1.calcularImpuesto());
console.log(cliente2.calcularImpuesto());