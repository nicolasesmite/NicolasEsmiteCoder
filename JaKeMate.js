/*E-commerce donde se podra comprar mates y bombillas, asi como ver consejos sobre uso e implementaciones. Web dise;ada desde cero.*/

let stockMateImperial = 25;
let stockMateCamionero = 25;
let stockMateGuampa = 25;
let stockMateCeramica = 25;
let stockBombillaPlata = 20;
let stockBombillaAlpaca = 20;
let stockBombillaBronce = 20;

let precioMateImperial = 3500;
let precioMateCamionero = 2200;
let precioMateGuampa = 1000;
let precioMateCeramica = 780;
let precioBombillaPlata = 1500;
let precioBombillaAlpaca = 1000;
let precioBombillaBronce = 1350;
let stringDeArticulos = '';

/*const ArticulosCarrito = {
    Articulos: ,
    Total:,
    Ipuestos:,
  };*/


/*const carrito = {
    nombre: ,
    apellido:,
    direccion:,
    telefono:,
  };
*/

//function mandarAlCarrito ()



/*function comprar(Producto,cantidad){

    mandarAlCarrito(Producto,cantidad)

    //descuento del stock el Producto


}*/

function mostrarArticulos (cantidadDeArticulos){
  for (let i = 0 ; i <= cantidadDeArticulos ; i++){
    stringDeArticulos += 'Aca se mostrara un articulo '
    

  }

  alert(stringDeArticulos);
}
const busqueda = prompt("Que estas buscando? Opciones : Mates o Bombillas o MostrarArticulosDisponibles")

if (busqueda == "Mates") {
    alert("Aca mostraria los mates")
} else if (busqueda == "Bombillas"){
    alert("Aca mostraria las bombillas")
} else if (busqueda == "MostrarArticulosDisponibles"){
  mostrarArticulos(16)
}






