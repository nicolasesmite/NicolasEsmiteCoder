carritoDeCompras = JSON.parse(localStorage.getItem("carrito"));
const contenedorCarrito = document.getElementById("contenedorCarrito");

contenedorCarrito.innerHTML = "";

  let info = "";

  if (carritoDeCompras.length > 0) {
    for (let i = 0; i < carritoDeCompras.length; i++) {
      info += `<div class="cardCarrito">
                  <img class="imgCarrito" src="${carritoDeCompras[i].imagen}" alt="${carritoDeCompras[i].nombre}">
                  <h3>${carritoDeCompras[i].nombre}</h3>
                  <p>Precio por unidad:$ ${carritoDeCompras[i].precio} </p>
                  <p>Cantidad de unidades: ${carritoDeCompras[i].cantidad} </p>
                  <p>Precio total:$ ${carritoDeCompras[i].cantidad * carritoDeCompras[i].precio} </p>
                  <hr>
                </div>`}

  } else {

    info = `<h1> El carrito esta vacio </h1>`
  }


  contenedorCarrito.innerHTML = info
