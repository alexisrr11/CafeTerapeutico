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

// Función para obtener estación actual
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
  });