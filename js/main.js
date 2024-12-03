//js/main.js

function toggleMobileMenu() {
    const navLinksContainer = document.querySelector('.nav-links-container');
    const hamburger = document.querySelector('.hamburger');

    navLinksContainer.classList.toggle('active');
    hamburger.classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", function() {
    const collapsibleButtons = document.querySelectorAll(".collapsible");
    const careCategories = document.querySelectorAll(".care-category");

    collapsibleButtons.forEach(function(button) {
        button.addEventListener("click", function() {
          
            const contentId = this.getAttribute("aria-controls");
            const content = document.getElementById(contentId);

    
            const isActive = this.classList.contains("active");

       
            collapsibleButtons.forEach(btn => btn.classList.remove("active"));
            careCategories.forEach(cat => cat.classList.remove("active"));

            if (!isActive) {
              
                this.classList.add("active");
                content.classList.add("active");
            }
        });
    });
});



document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const faqItem = item.parentElement;
        faqItem.classList.toggle('active');
    });
});
