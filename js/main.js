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


//index.html
