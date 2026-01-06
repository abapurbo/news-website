// nav manu toggle icons functionality
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");
    const menuSvg = document.getElementById("menuSvg");

    if (!menuIcon || !navLinks || !menuSvg) return;

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            // close icon
            menuSvg.innerHTML = `
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            `;
        } else {
            // open menu icon
            menuSvg.innerHTML = `
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
            `;
        }
    });
});


