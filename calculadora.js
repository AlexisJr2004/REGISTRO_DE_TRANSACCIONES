let ventas = [];

function agregarVenta() {
  let producto = document.getElementById("producto").value;
  let cantidad = parseInt(document.getElementById("cantidad").value);
  let precio = parseFloat(document.getElementById("precio").value);

  let venta = {
    producto: producto,
    cantidad: cantidad,
    precio: precio
  };

  ventas.push(venta);

  actualizarTabla();
}

function actualizarTabla() {
  let tabla = document.getElementById("tabla-ventas");
  let filasExistentes = tabla.rows.length - 1;
  // Se resta 1 para excluir la fila del total

  for (let i = 0; i < filasExistentes; i++) {
    tabla.deleteRow(1);
    // Se elimina la segunda fila (índice 1) porque la primera fila
    // corresponde a la cabecera de la tabla
  }

  let totalVentas = 0;

  ventas.forEach(function(venta) {
    let fila = document.createElement("tr");

    let producto = document.createElement("td");
    producto.textContent = venta.producto;
    fila.appendChild(producto);

    let cantidad = document.createElement("td");
    cantidad.textContent = venta.cantidad.toString().padStart(2, '0');
    fila.appendChild(cantidad);

    let precio = document.createElement("td");
    precio.textContent = venta.precio.toFixed(2).toString().padStart(6, '0');
    fila.appendChild(precio);

    let total = document.createElement("td");
    let totalVenta = venta.cantidad * venta.precio;
    total.textContent = totalVenta.toFixed(2).toString().padStart(6, '0');
    fila.appendChild(total);

    totalVentas += totalVenta;

    tabla.appendChild(fila);
  });

  let filaTotal = document.createElement("tr");
  let tdTotal = document.createElement("td");
  tdTotal.colSpan = 3;
  tdTotal.textContent = "Total:";
  filaTotal.appendChild(tdTotal);

  let tdTotalVentas = document.createElement("td");
  tdTotalVentas.textContent = totalVentas.toFixed(2).toString().padStart(6, '0');
  filaTotal.appendChild(tdTotalVentas);

  tabla.appendChild(filaTotal);
}


function reiniciarVentas() {
  ventas = [];
  actualizarTabla();
}

function imprimirDatos() {
    let fecha = new Date().toLocaleDateString();
    let contenido = `Fecha: ${fecha}\n\nProducto          Cantidad    Precio     Total\n`;
    let total = 0;
    ventas.forEach(function(venta) {
      contenido += `${venta.producto.padEnd(18)}${venta.cantidad.toString().padStart(8)}${venta.precio.toFixed(2).toString().padStart(10)}${(venta.cantidad * venta.precio).toFixed(2).toString().padStart(10)}\n`;
      total += venta.cantidad * venta.precio;
    });
  
    contenido += `\nTotal: ${total.toFixed(2).toString().padStart(46)}`;
  
    let nuevaVentana = window.open("");
    nuevaVentana.document.write(`<pre>${contenido}</pre>`);
}





// seleccionar todas las secciones
var secciones = document.querySelectorAll('.seccion');

// agregar un listener de clic a cada sección
secciones.forEach(function(seccion) {
  seccion.addEventListener('click', function() {
    // eliminar la clase activa de todas las secciones
    secciones.forEach(function(s) {
      s.classList.remove('activa');
    });
    // agregar la clase activa a la sección seleccionada
    this.classList.add('activa');
  });
});



const navbarLinks = document.querySelectorAll(".navbar a");

navbarLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbarLinks.forEach(link => link.classList.remove("active"));
    link.classList.add("active");
  });
});
