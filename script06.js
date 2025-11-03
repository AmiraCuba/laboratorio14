let contrasenia = generarContrasenia();
function generarContrasenia(){
    let contrasenia = "";
    for (let i = 0; i<6; i++) {
        let numero = Math.round(Math.random()*(10));
        contrasenia += numero; 
    }
    return contrasenia;
}
console.log(`La contraseña generada es ${contrasenia}`);