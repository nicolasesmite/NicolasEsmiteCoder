carritoDeCompras = JSON.parse(localStorage.getItem("carrito"));
const contenedorCarrito = document.getElementById("contenedorCarrito");

contenedorCarrito.innerHTML = "";

  let info = "";

  if (carritoDeCompras.length > 0) {
    for (let i = 0; i < carritoDeCompras.length; i++) {
      info += `<div class="card">
                  <img src="" alt="${carritoDeCompras[i].nombre}">
                  <hr>
                  <h3>${carritoDeCompras[i].nombre}</h3>
                  <p>Precio: ${carritoDeCompras[i].precio} </p>
                </div>`}

  } else {

    info = `<h1> El carrito esta vacio </h1>`
  }


  contenedorCarrito.innerHTML = info
