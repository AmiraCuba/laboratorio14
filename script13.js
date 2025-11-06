class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
    mostrarInfo() {
        return `Nombre: ${this.nombre}, Email: ${this.email}`;
    }
}

class Cliente extends Usuario {
    constructor(nombre, email, nivelFidelidad) {
        super(nombre, email);
        this.nivelFidelidad = nivelFidelidad;
    }
    mostrarInfo() {
        return `${super.mostrarInfo()}, Nivel de Fidelidad: ${this.nivelFidelidad}`;
    }
}

class Administrador extends Usuario {
    constructor(nombre, email, permisos) {
        super(nombre, email);
        this.permisos = permisos;
    }
    mostrarInfo() {
        return `${super.mostrarInfo()}, Permisos: ${this.permisos.join(', ')}`;
    }
}

const cliente1 = new Cliente("Ana", "ana@cliente.com", 4);
const admin1 = new Administrador("Carlos", "carlos@admin.com", ["crear", "editar", "eliminar"]);
const cliente2 = new Cliente("Luis", "luis@cliente.com", 2);
const usuarios = [cliente1, admin1, cliente2];
usuarios.forEach(usuario => {
    console.log(usuario.mostrarInfo());
});