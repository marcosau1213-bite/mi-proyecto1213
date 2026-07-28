/* 🎵 Audio */
const audio = document.getElementById("audioFondo");

/* 🌬️ Nubes dinámicas */
function crearNube() {
  const nube = document.createElement("div");
  nube.classList.add("nube");
  nube.style.left = "-200px";
  nube.style.top = Math.random() * 40 + "vh";
  document.getElementById("escenario").appendChild(nube);

  let x = -200;
  const velocidad = Math.random() * 0.8 + 0.6;

  function mover() {
    x += velocidad;
    nube.style.left = x + "px";
    if (x > window.innerWidth + 200) {
      nube.remove();
    } else {
      requestAnimationFrame(mover);
    }
  }

  mover();
}

setInterval(crearNube, 3000);
for (let i = 0; i < 3; i++) crearNube();

/* 🧩 Botón Troll */
function activarTroll() {
  abrirSala("pantallaTroll");
  audio.pause();
}

document.getElementById("cerrarTroll").onclick = () => {
  cerrarSala("pantallaTroll");
  audio.play();
};

/* ✔ Botón Sí */
document.getElementById("btnSi").onclick = () => {
  document.getElementById("mensajeTroll").textContent = "Me alegra que estés bien 😊";
};

/* ✔ Botón No */
document.getElementById("btnNo").onclick = () => {
  const btn = document.getElementById("btnNo");
  const maxX = window.innerWidth - 120;
  const maxY = window.innerHeight - 120;

  btn.style.position = "absolute";
  btn.style.left = Math.random() * maxX + "px";
  btn.style.top = Math.random() * maxY + "px";
};

/* 🔐 Sistema de códigos */
document.getElementById("btnCodigo").onclick = () => {
  const codigo = prompt("Introduce un código:");
  if (codigo === "meses") abrirSala("salaMinijuego");
  else if (codigo === "puesta") abrirSalaPuestaSol();
  else if (codigo === "troll") activarTroll();
  else alert("Código incorrecto");
};

/* 🎮 Minijuego */
let puntos = 0;

/* 📅 Meses y años */
const meses = [
  "Julio", "Agosto", "Septiembre", "Octubre",
  "Noviembre", "Diciembre", "Enero", "Febrero",
  "Marzo", "Abril", "Mayo", "Junio"
];

let indiceMes = 0;
let anos = 0;

function actualizarMes() {
  document.getElementById("mesActual").textContent = "Mes: " + meses[indiceMes];
}

function sumarMes() {
  indiceMes++;

  if (indiceMes >= 12) {
    indiceMes = 0;
    anos++;
    document.getElementById("anosPasados").textContent = "Años: " + anos;
  }

  actualizarMes();
}

/* 🎈 Globos */
function crearGlobo() {
  const globo = document.createElement("div");
  globo.classList.add("globo");
  globo.style.left = Math.random() * 90 + "vw";
  globo.style.top = "70vh";
  globo.style.setProperty("--color", Math.floor(Math.random() * 360));

  globo.onclick = () => {
    globo.classList.add("explotar");

    puntos++;
    document.getElementById("puntos").textContent = puntos;

    sumarMes();

    setTimeout(() => globo.remove(), 300);
  };

  document.getElementById("zonaJuego").appendChild(globo);

  let y = 70;
  const velocidad = Math.random() * 0.3 + 0.2;

  function subir() {
    y -= velocidad;
    globo.style.top = y + "vh";

    if (y < -10) {
      globo.remove();
    } else {
      requestAnimationFrame(subir);
    }
  }

  subir();
}

setInterval(crearGlobo, 1200);

/* 🏠 Control de salas */
function abrirSala(id) {
  document.getElementById(id).classList.add("activa");
}

function cerrarSala(id) {
  document.getElementById(id).classList.remove("activa");
}

document.getElementById("cerrarMinijuego").onclick = () => cerrarSala("salaMinijuego");
document.getElementById("cerrarSalaSecreta").onclick = () => cerrarSala("salaSecreta");
document.getElementById("cerrarSalaHoja").onclick = () => cerrarSala("salaHoja");

/* 📝 Hoja secreta */
document.getElementById("btnSecreto").onclick = () => abrirSala("salaHoja");

/* 🌅 Sala puesta de sol */
function abrirSalaPuestaSol() {
  abrirSala("salaPuestaSol");
  audio.pause();
}

function cerrarSalaPuestaSol() {
  cerrarSala("salaPuestaSol");
  audio.play();
}
/* 🐱 Sonido de miau */
const sonidoMiau = document.getElementById("sonidoMiau");

/* 🐾 Gatito clicable */
const gatito = document.getElementById("Gatito");

gatito.onclick = () => {
  sonidoMiau.currentTime = 0; // reinicia el sonido
  sonidoMiau.play();          // reproduce el miau
};
const audioPuestaSol = document.getElementById("audioPuestaSol");

function abrirSalaPuestaSol() {
  abrirSala("salaPuestaSol");
  audio.pause(); // pausa música global
}

function cerrarSalaPuestaSol() {
  cerrarSala("salaPuestaSol");
  audio.play(); // vuelve música global
  audioPuestaSol.pause(); // pausa la canción de la sala
}
/* 🖼️ Secuencia de sprites */
const sprite = document.getElementById("spriteSecuencia");
const dialogo = document.getElementById("dialogoSprite");

/* Lista de imágenes */
const sprites = [
  "miracielo.png",
  "mirarte.png",
  "gafas.gif",
  "sueño.gif"
];

/* Diálogos correspondientes */
const textos = [
  "Mirando el cielo contigo…",
  "Me encanta mirarte así…",
  "¿Qué tal me quedan las gafas?",
  "Tengo un poquito de sueño…"
];

let indice = 0;

/* Evento de clic */
sprite.onclick = () => {
  // Mostrar diálogo
  dialogo.style.display = "block";
  dialogo.textContent = textos[indice];

  // Cambiar imagen al siguiente sprite
  indice++;
  if (indice >= sprites.length) indice = 0;

  sprite.src = sprites[indice];
};

