// ==================== MENU BURGER MOBILE ====================
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// Ouvrir / Fermer le menu burger
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Changer l'icône burger en X
    const icon = burger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Fermer le menu quand on clique sur un lien
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = burger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// ==================== ANIMATION AU SCROLL ====================
// Observer les éléments pour les animer quand ils apparaissent
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Éléments à animer
const elementsToAnimate = document.querySelectorAll(
    '.section-title, .projet-card, .competence-categorie, .apropos-content, .contact-info, .info-item'
);

elementsToAnimate.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ==================== HEADER SCROLL EFFECT ====================
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// ==================== TYPING EFFECT (Optionnel) ====================
// Si vous voulez un effet de frappe sur le métier, décommentez ci-dessous
/*
const metierElement = document.querySelector('.hero-metier');
const metiers = ['Développeur Web Full-Stack', 'Passionné de Tech', 'Créateur de Solutions Web'];
let metierIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentMetier = metiers[metierIndex];
    
    if (isDeleting) {
        metierElement.textContent = currentMetier.substring(0, charIndex - 1);
        charIndex--;
    } else {
        metierElement.textContent = currentMetier.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentMetier.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }
    
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        metierIndex = (metierIndex + 1) % metiers.length;
        setTimeout(typeEffect, 500);
        return;
    }
    
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

// Décommentez la ligne ci-dessous pour activer l'effet
// typeEffect();
*/

// ==================== ANIMATION COMPTEUR (Optionnel) ====================
// Si vous voulez ajouter des chiffres qui s'animent, décommentez ci-dessous
/*
const counters = document.querySelectorAll('.counter');
const speed = 100;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    };
    
    updateCount();
});
*/

// ==================== SCROLL SMOOTH POUR ANCIENS NAVIGATEURS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== PARTICULES BACKGROUND (Optionnel) ====================
// Effet de particules subtil en arrière-plan, décommentez pour activer
/*
const createParticle = () => {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    const size = Math.random() * 3 + 1;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDuration = Math.random() * 10 + 5 + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    
    document.querySelector('.hero').appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 15000);
};

// Créer des particules périodiquement
setInterval(createParticle, 300);
*/

console.log('🚀 Portfolio prêt ! Tous les scripts sont chargés.');