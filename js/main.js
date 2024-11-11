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
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navLinksContainer = document.querySelector(".nav-links-container");

    hamburger.addEventListener("click", function() {
        // Toggle the active class on the hamburger and nav-links container
        hamburger.classList.toggle("active");
        navLinksContainer.classList.toggle("active");
    });
});




document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");
    console.log('Collapsible elements found:', coll.length);

    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            console.log('Collapsible clicked:', this);

            this.classList.toggle("active");
            var content = this.nextElementSibling;
            console.log('Content element:', content);

            var isExpanded = this.classList.contains("active");
            this.setAttribute("aria-expanded", isExpanded);
            
            var chevron = this.querySelector(".chevron");
            console.log('Chevron element:', chevron);

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

// JavaScript for FAQ toggle functionality
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const faqItem = item.parentElement;
        faqItem.classList.toggle('active');
    });
});
