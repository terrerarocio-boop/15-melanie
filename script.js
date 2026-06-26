const evento = new Date("2026-08-15T22:00:00");

function actualizarCuenta() {
  const ahora = new Date();
  const diferencia = evento - ahora;

  if (diferencia <= 0) {
    document.getElementById("cuenta").textContent = "¡Llegó el gran día!";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("cuenta").textContent =
    `${dias} días · ${horas} hs · ${minutos} min · ${segundos} seg`;
}

actualizarCuenta();
setInterval(actualizarCuenta, 1000);
