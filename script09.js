class Producto {
    #nombre;
    #precio;
    #stock;
    constructor(nombre, precio, stock){
        this.#nombre = nombre;
        this.#precio = precio;
        this.#stock = stock;
    }
    set precio(precio){
        if(precio<0){
            console.log("El precio es negativo");
            return;
        }
        else
            this.#precio = precio;
    }
    set stock(stock){
        if(stock<0){
            console.log("El stock es negativo");
            return;
        }
        else
            this.#stock = stock;
    }
    vender(cantidad){
        if (this.#stock < cantidad){
            console.log("No hay suficiente stock");
            return;
        }
        this.#stock -= cantidad;
    }
}