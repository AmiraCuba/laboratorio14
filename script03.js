function dado(min, max){
    return Math.round(Math.random()*(max-min+1)+min);
}
const dado1 = dado(1, 6);
const dado2 = dado(1, 6);
let suma = dado1 + dado2;
console.log(`Dado 1: ${dado1} \nDado 2: ${dado2} \nLa suma de los dos dados es ${suma}`);