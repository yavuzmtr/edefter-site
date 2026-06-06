// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
    }
});

// Form Submission
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.textContent = '⏳ Gönderiliyor...';
        submitBtn.disabled = true;
        
        // Form FormSubmit'e gönderilecek, sayfa yenilendiğinde mesaj göster
    });
}

// URL'de success parametresi varsa mesaj göster
window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const hash = window.location.hash;
    
    if (hash === '#contact' && urlParams.get('success') !== null) {
        alert('✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
        // URL'i temizle
        window.history.replaceState({}, document.title, window.location.pathname + '#contact');
    }
});

// Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate feature cards
document.querySelectorAll('.feature-card, .step, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Lightbox Functions
function openLightbox(imageSrc, caption) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    lightbox.classList.add('active');
    lightboxImg.src = imageSrc;
    lightboxCaption.textContent = caption;
    document.body.style.overflow = 'hidden'; // Sayfa scroll'unu engelle
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // Sayfa scroll'unu aç
}

// ESC tuşu ile lightbox'ı kapat
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});
