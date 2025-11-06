class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    calcularTotal() {
        return this.productos.reduce((total, producto) => {
        return total + (producto.precio * producto.cantidad);
        }, 0);
    }
    mostrarResumen() {
        console.log("Resumen del Carrito:");
        this.productos.forEach(producto => {
            console.log(`- ${producto.nombre} (x${producto.cantidad}): $${producto.precio * producto.cantidad}`);
        });
    console.log(`Total: $${this.calcularTotal()}`);
    }
}

const p1 = new Producto("Leche", 20, 2);
const p2 = new Producto("Pan", 10, 3);
const carrito = new Carrito();
carrito.agregarProducto(p1);
carrito.agregarProducto(p2);
carrito.mostrarResumen();