/*E-commerce donde se podra comprar mates y bombillas, asi como ver consejos sobre uso e implementaciones. Web dise;ada desde cero.*/


let Articulos= [
  {
    "nombre": "Mate Imperial",
    "precio": 3500,
    "moneda": "UYU",
    "stock": 25,
    "imagen": "imagenes/mate imperial.jpg",
    "id" : 1717178,
  },

  {
    "nombre": "Mate Camionero",
    "precio": 2200,
    "moneda": "UYU",
    "stock": 25,
    "imagen": "imagenes/mate camionero.jpg",
    "id" : 161616,

  },
  {
    "nombre": "Mate Guampa",
    "precio": 1000,
    "moneda": "UYU",
    "stock": 25,
    "imagen": "imagenes/mate guampa.jpg",
    "id" : 171717,

  },
  {
    "nombre": "Mate Ceramica",
    "precio": 780,
    "moneda": "UYU",
    "stock": 25,
    "imagen": "imagenes/mate ceramica.jpg",
    "id" : 15151515,

  },

  {
    "nombre": "Bombilla de Plata",
    "precio": 1500,
    "moneda": "UYU",
    "stock": 20,
    "imagen": "",
    "id" : 141414,
  },

  {
    "nombre": "Bombilla de Bronce",
    "precio": 1350,
    "moneda": "UYU",
    "stock": 20,
    "imagen": "",
    "id": 13131313,

  },
  {
    "nombre": "Bombilla de Plata",
    "nombre": "Bombilla de Alpaca",
    "precio": 1000,
    "moneda": "UYU",
    "stock": 20,
    "imagen": "",
    "id" : 121212 ,

  }

]


const inputBuscador = document.getElementById("buscador")
const btnSearch = document.getElementById("botonBuscar")
const informacion = document.getElementById("Informacion")
let carrito = localStorage.getItem("carrito")

if (localStorage.getItem("carrito") != null){
  carrito = JSON.parse(localStorage.getItem("carrito"))
} else {
  carrito = []
}


mostrarArticulos(Articulos);

function agregarAlCarrito(idCarro){

  const filtrado = Articulos.filter((e) => {
    return e.id == idCarro;
  });

  carrito.push({
    "nombre": filtrado[0].nombre,
    "precio": filtrado[0].precio,
    "moneda": filtrado[0].moneda,
    "stock": filtrado[0].stock,
    "imagen": filtrado[0].imagen,
    "id": filtrado[0].id
  });

  localStorage.setItem("carrito",JSON.stringify(carrito))

}



function mostrarArticulos(arr) {
  informacion.innerHTML = "";
  let info = "";

  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      info += `<div class="card">
                  <img class="imgArt" src="${arr[i].imagen}" alt="${arr[i].nombre}">
                  <hr>
                  <h3>${arr[i].nombre}</h3>
                  <p>Precio: $${arr[i].precio} </p>
                    <div class="card-action">
                      <button class = "botonCarrito" type = "submit" id="${arr[i].id}" onclick = "agregarAlCarrito(${arr[i].id})">Comprar</button>
                    </div>
                </div>`}

  } else {

    info = `<h1> No se encontraron articulos para su busqueda </h1>`
  }


  informacion.innerHTML = info

}


function filtrarArticulos(arr, filtro) {
  const filtrado = arr.filter((e) => {
    return e.nombre.includes(filtro);
  });

  mostrarArticulos(filtrado);
;
}


btnSearch.addEventListener("click",() =>{
  filtrarArticulos(Articulos,inputBuscador.value)
})


