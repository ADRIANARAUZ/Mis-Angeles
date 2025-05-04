  // Loader - esconde cuando la página ha cargado
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });

  // Selector de navegación
  const selectorNav = document.getElementById('selector-nav');
  if (selectorNav) {
    selectorNav.addEventListener('change', function () {
      const destino = this.value;
      if (destino) {
        const seccion = document.querySelector(destino);
        if (seccion) {
          seccion.scrollIntoView({ behavior: 'smooth' });
          seccion.setAttribute('tabindex', '-1');
          seccion.focus();
        }
      }
    });
  }

  // Manejo de tab panes (si usas pestañas)
  const tabs = document.querySelectorAll(".tab-btn");
  const panes = document.querySelectorAll(".tab-pane");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      panes.forEach(p => p.classList.remove("active"));

      tab.classList.add("active");
      const targetPane = document.getElementById(tab.dataset.tab);
      if (targetPane) {
        targetPane.classList.add("active");
      }
    });

    // Accesibilidad con teclado
    tab.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        tab.click();
      }
    });
  });

  // Asegura enfoque visible al usar teclado
  document.body.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });

function newFunction() {
  "livasync (params) => {";

  function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
  }
  
  function closeMenu() {
    const menu = document.getElementById("menu");
    menu.classList.remove("show");
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario-contacto");
  
    if (formulario) {
      formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Gracias por contactarnos. Pronto responderemos a su mensaje.");
        this.reset();
      });
    }
  });
  

}
