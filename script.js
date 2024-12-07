document.addEventListener('DOMContentLoaded', () => {
    // Initialize Rellax for parallax effects
    if (document.querySelector('.rellax')) {
        const rellax = new Rellax('.rellax', {
            speed: -2,
            center: true,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
    }

    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });

    // Smooth scroll functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Logo click handler with smooth scroll
    const logo = document.querySelector('.logo a');
    if (logo) {
        logo.addEventListener('click', function(e) {
            const isHomePage = window.location.pathname === '/' || 
                             window.location.pathname === '/index.html' ||
                             window.location.pathname.endsWith('/');
            
            if (isHomePage) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Contact Form Popup Functionality
    const contactPopup = document.querySelector('.contact-popup');
    const contactButtons = document.querySelectorAll('.main-cta, .cta-fixed-button');
    const closePopup = document.querySelector('.close-popup');

    if (contactPopup && contactButtons && closePopup) {
        // Open popup when clicking contact buttons
        contactButtons.forEach(button => {
            button.addEventListener('click', () => {
                contactPopup.style.display = 'flex';
                setTimeout(() => {
                    contactPopup.style.opacity = '1';
                }, 10);
            });
        });

        // Close popup when clicking close button
        closePopup.addEventListener('click', () => {
            contactPopup.style.opacity = '0';
            setTimeout(() => {
                contactPopup.style.display = 'none';
            }, 300);
        });

        // Close popup when clicking outside
        contactPopup.addEventListener('click', (e) => {
            if (e.target === contactPopup) {
                contactPopup.style.opacity = '0';
                setTimeout(() => {
                    contactPopup.style.display = 'none';
                }, 300);
            }
        });

        // Handle form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                // Add your form submission logic here
                alert('Thank you for your message! We will get back to you soon.');
                contactPopup.style.opacity = '0';
                setTimeout(() => {
                    contactPopup.style.display = 'none';
                    contactForm.reset();
                }, 300);
            });
        }
    }

    // Handle contact page form if it exists
    const contactPageForm = document.getElementById('contactPageForm');
    if (contactPageForm) {
        contactPageForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactPageForm.reset();
        });
    }
});

