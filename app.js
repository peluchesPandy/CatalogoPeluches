// BASE DE DATOS DE PRODUCTOS
const productos = [
  {
    id: 1,
    nombre: "Bluey",
    tamano: "Mediano (35 cm)",
    origen: "Importado",
    precioUnitario: 45000,
    precioMayor: 32000,
    imagen: "imagenes/bluey.jpeg",
    descripcion: "Peluche de Bluey, muy suave y listo para regalar.",
    enTendencia: true
  },
  {
    id: 2,
    nombre: "Zootopia (Judy Coneja y Nick Zorro)",
    tamano: "Mediano (35 cm)",
    origen: "Importado",
    precioUnitario: 45000,
    precioMayor: 32000,
    imagen: "imagenes/zootopia.jpeg",
    descripcion: "Peluche de la coneja Judy Hopps y el zorro Nick Wilde de Zootopia.",
    enTendencia: false
  },
  {
    id: 3,
    nombre: "Gato Lucifer",
    tamano: "Mediano (35 cm)",
    origen: "Importado",
    precioUnitario: 45000,
    precioMayor: 32000,
    imagen: "imagenes/gato lucifer.jpeg",
    descripcion: "Peluche del travieso gato Lucifer de la Cenicienta.",
    enTendencia: true
  },
  {
    id: 4,
    nombre: "Mario Bros",
    tamano: "Mediano (35 cm)",
    origen: "Nacional",
    precioUnitario: 45000,
    precioMayor: 32000,
    imagen: "imagenes/mario bros.jpeg",
    descripcion: "Peluche del legendario personaje Mario Bros.",
    enTendencia: true
  },
  {
    id: 5,
    nombre: "Princesa Peach",
    tamano: "Mediano (35 cm)",
    origen: "Nacional",
    precioUnitario: 45000,
    precioMayor: 32000,
    imagen: "imagenes/peach.jpeg",
    descripcion: "Peluche con detalles bonitos de la Princesa Peach.",
    enTendencia: false
  },
  {
    id: 6,
    nombre: "Abuelos de Up",
    tamano: "Pequeño (15 cm)",
    origen: "Nacional",
    precioUnitario: 25000,
    precioMayor: 18000,
    imagen: "imagenes/abuelos up.jpeg",
    descripcion: "Peluche de la pareja de abuelitos Carl y Ellie de Up.",
    enTendencia: false
  },
  {
    id: 7,
    nombre: "Chimmy BTS",
    tamano: "Pequeño (15 cm)",
    origen: "Importado",
    precioUnitario: 25000,
    precioMayor: 18000,
    imagen: "imagenes/Chimmy BTS.jpeg",
    descripcion: "Tierno peluche de Chimmy del universo BT21.",
    enTendencia: true
  },
  {
    id: 8,
    nombre: "Charmander",
    tamano: "Mediano (35 cm)",
    origen: "Importado",
    precioUnitario: 45000,
    precioMayor: 32000,
    imagen: "imagenes/Charmander.jpeg",
    descripcion: "Peluche de Charmander de Pokémon.",
    enTendencia: false
  },
  {
    id: 9,
    nombre: "Eevee",
    tamano: "Mediano (35 cm)",
    origen: "Importado",
    precioUnitario: 45000,
    precioMayor: 32000,
    imagen: "imagenes/evee.jpeg",
    descripcion: "Peluche suave de Eevee de Pokémon.",
    enTendencia: false
  },
  {
    id: 10,
    nombre: "Squirtle",
    tamano: "Mediano (35 cm)",
    origen: "Importado",
    precioUnitario: 45000,
    precioMayor: 32000,
    imagen: "imagenes/squirtle.jpeg",
    descripcion: "Peluche del carismático Squirtle.",
    enTendencia: false
  },
  {
    id: 11,
    nombre: "Snoopy Mago",
    tamano: "Mediano (35 cm)",
    origen: "Nacional",
    precioUnitario: 45000,
    precioMayor: 32000,
    imagen: "imagenes/snoppy mago.jpeg",
    descripcion: "Peluche de Snoopy disfrazado de mago.",
    enTendencia: false
  },
  {
    id: 12,
    nombre: "Luffy",
    tamano: "Mediano (35 cm)",
    origen: "Importado",
    precioUnitario: 45000,
    precioMayor: 32000,
    imagen: "imagenes/luffy.jpeg",
    descripcion: "Peluche de Monkey D. Luffy de One Piece.",
    enTendencia: true
  },
  {
    id: 13,
    nombre: "Bowser",
    tamano: "Mediano (35 cm)",
    origen: "Importado",
    precioUnitario: 45000,
    precioMayor: 32000,
    imagen: "imagenes/bowser.jpeg",
    descripcion: "Peluche de Bowser el villano de Mario Bros.",
    enTendencia: false
  },
  {
    id: 14,
    nombre: "Osito Cariñosito Azul",
    tamano: "Mediano (35 cm)",
    origen: "Nacional",
    precioUnitario: 45000,
    precioMayor: 32000,
    imagen: "imagenes/osito cariñosito azul.jpeg",
    descripcion: "Peluche acojinado del Osito Cariñosito.",
    enTendencia: false
  },
  {
    id: 15,
    nombre: "Sullivan",
    tamano: "Mediano (35 cm)",
    origen: "Importado",
    precioUnitario: 45000,
    precioMayor: 32000,
    imagen: "imagenes/sullivan.jpeg",
    descripcion: "Peluche grande y afelpado de Sullivan de Monsters Inc.",
    enTendencia: true
  },
  {
    id: 16,
    nombre: "Colección de Animales",
    tamano: "Grande (55 cm)",
    origen: "Nacional",
    precioUnitario: 75000,
    precioMayor: 55000,
    imagen: "imagenes/animales.jpeg",
    descripcion: "Peluches gigantes de animales: Oso polar, Koala, Vaca, Panda, León y más.",
    enTendencia: false
  }
];
let carrito = [];
let favoritos = [];
let productoSeleccionado = null;
let cantidadModal = 1;

// MANEJO DE FILTROS PASO A PASO
function alSeleccionarTipo() {
  const tipo = document.getElementById("filtro-origen").value;
  const selectTamano = document.getElementById("filtro-tamano");

  if (!tipo) {
    selectTamano.disabled = true;
    selectTamano.innerHTML = '<option value="">Primero selecciona tipo</option>';
  } else {
    selectTamano.disabled = false;
    selectTamano.innerHTML = `
      <option value="">Todos los tamaños</option>
      <option value="Pequeño (15 cm)">Pequeño (15 cm)</option>
      <option value="Mediano (35 cm)">Mediano (35 cm)</option>
      <option value="Grande (55 cm)">Grande (55 cm)</option>
      <option value="Llavero">Llavero</option>
    `;
  }

  filtrarProductos();
}

function filtrarProductos() {
  const textoBuscador = document.getElementById("buscador").value.toLowerCase();
  const origenSeleccionado = document.getElementById("filtro-origen").value;
  const tamanoSeleccionado = document.getElementById("filtro-tamano").value;

  const resultado = productos.filter(p => {
    const coincideNombre = p.nombre.toLowerCase().includes(textoBuscador);
    const coincideOrigen = origenSeleccionado === "" || p.origen === origenSeleccionado;
    const coincideTamano = tamanoSeleccionado === "" || p.tamano === tamanoSeleccionado;

    return coincideNombre && coincideOrigen && coincideTamano;
  });

  renderizarProductos(resultado);
}

// RENDERIZAR TIENDA
function renderizarProductos(lista) {
  const catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = "";

  if (lista.length === 0) {
    catalogo.innerHTML = "<p style='grid-column: 1/-1; text-align: center; color: var(--texto-gris); padding:20px;'>No hay productos disponibles con estos filtros.</p>";
    return;
  }

  lista.forEach(prod => {
    const esFav = favoritos.some(f => f.id === prod.id);

    const card = document.createElement("div");
    card.className = "card";

    // SVG DEL CORAZÓN DELINEADO NEGRO EXACTO A LA IMAGEN
    const svgCorazon = `
      <svg viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    `;

    card.innerHTML = `
      ${prod.enTendencia ? '<div class="insignia-fueguito">🔥</div>' : ''}
      
      <button class="btn-corazon-card ${esFav ? 'activo' : ''}" onclick="toggleFavoritoProducto(event, ${prod.id})" title="Añadir a favoritos">
        ${svgCorazon}
      </button>

      <img class="img-producto" src="${prod.imagen}" alt="${prod.nombre}" onerror="this.src='https://via.placeholder.com/150'">
      <h3>${prod.nombre}</h3>
      <p class="descripcion-corta">${prod.descripcion}</p>

      <button class="btn-llevar" onclick="abrirModal(${prod.id})">¡Llevátelo ahora!</button>
    `;

    catalogo.appendChild(card);
  });
}

// FAVORITOS
function toggleFavoritoProducto(event, idProd) {
  event.stopPropagation();
  const index = favoritos.findIndex(f => f.id === idProd);
  const prod = productos.find(p => p.id === idProd);

  if (index >= 0) {
    favoritos.splice(index, 1);
  } else {
    favoritos.push(prod);
  }

  actualizarFavoritos();
  filtrarProductos();
}

function actualizarFavoritos() {
  document.getElementById("contador-favoritos").textContent = favoritos.length;
  const contenedor = document.getElementById("items-favoritos");
  contenedor.innerHTML = "";

  if (favoritos.length === 0) {
    contenedor.innerHTML = "<p style='text-align:center; font-size:0.85rem; color:var(--texto-gris); padding:15px;'>Aún no tienes favoritos</p>";
    return;
  }

  favoritos.forEach(prod => {
    const div = document.createElement("div");
    div.className = "item-panel";
    div.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">
      <div style="flex:1;">
        <h4 style="font-size:0.85rem;">${prod.nombre}</h4>
      </div>
      <button class="btn-llevar" style="width:auto; padding:4px 8px;" onclick="abrirModal(${prod.id})">Llevar</button>
    `;
    contenedor.appendChild(div);
  });
}

function toggleFavoritos() {
  document.getElementById("desplegable-favoritos").classList.toggle("activo");
}

// MODAL LLEVAR
function abrirModal(idProd) {
  const prod = productos.find(p => p.id === idProd);
  productoSeleccionado = prod;
  cantidadModal = 1;

  document.getElementById("modal-titulo").innerText = prod.nombre;
  document.getElementById("modal-descripcion").innerText = prod.descripcion;
  document.getElementById("modal-cantidad").innerText = cantidadModal;

  document.getElementById("modal-btn-confirmar").onclick = () => {
    agregarAlCarrito(productoSeleccionado, cantidadModal);
    cerrarModal();
    toggleCarrito();
  };

  document.getElementById("modal-producto").style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modal-producto").style.display = "none";
}

function cambiarCantidadModal(delta) {
  cantidadModal += delta;
  if (cantidadModal < 1) cantidadModal = 1;
  document.getElementById("modal-cantidad").innerText = cantidadModal;
}

// CARRITO DE COMPRAS
function toggleCarrito() {
  document.getElementById("desplegable-carrito").classList.toggle("activo");
}

function agregarAlCarrito(producto, cantidad) {
  const existe = carrito.find(item => item.id === producto.id);
  if (existe) {
    existe.cantidad += cantidad;
  } else {
    carrito.push({ ...producto, cantidad });
  }
  actualizarCarrito();
}

function actualizarCarrito() {
  const contenedor = document.getElementById("items-carrito");
  let totalUnidades = 0;
  contenedor.innerHTML = "";

  carrito.forEach((item, index) => {
    totalUnidades += item.cantidad;
    const div = document.createElement("div");
    div.className = "item-panel";
    div.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}">
      <div style="flex:1;">
        <h4 style="font-size:0.85rem;">${item.nombre}</h4>
        <div style="display:flex; align-items:center; gap:8px; margin-top:4px;">
          <button onclick="modificarCantidadCarrito(${index}, -1)">-</button>
          <span>${item.cantidad}</span>
          <button onclick="modificarCantidadCarrito(${index}, 1)">+</button>
        </div>
      </div>
    `;
    contenedor.appendChild(div);
  });

  document.getElementById("contador-carrito").textContent = totalUnidades;
}

function modificarCantidadCarrito(index, cambio) {
  if (carrito[index]) {
    carrito[index].cantidad += cambio;
    if (carrito[index].cantidad <= 0) carrito.splice(index, 1);
    actualizarCarrito();
  }
}

// WHATSAPP
function enviarWhatsApp() {
  if (carrito.length === 0) {
    alert("Tu bolsa está vacía.");
    return;
  }

  let mensaje = "¡Hola! Quisiera solicitar el siguiente pedido:\n\n";
  carrito.forEach(item => {
    mensaje += `• *${item.nombre}* (${item.tamano} - ${item.origen}) - Cantidad: ${item.cantidad}\n`;
  });

  window.open(`https://wa.me/573000000000?text=${encodeURIComponent(mensaje)}`, "_blank");
}

// INICIALIZACIÓN
renderizarProductos(productos);
