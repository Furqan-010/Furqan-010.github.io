document.addEventListener("DOMContentLoaded", () => {

  /* CONTACT FORM */
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Message sent successfully!");
      contactForm.reset();
    });
  }

  /* MOBILE NAV TOGGLE */
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    /* CLOSE MENU AFTER CLICK (mobile UX fix) */
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }
});
