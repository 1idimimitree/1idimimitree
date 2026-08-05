const contenedor = document.querySelector('#contenedor-peliculas');

let ListaDeCosas = [];
const buscador = document.querySelector('#buscador');

function generarEstrellas(rating) {
  const llenas = rating || 0;
  const vacias = 5 - llenas;
  return "★".repeat(llenas) + "☆".repeat(vacias);
}

buscador.addEventListener('input', () => {
  const texto = buscador.value.toLowerCase();

  const filtrados = ListaDeCosas.filter(item =>
    item.titulo.toLowerCase().includes(texto)
  );

  pintarJuegos(filtrados);
});

function pintarJuegos(lista) {
  const contenedor = document.querySelector('#contenedor-peliculas');
  const html = lista.map((item, index) => `
    <div class="card card-item" style="animation-delay: ${index * 0.03}s">
      <h3>${item.titulo}</h3>
      <p class="estrellas">${generarEstrellas(item.rating)}</p>
    </div>
  `).join('');
  contenedor.innerHTML = html;
}

fetch("coleccion.json")
  .then(respuesta => respuesta.json())
  .then(datos => {
    ListaDeCosas = datos.filter(item => item.tipo === "Peli");
    pintarJuegos(ListaDeCosas)
  });