/* function suma(a, b) {
    let r = a + b
    alert(r);
}

function resta(a, b) {
    let r = a - b
    alert(r);
}

function multiplicacion(a, b) {
    let r = a * b
    alert(r);
}

function division(a, b) {
    let r = a / b
    alert(r);
}

suma(1,9)
 */

// Ejemplo de arrow function o funcion con flecha

const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;

const iva   = x => x * 0.66; 

let monto  = 100;
let precioDescuento = 0;

//Calculo el precioProducto + IVA - precioDescueto
let nuevoPrecio = resta(suma(monto, iva(monto)), precioDescuento);
console.log(nuevoPrecio);
