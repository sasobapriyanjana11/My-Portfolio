
// =========================== Toggle Menu Icon ==========================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ========================== Sections Active Link ========================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offSet = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offSet && top < offSet + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
                if (activeLink) { 
                    activeLink.classList.add('active');
                }
            });
        }
    });

    // =========== Sticky Navbar =====================
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // =========== Remove Toggle Icon and Navbar on Scroll =====================
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// =========== Scroll Reveal Animations =====================
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .services-container, .portfolio .box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-image', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ========================== Typewriter Effect (Optional) ========================
const typed = new Typed('.auto-type', {
    strings: ['Web Developer', 'UI/UX Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
});
