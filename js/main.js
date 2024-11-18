//js/main.js



// Function to open the modal
function openModal(petName) {
    document.getElementById(petName + '-modal').style.display = 'block';
}

// Function to close the modal
function closeModal(petName) {
    document.getElementById(petName + '-modal').style.display = 'none';
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    Array.from(modals).forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}


// JavaScript to toggle the mobile menu
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links-container');

    hamburger.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", function() {
    const collapsibleButtons = document.querySelectorAll(".collapsible");
    const careCategories = document.querySelectorAll(".care-category");

    collapsibleButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Get the ID of the content to show
            const contentId = this.getAttribute("aria-controls");
            const content = document.getElementById(contentId);

            // Toggle active state of the button
            const isActive = this.classList.contains("active");

            // Collapse all sections and deactivate all buttons
            collapsibleButtons.forEach(btn => btn.classList.remove("active"));
            careCategories.forEach(cat => cat.classList.remove("active"));

            if (!isActive) {
                // Activate the clicked button and show the corresponding content
                this.classList.add("active");
                content.classList.add("active");
            }
        });
    });
});


// JavaScript for FAQ toggle functionality
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const faqItem = item.parentElement;
        faqItem.classList.toggle('active');
    });
});
