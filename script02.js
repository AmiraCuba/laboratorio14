const inicio = parseInt(prompt("Ingresa el inicio del rango:"));
const final = parseInt(prompt("Ingresa el final del rango:"));
function numeroAleatorio(min, max){
    return Math.round(Math.random()*(max-min+1)+min);
}
console.log(`El número aleatorio generado es ${numeroAleatorio(inicio, final)}`);