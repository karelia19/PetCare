document.addEventListener('DOMContentLoaded', () => {
  const mascota = {
    nombre: "",
    hambre: 50,
    felicidad: 50,
    salud: 50
  };

  const form = document.getElementById("mascotaForm");
  const mascotaSection = document.getElementById("mascotaSection");
  const mascotaTitulo = document.getElementById("mascotaTitulo");
  const mascotaImg = document.getElementById("mascotaImg");

  const hambreEl = document.getElementById("hambre");
  const felicidadEl = document.getElementById("felicidad");
  const saludEl = document.getElementById("salud");

  function actualizarEstado() {
    hambreEl.textContent = mascota.hambre;
    felicidadEl.textContent = mascota.felicidad;
    saludEl.textContent = mascota.salud;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    mascota.nombre = document.getElementById("nombre").value.trim() || "Mi Mascota";

    mascotaTitulo.textContent = mascota.nombre;
    mascotaSection.classList.remove("d-none");

    mascotaImg.src = "mascota.png";

    actualizarEstado();
  });

  // Alimentar
  document.getElementById("alimentarBtn").addEventListener("click", () => {
    mascota.hambre = Math.max(0, mascota.hambre - 15);
    mascota.salud = Math.min(100, mascota.salud + 5);
    mascota.felicidad = Math.min(100, mascota.felicidad + 7);
    mascotaImg.src = "mascota_hambrienta.png";
    actualizarEstado();
  });

  // Jugar
  document.getElementById("jugarBtn").addEventListener("click", () => {
    mascota.felicidad = Math.min(100, mascota.felicidad + 15);
    mascota.hambre = Math.min(100, mascota.hambre + 10);
    mascotaImg.src = "mascota_feliz.png";
    actualizarEstado();
  });

  // Dormir
  document.getElementById("dormirBtn").addEventListener("click", () => {
    mascota.salud = Math.min(100, mascota.salud + 10);
    mascota.hambre = Math.min(100, mascota.hambre + 5);
    mascotaImg.src = "mascota_durmiendo.png";
    actualizarEstado();
  });

  actualizarEstado();
});
