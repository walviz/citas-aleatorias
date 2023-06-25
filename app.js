let boton = document.getElementById('btn-cambiar-citas');
let cita = document.getElementById('cita');
let autor = document.getElementById('autor');

function numeroAleatorio(min,max) {
  //no incluye el maximo segun el arreglo
  return Math.floor(Math.random() * (max-min)+min);
}

function cambiarCita(params) {
  let indiceAleatorio = numeroAleatorio(0,citas.length);// se toma el array porque se cargo antes que el documento app.js
  cita.innerHTML = `"${citas[indiceAleatorio].texto}"`;
  autor.innerHTML = `"${citas[indiceAleatorio].autor}"`;
}

cambiarCita();

boton.addEventListener('click',cambiarCita);