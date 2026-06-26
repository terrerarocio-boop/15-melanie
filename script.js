const evento = new Date("August 15, 2026 22:00:00").getTime();

function actualizarCuenta(){
  const ahora = new Date().getTime();
  const distancia = evento - ahora;

  if(distancia <= 0){
    document.getElementById("cuenta").innerHTML = "¡Hoy es la gran noche!";
    return;
  }

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("cuenta").innerHTML =
    dias + " días · " + horas + " hs · " + minutos + " min · " + segundos + " seg";
}

actualizarCuenta();
setInterval(actualizarCuenta, 1000);
