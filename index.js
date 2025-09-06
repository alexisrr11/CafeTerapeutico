  document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("sobreMiAnimado");
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-12");
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      });
    }, { threshold: 0.2 });
    
    observer.observe(target);
});

// Seleccionamos el modal y el párrafo donde irá el mensaje
    const modal = document.getElementById('modalOferta');
    const mensaje = document.getElementById('mensajeOferta');
    const cuentaRegresiva = document.getElementById('cuentaRegresiva');
    const cerrarBtn = document.getElementById('cerrarModal');

    // Mensaje de la promoción
    const promocion = "20 de septiembre 16:00hs, Promoción exclusiva por $12000 ¡Te espero!";
    mensaje.textContent = promocion;

    // Fecha límite de la promoción
    const fechaPromocion = new Date("2025-09-20T16:00:00");

    // Mostramos el modal si la fecha aún no pasó
    const ahora = new Date();
    if (ahora < fechaPromocion) {
        modal.classList.remove('hidden');
    }

    // Función para cerrar el modal
    cerrarBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Cerrar si se hace click fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // Actualizar la cuenta regresiva cada segundo
    const intervalo = setInterval(() => {
        const ahora = new Date();
        const diferencia = fechaPromocion - ahora;

        if (diferencia <= 0) {
            // La promoción terminó, ocultamos el modal y detenemos el intervalo
            modal.classList.add('hidden');
            clearInterval(intervalo);
            return;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        cuentaRegresiva.textContent = `Faltan: ${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }, 1000);

/*/ Función para obtener estación actual
  function obtenerEstacion() {
    const mes = new Date().getMonth() + 1; // Enero = 0
    if (mes >= 3 && mes <= 5) return "Primavera";
    if (mes >= 6 && mes <= 8) return "Verano";
    if (mes >= 9 && mes <= 11) return "Otoño";
    return "Invierno";
  }

  // Mensajes de oferta según estación
  const ofertas = {
    "Primavera": "Promoción $12,000 precio Primavera 🌸",
    "Verano": "Promoción $14,000 precio Verano ☀️",
    "Otoño": "Promoción $10,500 precio Otoño 🍂",
    "Invierno": "Promoción $11,000 precio Invierno ❄️"
  };

  // Mostrar modal al cargar
  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modalOferta");
    const mensaje = document.getElementById("mensajeOferta");
    mensaje.textContent = ofertas[obtenerEstacion()];
    modal.classList.remove("hidden");

    // Cerrar modal
    document.getElementById("cerrarModal").addEventListener("click", () => {
      modal.classList.add("hidden");
    });

    // Cerrar modal al hacer clic fuera
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.add("hidden");
    });
  });*/