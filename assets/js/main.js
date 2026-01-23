document.addEventListener('DOMContentLoaded', () => {
    // Loader
    const loader = document.getElementById('loader');
    if (loader) {
        window.addEventListener('load', () => {
            // Add a small delay for better visual experience
            setTimeout(() => {
                loader.classList.add('loaded');
            }, 800);
        });
    }

    // Lazy Load Image Fade-in
    const lazyImages = document.querySelectorAll('.lazy-load');
    lazyImages.forEach(img => {
        if (img.complete) {
            img.classList.add('is-loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('is-loaded');
            });
        }
    });

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

    // Gallery Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery__item');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.classList.remove('hide');
                        // Reset animation slightly to re-trigger if needed, or simply show
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    } else {
                        item.classList.add('hide');
                    }
                });
            });
        });
    }

    // Modal (Lightbox)
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const closeBtn = document.querySelector('.modal__close');

    if (modal && modalImg) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                if (img) {
                    modal.style.display = 'block';
                    modalImg.src = img.src;
                }
            });
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }

        // Close on outside click
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('is-active');
            } else {
                backToTopBtn.classList.remove('is-active');
            }
        });
    }
});
