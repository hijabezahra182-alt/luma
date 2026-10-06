// ================================
// MOBILE NAVIGATION
// ================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-active");

    if (navLinks.classList.contains("mobile-active")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-active");

        menuButton.textContent = "☰";

    });

});


// ================================
// DEMO START BUTTON
// ================================

const focusButton = document.querySelector(".focus-card button");

focusButton.addEventListener("click", () => {

    focusButton.textContent = "Started ✓";

    setTimeout(() => {
        focusButton.textContent = "Start";
    }, 2000);

});


// ================================
// CTA BUTTON DEMO
// ================================

const ctaButtons = document.querySelectorAll(".primary-button");

ctaButtons.forEach(button => {

    button.addEventListener("click", function(event) {

        if (this.getAttribute("href") === "#") {

            event.preventDefault();

            alert("Welcome to Luma! Your free workspace is ready to begin.");

        }

    });

});