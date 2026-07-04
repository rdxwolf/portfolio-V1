    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    // Toggle the menu when the hamburger is clicked
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        

        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-xmark');
    });

    // Close the menu when a link is clicked
    const links = document.querySelectorAll('#nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.classList.add('fa-bars');
            menuIcon.classList.remove('fa-xmark');
        });
    });