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
let productoSeleccionado = null;
let cantidadModal = 1;

// MOSTRAR U OCULTAR LA SECCIÓN DE TENDENCIA CON LA FLECHITA
function toggleSeccionTendencia() {
  const contenedor = document.getElementById("contenedor-carrusel-tendencia");
  const botonFlecha = document.getElementById("btn-toggle-tendencia");

  contenedor.classList.toggle("ocultar");
  botonFlecha.classList.toggle("oculto");
}

// MOSTRAR PRODUCTOS EN TENDENCIA
function renderizarTendencias() {
  const contenedorTendencia = document.getElementById("catalogo-tendencia");
  contenedorTendencia.innerHTML = "";

  const tendencias = productos.filter(p => p.enTendencia);

  tendencias.forEach(prod => {
    const porcentajeDescuento = Math.round(((prod.precioUnitario - prod.precioMayor) / prod.precioUnitario) * 100);

    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => abrirModal(prod);

    card.innerHTML = `
      <!-- INSIGNIA FUEGUITO ARRIBA A LA IZQUIERDA -->
      <div class="insignia-fueguito">🔥</div>

      <!-- INSIGNIA DESCUENTO ARRIBA A LA DERECHA -->
      <div class="insignia-descuento">
        <img src="imagenes/descuento.png" alt="%" onerror="this.src='https://cdn-icons-png.flaticon.com/512/879/879759.png'">
        <span>-${porcentajeDescuento}%</span>
      </div>

      <img class="img-producto" src="${prod.imagen}" alt="${prod.nombre}" onerror="this.src='https://via.placeholder.com/200?text=Peluche'">
      <h3>${prod.nombre}</h3>
      <div class="precios-contenedor">
        <span class="precio-unitario">$${prod.precioUnitario.toLocaleString('es-CO')}</span>
        <span class="precio-por-mayor">$${prod.precioMayor.toLocaleString('es-CO')}</span>
      </div>
      <div>
        <span class="badge">${prod.tamano}</span>
        <span class="badge">${prod.origen}</span>
      </div>
    `;

    contenedorTendencia.appendChild(card);
  });
}

// DESPLAZAR CARRUSEL DE TENDENCIAS LATERALMENTE
function desplazarCarrusel(direccion) {
  const carrusel = document.getElementById("catalogo-tendencia");
  const desplazamiento = 220;
  carrusel.scrollBy({
    left: direccion * desplazamiento,
    behavior: 'smooth'
  });
}

// MOSTRAR PRODUCTOS GENERALES EN EL CATÁLOGO
function renderizarProductos(lista) {
  const catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = "";

  if (lista.length === 0) {
    catalogo.innerHTML = "<p style='grid-column: 1/-1; text-align: center; color: var(--texto-gris);'>No se encontraron productos.</p>";
    return;
  }

  lista.forEach(prod => {
    const porcentajeDescuento = Math.round(((prod.precioUnitario - prod.precioMayor) / prod.precioUnitario) * 100);

    // Si es tendencia creamos el HTML del fueguito arriba a la izquierda
    const htmlFueguito = prod.enTendencia ? `<div class="insignia-fueguito">🔥</div>` : "";

    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => abrirModal(prod);

    card.innerHTML = `
      ${htmlFueguito}

      <!-- INSIGNIA DESCUENTO ARRIBA A LA DERECHA -->
      <div class="insignia-descuento">
        <img src="imagenes/descuento.png" alt="%" onerror="this.src='https://cdn-icons-png.flaticon.com/512/879/879759.png'">
        <span>-${porcentajeDescuento}%</span>
      </div>

      <img class="img-producto" src="${prod.imagen}" alt="${prod.nombre}" onerror="this.src='https://via.placeholder.com/200?text=Peluche'">
      <h3>${prod.nombre}</h3>
      <div class="precios-contenedor">
        <span class="precio-unitario">$${prod.precioUnitario.toLocaleString('es-CO')}</span>
        <span class="precio-por-mayor">$${prod.precioMayor.toLocaleString('es-CO')}</span>
      </div>
      <div>
        <span class="badge">${prod.tamano}</span>
        <span class="badge">${prod.origen}</span>
      </div>
    `;

    catalogo.appendChild(card);
  });
}

// FILTRAR PRODUCTOS
function filtrarProductos() {
  const textoBuscador = document.getElementById("buscador").value.toLowerCase();
  const tamanoSeleccionado = document.getElementById("filtro-tamano").value;
  const origenSeleccionado = document.getElementById("filtro-origen").value;

  const resultado = productos.filter(p => {
    const coincideNombre = p.nombre.toLowerCase().includes(textoBuscador);
    const coincideTamano = tamanoSeleccionado === "" || p.tamano === tamanoSeleccionado;
    const coincideOrigen = origenSeleccionado === "" || p.origen === origenSeleccionado;

    return coincideNombre && coincideTamano && coincideOrigen;
  });

  renderizarProductos(resultado);
}

// MODAL PRODUCTO
function abrirModal(producto) {
  productoSeleccionado = producto;
  cantidadModal = 1;

  document.getElementById("modal-titulo").innerText = producto.nombre;
  document.getElementById("modal-img-principal").src = producto.imagen;
  document.getElementById("modal-precio-unitario").innerText = `$${producto.precioUnitario.toLocaleString('es-CO')}`;
  document.getElementById("modal-precio-mayor").innerText = `$${producto.precioMayor.toLocaleString('es-CO')}`;
  document.getElementById("modal-etiquetas").innerText = `Tamaño: ${producto.tamano} | Origen: ${producto.origen}`;
  document.getElementById("modal-descripcion").innerText = producto.descripcion;
  document.getElementById("modal-cantidad").innerText = cantidadModal;

  document.getElementById("modal-btn-agregar").onclick = () => {
    agregarAlCarrito(productoSeleccionado, cantidadModal);
    cerrarModal();
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

// ABRIR Y CERRAR DESPLEGABLE DE CARRITO
function toggleCarrito() {
  const carritoElem = document.getElementById("desplegable-carrito");
  carritoElem.classList.toggle("activo");
}

// CARRITO Y ACTUALIZACION
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
  const contenedorItems = document.getElementById("items-carrito");
  const totalPrecioElem = document.getElementById("total-precio");
  const contadorProductos = document.getElementById("contador-productos");

  contenedorItems.innerHTML = "";
  let total = 0;
  let cantidadTotalProductos = 0;

  if (carrito.length === 0) {
    contenedorItems.innerHTML = '<p style="font-size:0.9rem; color:#7A6C65; text-align:center; margin-top:20px;">Aún no has agregado productos</p>';
    totalPrecioElem.textContent = "0";
    contadorProductos.textContent = "0";
    return;
  }

  carrito.forEach((item, index) => {
    const precioAplicado = item.cantidad >= 3 ? item.precioMayor : item.precioUnitario;
    const subtotal = precioAplicado * item.cantidad;
    total += subtotal;
    cantidadTotalProductos += item.cantidad;

    const divItem = document.createElement("div");
    divItem.className = "item-carrito-ml";

    divItem.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}" onerror="this.src='https://via.placeholder.com/50'">
      <div class="info-item-ml">
        <h4>${item.nombre}</h4>
        <p>$${precioAplicado.toLocaleString('es-CO')} c/u</p>
        <div style="display:flex; align-items:center; gap:8px; margin-top:5px;">
          <button onclick="modificarCantidadCarrito(${index}, -1)" style="padding:2px 8px; border-radius:6px; border:1px solid #D8C4B6; background:#FFF; cursor:pointer;">-</button>
          <span>${item.cantidad}</span>
          <button onclick="modificarCantidadCarrito(${index}, 1)" style="padding:2px 8px; border-radius:6px; border:1px solid #D8C4B6; background:#FFF; cursor:pointer;">+</button>
        </div>
      </div>
      <div style="font-weight: bold;">
        $${subtotal.toLocaleString('es-CO')}
      </div>
    `;

    contenedorItems.appendChild(divItem);
  });

  totalPrecioElem.textContent = total.toLocaleString('es-CO');
  contadorProductos.textContent = cantidadTotalProductos;
}

function modificarCantidadCarrito(index, cambio) {
  if (carrito[index]) {
    carrito[index].cantidad += cambio;

    if (carrito[index].cantidad <= 0) {
      carrito.splice(index, 1);
    }

    actualizarCarrito();
  }
}

// ENVIAR A WHATSAPP
function enviarWhatsApp() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  let mensaje = "¡Hola! Quisiera hacer el siguiente pedido de peluches:\n\n";
  let total = 0;

  carrito.forEach(item => {
    const precioAplicado = item.cantidad >= 3 ? item.precioMayor : item.precioUnitario;
    const subtotal = precioAplicado * item.cantidad;
    total += subtotal;

    mensaje += `• *${item.nombre}* (${item.tamano} - ${item.origen})\n  Cantidad: ${item.cantidad} - Subtotal: $${subtotal.toLocaleString('es-CO')}\n`;
  });

  mensaje += `\n*Total a pagar: $${total.toLocaleString('es-CO')}*`;

  const numeroTelefono = "573000000000"; 
  const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
}

// CARGAR AL INICIAR
renderizarTendencias();
renderizarProductos(productos);