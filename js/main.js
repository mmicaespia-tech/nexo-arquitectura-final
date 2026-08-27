document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelectorAll("[data-year]");
  year.forEach(el => el.textContent = new Date().getFullYear());

  if (window.AOS) {
    AOS.init({
      duration: 650,
      once: true,
      offset: 70
    });
  }

  const form = document.querySelector("#contactForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        const feedback = document.querySelector("#formFeedback");
        if (feedback) {
          feedback.textContent = "Gracias. Recibimos tu consulta correctamente.";
        }
        form.reset();
      }
      form.classList.add("was-validated");
    });
  }
});
