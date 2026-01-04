document.addEventListener("DOMContentLoaded", () => {

  /* MOBILE NAV TOGGLE */
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  /* CLOSE MENU AFTER CLICK (Mobile UX Fix) */
  const navItems = navLinks.querySelectorAll("a");

  if (navItems.length > 0) {
    navItems.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

});
