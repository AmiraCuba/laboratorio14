const x1 = parseFloat(prompt("Ingresa el X del punto 1:"));
const y1 = parseFloat(prompt("Ingresa el Y del punto 1:"));
const x2 = parseFloat(prompt("Ingresa el X del punto 2:"));
const y2 = parseFloat(prompt("Ingresa el Y del punto 2:"));
let distanciaEntrePuntos = distanciaPuntos(x1, y1, x2, y2).toFixed(2);
let sumaAlOrigen = (distanciaPuntos(x1, y1, 0, 0) + distanciaPuntos(0, 0, x2, y2)).toFixed(2);
function distanciaPuntos(x1, y1, x2, y2){
    return Math.sqrt(Math.pow(x1-x2, 2)+Math.pow(y1-y2, 2));
}
console.log(`Distancia entre puntos: ${distanciaEntrePuntos} \nSuma de las distancias al origen: ${sumaAlOrigen}`);