class Producto {
    constructor(id, nombre, precio, detalle = "Este producto es muy fachero") {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.detalle = detalle
    }
}