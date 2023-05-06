/*E-commerce donde se podra comprar mates y bombillas, asi como ver consejos sobre uso e implementaciones. Web dise;ada desde cero.*/

let Articulos = [];

fetch('./jakemate.json/articulos.json')
.then(res => res.json())
.then(data =>{
  Articulos = data;
  mostrarArticulos(Articulos);
})


const inputBuscador = document.getElementById("buscador")
const btnSearch = document.getElementById("botonBuscar")
const informacion = document.getElementById("Informacion")
let carrito = localStorage.getItem("carrito")

if (localStorage.getItem("carrito") != null){
  carrito = JSON.parse(localStorage.getItem("carrito"))
} else {
  carrito = []
}




function agregarAlCarrito(idCarro) {

  if (carrito.length > 0) {
    if ((carrito.find(({ id }) => id === idCarro)) != undefined) {

      const filtrado = carrito.filter((e) => {
        return e.id == idCarro;
      });

      let encontrado = filtrado[0];
      encontrado.cantidad += 1;

    } else {

      const filtrado = Articulos.filter((e) => {
        return e.id == idCarro;
      });

      carrito.push({
        "nombre": filtrado[0].nombre,
        "precio": filtrado[0].precio,
        "moneda": filtrado[0].moneda,
        "stock": filtrado[0].stock,
        "imagen": filtrado[0].imagen,
        "id": filtrado[0].id,
        "cantidad": 1
      });



    }
  } else {

    const filtrado = Articulos.filter((e) => {
      return e.id == idCarro;
    });

    carrito.push({
      "nombre": filtrado[0].nombre,
      "precio": filtrado[0].precio,
      "moneda": filtrado[0].moneda,
      "stock": filtrado[0].stock,
      "imagen": filtrado[0].imagen,
      "id": filtrado[0].id,
      "cantidad": 1

    });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito))

  Swal.fire({
    title: '<strong><u>¡Producto agregado con exito!</u></strong>',
    icon: 'success',
    html:
      '<b>¿Desea ir al carrito para finalizar compra?</b>',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up">Continuar comprando</i>',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down">Ir al Carrito</i>',
    cancelButtonAriaLabel: 'Thumbs down'
  }).then((result) => {
    if (result.isDismissed) {
      window.location.href = "carrito.html"
    }
  })

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
                      <button class = "botonCarrito" type = "button" id="${arr[i].id}" onclick = "agregarAlCarrito(${arr[i].id})">Agregar al Carrito</button>
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


