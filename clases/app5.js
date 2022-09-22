function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
  }
  const productoUNO = new Producto("Teclado", 1000);
  const productoDOS = new Producto("mouse", 500);
  const productoTRES = new Producto("cpu", 20000);
  const productoCUATRO = new Producto("monitor", 2500);




  console.log(productoUNO,productoDOS,productoTRES,productoCUATRO);