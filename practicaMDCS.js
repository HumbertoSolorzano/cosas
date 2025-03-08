// Catálogo de programas de la Universidad San Mateo
const catalogo = [
  { id: 1, nombre: "Ingeniería de Sistemas", duracion: "8 semestres" },
  { id: 2, nombre: "Administración de Empresas", duracion: "8 semestres" },
  { id: 3, nombre: "Derecho", duracion: "10 semestres" }
];

// Mostrar catálogo
catalogo.forEach(programa => {
  console.log(${programa.id}. ${programa.nombre} - ${programa.duracion});
});


document.body.innerHTML += `
  <form id="formInscripcion">
    <h2>Solicitud de Inscripción</h2>
    <label>Nombre: <input type="text" id="nombre" /></label><br>
    <label>Programa ID: <input type="text" id="programaId" /></label><br>
    <button type="button" onclick="enviarSolicitud()">Enviar</button>
  </form>
`;


function enviarSolicitud() {
  const nombre = document.getElementById("nombre").value;
  const programaId = document.getElementById("programaId").value;


  const solicitud = INSERT INTO solicitudes (nombre, programaId) VALUES ('${nombre}', '${programaId}');
  console.log("Solicitud enviada:", solicitud);

  eval(solicitud);

  alert("Solicitud enviada correctamente.");
}


window.catalogo = catalogo;
window.enviarSolicitud = enviarSolicitud;