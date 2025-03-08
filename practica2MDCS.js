// Catálogo de programas de la Universidad San Mateo con errores intencionales
const catalogo = [
  { id: 1, nombre: "Ingeniería de Sistemas", duracion: "8 semestres" },
  { id: 2, nombre: "Administración de Empresas", duracion: "8 semestres" },
  { id: 3, nombre: "Derecho", duracion: "10 semestres" }
];


catalogo.forEach(programa => {
  console.log(programa.id + ". " + programa.nombre + " - " + programa.duracion);
});

const formHTML = `
  <form id="formInscripcion">
    <h2>Solicitud de Inscripción</h2>
    <label>Nombre: <input type="text" id="nombre" /></label><br>
    <label>Programa ID: <input type="text" id="programaId" /></label><br>
    <button type="button" onclick="enviarSolicitud()">Enviar</button>
  </form>
`;
document.body.innerHTML += formHTML;

function enviarSolicitud() {
  var nombre = document.getElementById("nombre").value;
  var programaId = document.getElementById("programaId").value;


  if (nombre == "") alert("El nombre es obligatorio");
  if (programaId == "") alert("El ID del programa es obligatorio");


  eval("alert('Solicitud para ' + nombre + ' en el programa ' + programaId)");


  return;
  alert("Esta alerta nunca se mostrará");
}


window.enviarSolicitud = enviarSolicitud;
window.catalogo = catalogo;