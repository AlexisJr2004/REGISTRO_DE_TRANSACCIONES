function registrarTransferencia() {
    var cuenta = document.getElementById("cuenta").value;
    var monto = document.getElementById("monto").value;
    var fecha = document.getElementById("fecha").value;
    var banco = document.getElementById("banco").value;
    var tramite = document.getElementById("tramite").value;
    var hora = obtenerHoraActual();
    var tabla = document.querySelector("table tbody");

    var fila = tabla.insertRow();
    var celdaCuenta = fila.insertCell(0);
    var celdaMonto = fila.insertCell(1);
    var celdaFecha = fila.insertCell(2);
    var celdaBanco = fila.insertCell(3);
    var celdaTramite = fila.insertCell(4);
    var celdaHora = fila.insertCell(5);

    celdaCuenta.innerHTML = cuenta;
    celdaMonto.innerHTML = monto;
    celdaFecha.innerHTML = fecha;
    celdaBanco.innerHTML = banco;
    celdaTramite.innerHTML = tramite;
    celdaHora.innerHTML = hora;

    document.getElementById("cuenta").value = "";
    document.getElementById("monto").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("banco").value = "";
    document.getElementById("tramite").value = "";

    actualizarTotales();
}

function obtenerHoraActual() {
  var fecha = new Date();
  var hora = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();

  if (hora < 10) {
    hora = "0" + hora;
  }

  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  var horaActual = hora + ":" + minutos + ":" + segundos;

  return horaActual;
}

function actualizarTotales() {
  var tabla = document.querySelector("table tbody");
  var totalGiros = 0;
  var totalRetiros = 0;
  var totalDepositos = 0;

  for (var i = 0; i < tabla.rows.length; i++) {
    var tramite = tabla.rows[i].cells[4].innerHTML;
    var monto = parseFloat(tabla.rows[i].cells[1].innerHTML);

    if (tramite === "Giro") {
      totalGiros += monto;
    } else if (tramite === "Retiro") {
      totalRetiros += monto;
    } else if (tramite === "Depósito") {
      totalDepositos += monto;
    }
  }

  document.getElementById("total-giros").innerHTML = totalGiros.toFixed(2);
  document.getElementById("total-retiros").innerHTML = totalRetiros.toFixed(2);
  document.getElementById("total-depositos").innerHTML = totalDepositos.toFixed(2);
}

function imprimirRegistro() {
    var tabla = document.querySelector("table").outerHTML;
    var nuevaVentana = window.open("", "", "width=700, height=500");
    nuevaVentana.document.write("<html><head><title>Registro de transferencias</title>");
    nuevaVentana.document.write("<style>");
    nuevaVentana.document.write("table { border-collapse: collapse; width: 100%; }");
    nuevaVentana.document.write("th, td { text-align: left; padding: 8px; }");
    nuevaVentana.document.write("th { background-color: #04AA6D; color: white; }");
    nuevaVentana.document.write("</style>");
    nuevaVentana.document.write("</head><body>");
    nuevaVentana.document.write("<h1 style='text-align:center;'>Registro de transferencias</h1>");
    nuevaVentana.document.write("<table>");
    nuevaVentana.document.write(tabla);
    nuevaVentana.document.write("</table>");
    nuevaVentana.document.write("<br>");
    nuevaVentana.document.write("<p style='text-align:right;'>Giros: $" + document.getElementById("total-giros").innerHTML + "</p>");
    nuevaVentana.document.write("<p style='text-align:right;'>Retiros: $" + document.getElementById("total-retiros").innerHTML + "</p>");
    nuevaVentana.document.write("<p style='text-align:right;'>Depósitos: $" + document.getElementById("total-depositos").innerHTML + "</p>");
    nuevaVentana.document.write("</body></html>");
    nuevaVentana.print();
  }
  
  
  
  
  

  function actualizarTotales() {
    var tabla = document.querySelector("table");
    var filas = tabla.rows;
    var total = 0;
  
    for (var i = 1; i < filas.length; i++) {
      var fila = filas[i];
      var celdaMonto = fila.cells[1];
      var monto = parseFloat(celdaMonto.innerHTML);
      total += monto;
    }
  
    var celdaTotal = document.getElementById("total");
    celdaTotal.innerHTML = total.toFixed(2);
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
