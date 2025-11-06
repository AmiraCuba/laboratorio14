const notas = [19, 13, 9, 8, 13, 20, 10, 8, 15, 11];
let notasNormalizadas = new Array ();
const mayor = Math.max(...notas);
for (let i = 0; i < notas.length; i++){
    notasNormalizadas[i] = notas[i]/mayor;
}
console.log(`Las notas normalizadas son [${notasNormalizadas}]`);