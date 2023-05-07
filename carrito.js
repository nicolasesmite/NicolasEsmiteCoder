
carritoDeCompras = JSON.parse(localStorage.getItem("carrito"));
const contenedorCarrito = document.getElementById("contenedorCarrito");

mostrarArticulosCarrito(carritoDeCompras);

function mostrarArticulosCarrito(carritoDeCompras){
  contenedorCarrito.innerHTML = "";

  let info = "";

  if (carritoDeCompras.length >0) {
    for (let i = 0; i < carritoDeCompras.length; i++) {
      info += `<div class="cardCarrito">
                  <h3>${carritoDeCompras[i].nombre}</h3>
                  <img class="imgCarrito" src="${carritoDeCompras[i].imagen}" alt="${carritoDeCompras[i].nombre}">
                  <br>
                  <a>Precio por unidad:$ ${carritoDeCompras[i].precio} </a>
                  <a>Cantidad de unidades: ${carritoDeCompras[i].cantidad} </a>
                  <a>Precio total:$ ${carritoDeCompras[i].cantidad * carritoDeCompras[i].precio} </a>
                  <button class = "botonCarrito" type = "button" id="${carritoDeCompras[i].id}" onclick = "eliminarArticulo(${carritoDeCompras[i].id})">Eliminar Articulo</button>
                  <hr>
                </div>`}

  } else {

    
  Swal.fire({
    title: '<strong><u>¡Su carrito esta vacio!</u></strong>',
    imageUrl: 'https://i.pinimg.com/originals/3f/42/cc/3f42ccba5094ec7e69811b3645f13131.jpg',
    icon: 'alert',
    html:
      '<b>¿Desea ir al shop para continuar comprando?</b>',
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up">Continuar comprando</i>',
    confirmButtonAriaLabel: 'Thumbs up, great!',
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "index.html"
    }
  })
  }


  contenedorCarrito.innerHTML = info

}
  
function eliminarArticulo(id){

  filtrado = carritoDeCompras.filter((e) => {
    return e.id == id;
  });

  if (filtrado[0].cantidad > 1){

    let encontrado = filtrado[0];
    encontrado.cantidad --;
    
  }else{

    carritoDeCompras = carritoDeCompras.filter(producto => producto.id !== id)

  }


  mostrarArticulosCarrito(carritoDeCompras);
  localStorage.setItem("carrito",JSON.stringify(carritoDeCompras));
  


}
