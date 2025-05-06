// Smooth scrolling for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 80;
  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector('.nav-links a[href="#' + section.id + '"]');
      if (activeLink) activeLink.classList.add('active');
    }
  });
});

// Prevent contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out!');
  });
}

// Close mobile menu when a link is clicked
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const navToggle = document.getElementById('nav-toggle');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Close the mobile menu
            navToggle.checked = false;
        });
    });
}); 