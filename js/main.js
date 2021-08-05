/* function saludar() {
    console.log("Hola Chicos");
}

saludar(); */



const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;

const impuesto   = x => x * 0.66; 

let monto  = 200;
let precioDescuento = 0;

let nuevoPrecio = resta(suma(monto, impuesto(monto)), precioDescuento);
console.log(nuevoPrecio);
