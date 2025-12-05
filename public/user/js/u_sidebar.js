function toggleNav() {
  const sideNav = document.getElementById("side-nav");
  const latch = document.getElementById("sidebar-latch");
  const icon = latch.querySelector("img");
  const extendedSidebar = document.querySelector(".extended-sidebar"); // Get the extended sidebar

  const isCollapsed = sideNav.classList.contains("collapsed");

  if (isCollapsed) {
    // Open sidebar
    sideNav.classList.remove("collapsed");
    sideNav.classList.remove("hide-sidebar");
    sideNav.classList.add("show-sidebar");

    latch.style.display = "none"; // 👈 hide latch when open

    icon.classList.remove("img");
    icon.classList.add("fa-chevron-left");
  } else {
    // Close sidebar with animation
    sideNav.classList.remove("show-sidebar");
    sideNav.classList.add("hide-sidebar");

    icon.classList.remove("fa-chevron-left");
    icon.classList.add("img");

    // After animation ends, collapse + show latch again
    setTimeout(() => {
      sideNav.classList.remove("hide-sidebar");
      sideNav.classList.add("collapsed");

      // 👇 Show latch ONLY if tour is running
      if (document.body.classList.contains("tour-in-progress")) {
        latch.style.display = "flex";
      }

      // Hide extended sidebar when closing the main sidebar
      extendedSidebar.style.display = "none";

      // Close all submenus when sidebar is collapsed
      const allSubmenus = document.querySelectorAll(".extended-menu");
      allSubmenus.forEach((submenu) => {
        submenu.style.display = "none"; // Hide all submenus when sidebar is collapsed
      });

      // Remove active class from all nav items
      const navItems = document.querySelectorAll(".nav-item");
      navItems.forEach((item) => {
        item.classList.remove("active");
      });
    }, 400); // match your CSS animation duration
  }
}

// Function to toggle visibility of submenus
function toggleSubmenu(section) {
  const submenu = document.getElementById(`${section}-submenu`);
  const extendedSidebar = document.querySelector(".extended-sidebar");

  if (!submenu) {
    console.warn(`Submenu for ${section} not found`);
    return; // If the submenu doesn't exist, stop execution
  }

  // Show the extended sidebar if it's not already visible
  extendedSidebar.style.display = "flex"; // Ensure the extended sidebar is shown

  // Check if the clicked submenu is already visible
  if (submenu.style.display === "block") {
    // If it's already visible, hide it
    submenu.style.display = "none";
    // Remove the active class from the clicked nav-item
    const clickedItem = document.getElementById(section);
    if (clickedItem) {
      clickedItem.classList.remove("active");
    }
  } else {
    // Otherwise, show the submenu and hide all others
    const allSubmenus = document.querySelectorAll(".extended-menu");
    allSubmenus.forEach((item) => {
      item.style.display = "none"; // Hide all submenus
    });

    submenu.style.display = "block"; // Show the clicked submenu

    // Ensure only the clicked navigation item remains active
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
      item.classList.remove("active"); // Remove active class from all items
    });

    // Add the active class to the clicked item
    const clickedItem = document.getElementById(section);
    if (clickedItem) {
      clickedItem.classList.add("active"); // Add active class to the clicked item
    }
  }
}

// This will keep the sidebar open and only toggle the submenus.
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", (event) => {
    const nodeId = item.getAttribute("data-node");
    const virtualTour = viewer.getPlugin(VirtualTourPlugin);

    // Prevent the panorama logic from interfering with submenu functionality
    event.stopPropagation();

    // If you want to use nodeId for panorama, you can keep that as is.
    if (nodeId) {
      virtualTour.setCurrentNode(nodeId);
    }

    // You can call the toggleSubmenu function here to open the corresponding submenu
    toggleSubmenu(item.id);
  });
});
