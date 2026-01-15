document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.header__menu-btn');
    const nav = document.querySelector('.header__nav');

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
            menuBtn.classList.toggle('is-active');
        });
    }

    // Smooth Scroll for Anchor Links (Optional if css not supported)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close menu on mobile click
                if (window.innerWidth <= 768) {
                    nav.style.display = 'none';
                    menuBtn.classList.remove('is-active');
                }
            }
        });
    });

    // Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px', // Trigger a bit before the element is fully in view
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Target elements
    const fadeElements = document.querySelectorAll('.js-fade-up, .js-fade-up-stagger');
    fadeElements.forEach(el => observer.observe(el));
});
