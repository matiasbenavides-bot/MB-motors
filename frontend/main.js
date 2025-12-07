

const productosDestacados = [
  {
    nombre: "Alternador Toyota Corolla",
    precio: "S/ 450",
    imagen: "https://via.placeholder.com/300",
  },
  {
    nombre: "Motor de Arranque Hyundai Accent",
    precio: "S/ 380",
    imagen: "https://via.placeholder.com/300",
  },
  {
    nombre: "Bomba de Agua Kia Rio",
    precio: "S/ 180",
    imagen: "https://via.placeholder.com/300",
  },
  {
    nombre: "Pastillas de Freno Toyota Yaris",
    precio: "S/ 120",
    imagen: "https://via.placeholder.com/300",
  }
];

const destacadosGrid = document.getElementById("destacadosGrid");

productosDestacados.forEach(p => {
  destacadosGrid.innerHTML += `
    <div class="destacado-card">
      <div class="destacado-img">
        <img src="${p.imagen}" alt="${p.nombre}">
      </div>
      <div class="destacado-info">
        <h3>${p.nombre}</h3>
        <p class="destacado-precio">${p.precio}</p>
        <a target="_blank"
           href="https://wa.me/51999999999?text=Hola%20quiero%20el%20${encodeURIComponent(p.nombre)}">
           Comprar
        </a>
      </div>
    </div>
  `;
});
