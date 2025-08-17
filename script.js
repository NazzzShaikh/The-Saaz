


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    // Toggle menu on hamburger click
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    // Close menu when clicking any nav link & navigate smoothly
    navItems.forEach((item) => {
        item.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute("href"); // Get target section ID
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                });
            }

            // Close menu after navigation
            navLinks.classList.remove("show");
        });
    });
});


