class Empleado {
    constructor(nombre, sueldoBase) {
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
    } 
    calcularSueldo() {
        return this.sueldoBase;
    }
}

class Programador extends Empleado {
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase);
        this.lenguaje = lenguaje;
    } 
    calcularSueldo() {
        return super.calcularSueldo() * 1.10;
    }
}

class ProgramadorSenior extends Programador {
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase, lenguaje);
    }
    calcularSueldo() {
        return this.sueldoBase * 1.25;
    }
}

const emp = new Empleado("Juan", 1000);
const prog = new Programador("Maria", 1000, "JavaScript");
const senior = new ProgramadorSenior("Pedro", 1000, "Python");
console.log(`Sueldo Empleado (${emp.nombre}): ${emp.calcularSueldo()}`);
console.log(`Sueldo Programador (${prog.nombre}): ${prog.calcularSueldo()}`);
console.log(`Sueldo Senior (${senior.nombre}): ${senior.calcularSueldo()}`);