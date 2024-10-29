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


// JavaScript for Infinite-Looping Carousel and Category Navigation
document.addEventListener('DOMContentLoaded', () => {
    // Select all carousels
    const petCardsContainers = document.querySelectorAll('.pet-cards-container');

    petCardsContainers.forEach((container) => {
        const petCards = container.querySelector('.pet-cards');
        const petCardsChildren = Array.from(petCards.children);
        const totalCards = petCardsChildren.length;
        const cardWidth = petCardsChildren[0].offsetWidth + 20;

        // Clone first and last few cards
        const clonesBefore = petCardsChildren.slice(-3).map(card => card.cloneNode(true));
        const clonesAfter = petCardsChildren.slice(0, 3).map(card => card.cloneNode(true));

        clonesBefore.forEach(clone => petCards.insertBefore(clone, petCards.firstChild));
        clonesAfter.forEach(clone => petCards.appendChild(clone));

        // Adjust the carousel's initial position
        let currentIndex = totalCards;
        const initialShift = -currentIndex * cardWidth;
        petCards.style.transform = `translateX(${initialShift}px)`;

        // Function to update the carousel's transform
        function updateCarousel() {
            const shift = -currentIndex * cardWidth;
            petCards.style.transition = 'transform 0.5s ease-in-out';
            petCards.style.transform = `translateX(${shift}px)`;
        }

        // Handle transition end for infinite looping
        petCards.addEventListener('transitionend', () => {
            if (currentIndex >= totalCards + 3) {
                petCards.style.transition = 'none';
                currentIndex = totalCards;
                const shift = -currentIndex * cardWidth;
                petCards.style.transform = `translateX(${shift}px)`;
            }
            if (currentIndex <= 2) {
                petCards.style.transition = 'none';
                currentIndex = totalCards + 2;
                const shift = -currentIndex * cardWidth;
                petCards.style.transform = `translateX(${shift}px)`;
            }
        });

        // Scroll buttons
        const leftBtn = container.querySelector('.left-btn');
        const rightBtn = container.querySelector('.right-btn');

        leftBtn.addEventListener('click', () => {
            currentIndex--;
            updateCarousel();
        });

        rightBtn.addEventListener('click', () => {
            currentIndex++;
            updateCarousel();
        });
    });

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
            
            if (isExpanded){
                content.style.maxHeight = content.scrollHeight + "px";
                // Change icon to up
                this.querySelector("i").classList.remove("fa-chevron-down");
                this.querySelector("i").classList.add("fa-chevron-up");
            } else {
                content.style.maxHeight = null;
                // Change icon to down
                this.querySelector("i").classList.remove("fa-chevron-up");
                this.querySelector("i").classList.add("fa-chevron-down");
            } 
        });
    }
});
