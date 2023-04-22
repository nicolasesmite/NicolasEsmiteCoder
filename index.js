/*E-commerce donde se podra comprar mates y bombillas, asi como ver consejos sobre uso e implementaciones. Web dise;ada desde cero.*/

/*Se definen dos array de objetos para visualizar y almacenar los articulos*/


const inputBuscador = document.getElementById("buscador")
const btnSearch = document.getElementById("botonBuscar")
const informacion = document.getElementById("Informacion")
let carrito = [];

mostrarArticulos(Articulos);

function agregarAlCarrito(idCarro) {

  const filtrado = Articulos.filter((e) => {
    return e.id == idCarro;
  });

  carrito.push({
    "nombre": filtrado[0].nombre,
    "precio": filtrado[0].precio,
    "moneda": filtrado[0].moneda,
    "stock": filtrado[0].stock,
    "imagen": "",
    "id": filtrado[0].id
  });

  var iralcarrito = window.confirm('¿Quieres finalizar compra?');
  if (resultado === true) {
    window.alert('Redirigiendo al carrito');
    
  } else {
    window.alert('Continuar comprando');
  }

}

function mostrarArticulos(arr) {

  informacion.innerHTML = "";
  let info = "";
  
  if (arr.length > 0) {

    for (let i = 0; i < arr.length; i++) {

      info += `<div class="card">
                  <img src="" alt="${arr[i].nombre}">
                  <hr>
                  <h3>${arr[i].nombre}</h3>
                  <p>Precio: $${arr[i].precio} </p>
                    <div class="card-action">
                      <button class = "botonCarrito" type = "submit" id="${arr[i].id}" onclick = "agregarAlCarrito(${arr[i].id})">Comprar</button>
                    </div>
                </div>`


    }

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

}


btnSearch.addEventListener("click",() =>{
  filtrarArticulos(Articulos,inputBuscador.value)
})









