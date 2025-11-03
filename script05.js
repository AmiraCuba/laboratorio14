const anguloGrados = parseFloat(prompt("Ingresa un ángulo en grados:"));
let anguloRadianes = parseFloat(prompt("Ingresa un ángulo en radianes:"));;
function gradosARadianes(grados) {
    let radianes = grados*(Math.PI/180);
    let seno = Math.sin(radianes);
    let coseno = Math.cos(radianes);
    console.log(`Radianes: ${radianes}`);
    console.log(`Seno(${grados}°): ${seno}`);
    console.log(`Coseno(${grados}°): ${coseno}`)
    return radianes;
}
function radianesAGrados(radianes) {
    let grados = radianes*(180/Math.PI);
    console.log(`Grados: ${grados}°`);
    return grados;
}
gradosARadianes(anguloGrados);
radianesAGrados(anguloRadianes);