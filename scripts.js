// JavaScript for interactive pop-ups and smooth scroll effects
document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling for all navigation links
    const navLinks = document.querySelectorAll('.nav ul li a');
   
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionID = this.getAttribute('href');
            document.querySelector(sectionID).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Interactive pop-up on email and phone number
    const emailLink = document.getElementById('email-link');
    const phoneLink = document.getElementById('phone-link');

    emailLink.addEventListener('click', function() {
        alert('You clicked on the email: your.email@example.com');
    });

    phoneLink.addEventListener('click', function() {
        alert('You clicked on the phone number: (123) 456-7890');
    });

});