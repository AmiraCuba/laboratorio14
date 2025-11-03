const precio = parseFloat(prompt("Ingresa el precio del producto:"));
let redondeoAbajo = Math.floor(precio);
let redondeoArriba = Math.ceil(precio);
let redondeoNormal = Math.round(precio);
console.log(`Redondeo hacía abajo: ${redondeoAbajo} \nRedondeo hacía arriba: ${redondeoArriba} \nRedondeo normal: ${redondeoNormal}`);