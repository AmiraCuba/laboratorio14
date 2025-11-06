class Figura {
    constructor(nombre) {
        this.nombre = nombre;
    }
    area() {
        console.log(`El área de la figura ${this.nombre} no está definida.`);
        return 0;
    }
    perimetro() {
        console.log(`El perímetro de la figura ${this.nombre} no está definido.`);
        return 0;
    }
}

class Cuadrado extends Figura {
    constructor(lado) {
        super("Cuadrado");
        this.lado = lado;
    }
    area() {
        return this.lado * this.lado;
    }
    perimetro() {
        return 4 * this.lado;
    }
}

class Triangulo extends Figura {
    constructor(base, altura, lado1, lado2, lado3) {
        super("Triángulo");
        this.base = base;
        this.altura = altura;
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    area() {
        return (this.base * this.altura) / 2;
    }
    perimetro() {
        return this.lado1 + this.lado2 + this.lado3;
    }
}
