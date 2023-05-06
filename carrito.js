
carritoDeCompras = JSON.parse(localStorage.getItem("carrito"));
const contenedorCarrito = document.getElementById("contenedorCarrito");

mostrarArticulosCarrito(carritoDeCompras);

function mostrarArticulosCarrito(carritoDeCompras){
  contenedorCarrito.innerHTML = "";

  let info = "";

  if (carritoDeCompras != null) {
    for (let i = 0; i < carritoDeCompras.length; i++) {
      info += `<div class="cardCarrito">
                  <img class="imgCarrito" src="${carritoDeCompras[i].imagen}" alt="${carritoDeCompras[i].nombre}">
                  <h3>${carritoDeCompras[i].nombre}</h3>
                  <a>Precio por unidad:$ ${carritoDeCompras[i].precio} </a>
                  <a>Cantidad de unidades: ${carritoDeCompras[i].cantidad} </a>
                  <a>Precio total:$ ${carritoDeCompras[i].cantidad * carritoDeCompras[i].precio} </a>
                  <button class = "botonCarrito" type = "button" id="${carritoDeCompras[i].id}" onclick = "eliminarArticulo(${carritoDeCompras[i].id})">Eliminar Articulo</button>
                  <hr>
                </div>`}

  } else {

    info = `<h1> El carrito esta vacio </h1>`
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
