// ===== CUSTOM CURSOR =====
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorFollower.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorFollower.style.opacity = '0';
});

// Hover effect on links and buttons
const links = document.querySelectorAll('a, button, .project-card, .skill-item');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// ===== LOADER =====
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').classList.add('hidden');
    }, 1500);
});

// ===== NAVIGATION =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active link on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    if (document.documentElement.hasAttribute('data-theme')) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
});

// ===== SKILLS ANIMATION ON SCROLL =====
const skillItems = document.querySelectorAll('.skill-item');

function animateSkills() {
    skillItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const itemBottom = item.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (itemTop < windowHeight * 0.8 && itemBottom > 0) {
            item.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// ===== PROJECT CARDS PARALLAX =====
const projectCards = document.querySelectorAll('.project-card');

window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    projectCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - cardCenterX) / 20;
        const deltaY = (e.clientY - cardCenterY) / 20;
        
        if (Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) {
            card.style.transform = `translateY(-8px) rotateX(${deltaY * 0.5}deg) rotateY(${deltaX * 0.5}deg)`;
        }
    });
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Sending message...', 'info');
    
    setTimeout(() => {
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
    }, 2000);
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showNotification(message, type) {
    // Remove existing notification
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ===== PARALLAX EFFECT ON HERO SHAPES =====
const shapes = document.querySelectorAll('.shape');

window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20;
        shape.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
    });
});

// ===== TYPEWRITER EFFECT FOR HERO SUBTITLE (OPTIONAL) =====
const subtitle = document.querySelector('.hero-subtitle');
const originalText = subtitle.textContent;
subtitle.textContent = '';

let i = 0;
function typeWriter() {
    if (i < originalText.length) {
        subtitle.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}

// Start typewriter when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 2000);
});

// ===== COUNT-UP ANIMATION FOR STATS =====
const statNumbers = document.querySelectorAll('.stat-number');

function animateStats() {
    statNumbers.forEach(stat => {
        const target = stat.textContent;
        if (target.includes('+')) {
            const num = parseInt(target);
            let current = 0;
            const increment = num / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= num) {
                    stat.textContent = target;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + '+';
                }
            }, 20);
        }
    });
}

// Trigger stats animation when hero section is in view
const heroSection = document.querySelector('.hero');
let statsAnimated = false;

window.addEventListener('scroll', () => {
    const heroTop = heroSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (heroTop < windowHeight * 0.8 && !statsAnimated) {
        animateStats();
        statsAnimated = true;
    }
});

// ===== LAZY LOADING FOR PROJECT IMAGES =====
const projectImages = document.querySelectorAll('.project-image img');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            imageObserver.unobserve(img);
        }
    });
});

projectImages.forEach(img => {
    imageObserver.observe(img);
});

// ===== SCROLL REVEAL ANIMATIONS =====
const revealElements = document.querySelectorAll('.project-card, .skill-category, .contact-card, .about-content');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease';
    revealObserver.observe(el);
});
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});
// ===== FLOATING PARTICLES THAT REACT TO MOUSE =====
class ParticleNetwork {
    constructor() {
        this.canvas = document.getElementById('particle-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.mouseRadius = 150;
        
        this.init();
        this.animate();
        this.addEventListeners();
    }
    
    init() {
        this.resize();
        this.createParticles();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createParticles() {
        const particleCount = Math.floor((this.canvas.width * this.canvas.height) / 8000);
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 3 + 1,
                baseX: 0,
                baseY: 0
            });
        }
    }
    
    addEventListeners() {
        window.addEventListener('resize', () => {
            this.resize();
            this.particles = [];
            this.createParticles();
        });
        
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });
        
        document.addEventListener('mouseleave', () => {
            this.mouseX = -1000;
            this.mouseY = -1000;
        });
    }
    
    drawParticles() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Get theme color
        const isLight = document.documentElement.hasAttribute('data-theme');
        const particleColor = isLight ? '99, 102, 241' : '99, 102, 241';
        
        this.particles.forEach(particle => {
            // Mouse repulsion effect
            const dx = this.mouseX - particle.x;
            const dy = this.mouseY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < this.mouseRadius) {
                const angle = Math.atan2(dy, dx);
                const force = (this.mouseRadius - distance) / this.mouseRadius;
                
                particle.x -= Math.cos(angle) * force * 2;
                particle.y -= Math.sin(angle) * force * 2;
            }
            
            // Normal movement
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around screen
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(${particleColor}, 0.6)`;
            this.ctx.fill();
            
            // Draw connections
            this.drawConnections(particle);
        });
    }
    
    drawConnections(particle) {
        const connectionDistance = 100;
        
        this.particles.forEach(otherParticle => {
            if (particle === otherParticle) return;
            
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < connectionDistance) {
                const opacity = (1 - distance / connectionDistance) * 0.2;
                this.ctx.beginPath();
                this.ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
                this.ctx.lineWidth = 1;
                this.ctx.moveTo(particle.x, particle.y);
                this.ctx.lineTo(otherParticle.x, otherParticle.y);
                this.ctx.stroke();
            }
        });
    }
    
    animate() {
        this.drawParticles();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize particles when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Your existing code...
    
    // Add this line at the end:
    new ParticleNetwork();
});