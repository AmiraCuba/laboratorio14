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
        if(Number(precio)<0){
            console.log("El precio es negativo");
            return;
        }
        else
            this.#precio = Number(precio);
    }
    set stock(stock){
        if(stock<0){
            console.log("El stock es negativo");
            return;
        }
        else
            this.#stock = stock;
    }
    get precio (){
        return "$"+this.#precio.toFixed(2);
    }
    get stock() {
        return this.#stock;
    }
    vender(cantidad){
        if (this.#stock < cantidad){
            console.log("No hay suficiente stock");
            return;
        }
        this.#stock -= cantidad;
        console.log(`Venta realizada. \nStock restante: ${this.#stock}`);
    }
}