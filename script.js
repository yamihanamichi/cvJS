document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    // Scroll fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Validation de formulaire
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nom = e.target.querySelector('input[type="text"]').value;
        const email = e.target.querySelector('input[type="email"]').value;
        const message = e.target.querySelector('textarea').value;

        if (nom && email && message) {
            formMessage.textContent = 'Message envoyé avec succès !';
            formMessage.style.color = 'green';
            contactForm.reset();
        } else {
            formMessage.textContent = 'Veuillez remplir tous les champs.';
            formMessage.style.color = 'red';
        }
    });

    // Animation de survol des compétences
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            skill.style.transform = 'scale(1.1)';
        });
        skill.addEventListener('mouseleave', () => {
            skill.style.transform = 'scale(1)';
        });
    });
});