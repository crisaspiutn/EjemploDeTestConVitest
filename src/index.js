function trunc (x, posiciones = 0) {
    var s = x.toString()
    var l = s.length
    var decimalLength = s.indexOf('.') + 1
    var numStr = s.substr(0, decimalLength + posiciones)
    return Number(numStr)
  }
function precio_modificado(publicacion_de_base_de_datos) {
    let precio_como_texto = publicacion_de_base_de_datos.precio.toString();
    console.log(precio_como_texto);
    let precio_cortando_decimales = precio_como_texto.split(",");
    let precio_sin_decimales = precio_cortando_decimales[0];
    let nuevo_precio_cortado_en_numero = Number(precio_sin_decimales);

    // let numero=Number(publicacion_de_base_de_datos.precio)*99/100;
    let numero = Number(nuevo_precio_cortado_en_numero) * 99 / 100;
    console.log("precio: " + publicacion_de_base_de_datos.precio + "  con -1%: " + Number(publicacion_de_base_de_datos.precio) * 99 / 100 + " " + numero);
    // console.log("precio: "+publicacion_de_base_de_datos.precio+"  con -1%: "+Number(publicacion_de_base_de_datos.precio)*99/100+" "+numero);
    if (numero > 2000) {
        console.log("si es mayor");
        // return Number(publicacion_de_base_de_datos.precio)*99/100;
        return trunc(numero,2);
    } else {
        console.log("si es menor se pondra:",2000);
        return 2000;
    }
}
let publicacion={precio:3215.3}
let valor=precio_modificado(publicacion);

  
console.log(valor);
// console.log();