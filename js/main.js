//js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Get the current URL path (this includes the file name, if present)
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a'); // Select all nav links

    // Debug: log the current page for verification
    console.log(`Current page: ${currentPage}`);

    navLinks.forEach(link => {
        // Define the href attribute of each link inside the loop
        const linkHref = new URL(link.href).pathname;

        // Debug: log the href of each link for verification
        console.log(`Link href: ${linkHref}`);

        // Compare the current page URL with the link URL
        if (currentPage === linkHref) {
            console.log(`Match found! Adding 'active' class to: ${linkHref}`);
            link.classList.add('active'); // Add the 'active' class to the matching link
        } else {
            console.log(`No match for: ${linkHref}`);
        }
    });
});



//Navbar
// Add shadow to navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Toggle the mobile menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-left, .nav-right');

navToggle.addEventListener('click', () => {
    navLinks.forEach(nav => nav.classList.toggle('active'));
});



// js/collapsible.js
document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            var isExpanded = this.classList.contains("active");
            this.setAttribute("aria-expanded", isExpanded);
            
            var chevron = this.querySelector(".chevron");

            if (isExpanded){
                content.style.maxHeight = content.scrollHeight + "px";
                // Change chevron to up arrow
                if (chevron) {
                    chevron.textContent = "\u25B2"; // Unicode for up arrow ▲
                }
            } else {
                content.style.maxHeight = null;
                // Change chevron to down arrow
                if (chevron) {
                    chevron.textContent = "\u25BC"; // Unicode for down arrow ▼
                }
            } 
        });
    }
});
