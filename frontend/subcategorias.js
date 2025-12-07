const params = new URLSearchParams(window.location.search);
const categoria = params.get("cat");

const subcategorias = {
  "Alternadores": [
    { nombre: "Alternadores Completos", img: "img/alternador.png" },
    { nombre: "Reguladores", img: "img/regulador.png" },
    { nombre: "Porta Carbones", img: "img/porta carbones.png" },
    { nombre: "Carbones", img: "img/carbon.png" },
    { nombre: "Rotores", img: "img/rotor.png" },
    { nombre: "Estatores", img: "img/estator.png" }
  ],

  "Motores de Arranque": [
    { nombre: "Arranques Completos", img: "img/arranque.png" },
    { nombre: "Bendix", img: "img/bendix.png" },
    { nombre: "Solenoides", img: "img/solenoide.png" },
    { nombre: "Inducidos", img: "img/inducido.png" }
  ],

  "Frenos": [
    { nombre: "Pastillas de Freno", img: "img/pastillas.png" },
    { nombre: "Discos de Freno", img: "img/frenos.png" }
  ],

  "Bombas": [
    { nombre: "Bombas de Agua", img: "img/bomba.png" },
    { nombre: "Bombas de Aceite", img: "img/bomba-aceite.png" }
  ]
};

const titulo = document.getElementById("tituloCategoria");
const contenedor = document.getElementById("subcategoriasContainer");

titulo.textContent = categoria;

subcategorias[categoria].forEach(item => {
  contenedor.innerHTML += `
    <a href="productos.html?sub=${encodeURIComponent(item.nombre)}" class="card dark-card">
      <div class="card-img" style="background-image: url('${item.img}')"></div>
      <h3>${item.nombre}</h3>
    </a>
  `;
});
