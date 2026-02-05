// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    themeToggle.textContent = isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode';
    localStorage.setItem('darkMode', isDarkMode);
});

// Load dark mode preference from localStorage
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
    body.classList.add('dark-mode');
    themeToggle.textContent = 'Toggle Light Mode';
}

// Skill cards flip functionality
const skillCategories = document.querySelectorAll('.skill-category');

skillCategories.forEach(card => {
    card.addEventListener('click', () => {
        // Remove flipped class from all other cards
        skillCategories.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('flipped');
            }
        });

        // Toggle flipped class on clicked card
        card.classList.toggle('flipped');
    });
});

// Simple form validation for contact form
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;

    if (name && email && message) {
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
