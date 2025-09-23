// Navbar elements
const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn"); // hamburger
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const overlay = document.getElementById("sidebar-overlay"); // already in HTML
const date = document.querySelector("#date");

// ====== Navbar fixed on scroll ======
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

// ====== Open sidebar ======
const openSidebar = () => {
  sidebar.classList.add("show");
  overlay.classList.add("show");
  document.body.style.overflow = "hidden"; // lock scroll
};

// ====== Close sidebar ======
const closeSidebar = () => {
  sidebar.classList.remove("show");
  overlay.classList.remove("show");
  document.body.style.overflow = "auto"; // unlock scroll
};

// Event listeners
navBtn.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

// Close sidebar when any link is clicked
document.querySelectorAll(".sidebar-links a").forEach(link => {
  link.addEventListener("click", closeSidebar);
});

// ====== Set current year ======
date.textContent = new Date().getFullYear();
