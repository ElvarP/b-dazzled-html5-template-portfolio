const header = document.getElementById("header");
const mobileNavigation = document.getElementById("mobileNavigation");
const toggleMobileNavigation = document.getElementById("toggleMobileNavigation");

toggleMobileNavigation.addEventListener("change", function () {
	mobileNavigation.classList.toggle("-translate-y-full");
});

// const sidenav = document.querySelector(".sidenav");
// const btnToggleSidenav = document.querySelector(".btnToggleSidenav");
// const btnOpen = document.querySelector(".sidenav-open");
// const btnClose = document.querySelector(".sidenav-close");

// btnToggleSidenav.addEventListener("click", () => {
//   sidenav.classList.toggle("-translate-y-full");
//   btnOpen.classList.toggle("hidden");
//   btnClose.classList.toggle("hidden");
// });

// // get everythong needed
// const mobileMenuButton = document.querySelector(".mobile-menu-button");
// const sideBar = document.querySelector(".sidebar");

// // add event listener
// mobileMenuButton.addEventListener("click", () => {
//   sideBar.classList.toggle("-translate-x-full");
// });
