// Trigger tour mode
document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-tour-btn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      document.body.classList.add("tour-started");

      const sideNav = document.getElementById("side-nav");
      sideNav.classList.add("collapsed");
      sideNav.classList.add("show-sidebar");

      const icon = document.querySelector("#sidebar-latch i");
      icon.classList.remove("fa-chevron-left");
      icon.classList.add("img");
    });
  }
});
