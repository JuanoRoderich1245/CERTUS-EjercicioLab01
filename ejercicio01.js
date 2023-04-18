let jugueteMenu = parseInt(prompt("Ingrese el código del juguete:"));

let precioProducto;

switch (jugueteMenu) {
    case 1:
        precioProducto = 70.99;
        break;
    case 2:
        precioProducto = 78.99;
        break;
    case 3:
        precioProducto = 100.99;
        break;
    case 4:
        precioProducto= 58.50;
        break;
    case 5:
        precioProducto = 35.00;
        break;
    default:
        precioProducto = 0;
        alert("Debe ingresar un código correcto.");
        break;
}

let cantidad;
let descuento = 0;

if (precioProducto > 0) {
    cantidad = parseInt(prompt("Indique la cantidad: "));
    let cantidadTotal = cantidad;

    switch (true) {
        case cantidadTotal < 10:
            descuento = 0.035;
            break;
        case cantidadTotal >= 10 && cantidadTotal <= 20:
            descuento = 0.07;
            break;
        case cantidadTotal > 20:
            descuento = 0.095;
            break;
    }

    let importeTotal = precioProducto * cantidad;
    let descuentoTotal = importeTotal * descuento;
    let importeAPagar = importeTotal - descuentoTotal;


    document.write("<p>Código del juguete seleccionado:" + jugueteMenu + "</p><p> Precio del producto: S/ " + 
    precioProducto.toFixed(2) + "</p><p> Cantidad de juguetes:" + cantidad + "</p><p> Importe de compra: S/ " + importeTotal.toFixed(2) +
    "</p><p> Importe descuento: S/" + descuentoTotal.toFixed(2) + "</p> Importe a pagar: S/" + importeAPagar.toFixed(2));

    console.log("Código del juguete seleccionado: " + jugueteMenu);
    console.log("Precio del producto: S/ " + precioProducto.toFixed(2));
    console.log("Cantidad de juguetes: " + cantidad);
    console.log("Importe de compra: S/ " + importeTotal.toFixed(2));
    console.log("Importe descuento: S/ " + descuentoTotal.toFixed(2));
    console.log("Importe a pagar: S/ " + importeAPagar.toFixed(2));
}



