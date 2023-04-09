/*E-commerce donde se podra comprar mates y bombillas, asi como ver consejos sobre uso e implementaciones. Web dise;ada desde cero.*/

/*Se definen dos array de objetos para visualizar y almacenar los articulos*/
let stringDeArticulos = ''
let Mates= [
  {
    "nombre": "Mate Imperial",
    "precio": 3500,
    "moneda": "UYU",
    "stock": 25,
    "imagen": "",
  },

  {
    "nombre": "Mate Camionero",
    "precio": 2200,
    "moneda": "UYU",
    "stock": 25,
    "imagen": "",

  },
  {
    "nombre": "Mate Guampa",
    "precio": 1000,
    "moneda": "UYU",
    "stock": 25,
    "imagen": "",

  },
  {
    "nombre": "Mate Ceramica",
    "precio": 780,
    "moneda": "UYU",
    "stock": 25,
    "imagen": "",

  }

]

let Bombillas =[
  {
    "nombre": "Bombilla de Plata",
    "precio": 1500,
    "moneda": "UYU",
    "stock": 20,
    "imagen": "",
  },

  {
    "nombre": "Bombilla de Bronce",
    "precio": 1350,
    "moneda": "UYU",
    "stock": 20,
    "imagen": "",

  },
  {
    "nombre": "Bombilla de Plata",
    "precio": 1000,
    "moneda": "UYU",
    "stock": 20,
    "imagen": "",

  }

]

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

function mostrarArticulos(Articulos) {

  if (Articulos == "MostrarTodo") {

    Mates.forEach(element => {

      {
        stringDeArticulos += `${element.nombre} ${element.moneda} ${element.precio}`
      }

    });

    Bombillas.forEach(element => {

      {
        stringDeArticulos += `${element.nombre} ${element.moneda} ${element.precio}`
      }

    });

  } else {
    Articulos.forEach(element => {

      {
        stringDeArticulos += `${element.nombre} ${element.moneda} ${element.precio}`
      }

    });

  }

  alert(stringDeArticulos);
}


const busqueda = prompt("Que estas buscando? Opciones : \n1)Mates \n2)Bombillas \n3)MostrarArticulosDisponibles")

if (busqueda == "1") {
    mostrarArticulos(Mates)
} else if (busqueda == "2"){
   mostrarArticulos(Bombillas)
} else if (busqueda == "3"){
  mostrarArticulos("MostrarTodo")
}else{
  alert("Opcion no valida")
}






