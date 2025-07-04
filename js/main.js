// JavaScript extracted from index1.html

// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() {
    window.dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-LSY3CJL7EP');

// Microsoft Clarity
(function(c, l, a, r, i, t, y) {
    c[a] = c[a] || function() {
        (c[a].q = c[a].q || []).push(arguments)
    };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
})(window, document, "clarity", "script", "rwf4mmr8a6");

// URL parameter preservation script
!function() {
    function c(t, r) {
        let e = r.indexOf("#"),
            n = e === -1 ? r : r.substring(0, e),
            o = e === -1 ? "" : r.substring(e),
            a = n.indexOf("?");
        if (a === -1) return n + t + o;
        let d = new URLSearchParams(t),
            h = n.substring(a + 1),
            s = new URLSearchParams(h);
        for (let [i, m] of d) s.has(i) || s.append(i, m);
        return n.substring(0, a + 1) + s.toString() + o
    }
    
    var l = 'div#main a[href^="#"],div#main a[href^="/"],div#main a[href^="."]',
        u = "div#main a[data-framer-preserve-params]",
        f, g = (f = document.currentScript) == null ? void 0 : f.hasAttribute("data-preserve-internal-params");
    
    if (window.location.search && !/bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(navigator.userAgent)) {
        let t = document.querySelectorAll(g ? `${l},${u}` : u);
        for (let r of t) {
            let e = c(window.location.search, r.href);
            r.setAttribute("href", e);
        }
    }
}();

// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation first
    initializeNavigation();
    
    // Then set up scroll listener
    window.addEventListener('scroll', updateActiveNavItem);
    
    // Ensure sidebar elements are visible first
    ensureSidebarVisibility();
    
    // Other initializations...
    setTimeout(() => {
        initializeGSAP();
        initializeScrollEffects();
        initializeMobileMenu();
        initializeStatusButton();
    }, 100);
});

// Initialize GSAP and register ScrollTrigger
function initializeGSAP() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Set initial states ONLY for main content elements, not sidebar
    gsap.set('.section', { opacity: 0, y: 50 });
    gsap.set('.project-card', { opacity: 0, y: 30, scale: 0.95 });
    gsap.set('.experience-card', { opacity: 0, x: -30 });
    gsap.set('.tech-item', { opacity: 0, y: 20, scale: 0.9 });
    gsap.set('.tag', { opacity: 0, scale: 0.8 });
    gsap.set('.testimonial-card', { opacity: 0, y: 40 });
    gsap.set('.publication-item', { opacity: 0, x: 20 });
    
    // DON'T set initial states for sidebar elements - let them be visible by default
    
    // Sidebar entrance animation with delay to ensure elements are ready
    gsap.timeline({ delay: 0.2 })
        .from('.profile-image', { 
            duration: 0.8, 
            scale: 0.8, 
            opacity: 0, 
            ease: 'back.out(1.7)' 
        })
        .from('.profile-name', { 
            duration: 0.6, 
            y: 20, 
            opacity: 0, 
            ease: 'power2.out' 
        }, '-=0.4')
        .from('.profile-title', { 
            duration: 0.6, 
            y: 15, 
            opacity: 0, 
            ease: 'power2.out' 
        }, '-=0.3')
        .from('.status', { 
            duration: 0.6, 
            scale: 0.9, 
            opacity: 0, 
            ease: 'back.out(1.7)' 
        }, '-=0.2')
        .from('.social-link', { 
            duration: 0.5, 
            y: 20, 
            opacity: 0, 
            stagger: 0.1, 
            ease: 'power2.out' 
        }, '-=0.3')
        .from('.nav-item', { 
            duration: 0.4, 
            x: -20, 
            opacity: 0, 
            stagger: 0.05, 
            ease: 'power2.out' 
        }, '-=0.2');
    
    // Status dot animation
    gsap.to('.status-dot', {
        duration: 2,
        scale: 1.2,
        opacity: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
    });
    
    // Main content animations
    initializeScrollAnimations();
}

// Enhanced scroll animations with GSAP
function initializeScrollAnimations() {
    // Section animations
    gsap.utils.toArray('.section').forEach((section, index) => {
        gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // Project cards with staggered animation
    gsap.to('.project-card', {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.project-card',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Tech stack grid animation
    gsap.to('.tech-item', {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: {
            amount: 0.8,
            grid: 'auto',
            from: 'start'
        },
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.tech-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Tags animation
    gsap.to('.tag', {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.tags-container',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Experience cards slide in from left
    gsap.to('.experience-card', {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.experience-card',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Testimonial cards
    gsap.to('.testimonial-card', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.testimonial-card',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Publication items slide in from right
    gsap.to('.publication-item', {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.publication-item',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Form animation
    gsap.from('.form', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.form',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Contact info animation
    gsap.from('.contact-info', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
}

// Enhanced hover animations with GSAP
function initializeHoverAnimations() {
    // Project card hover effects
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -8,
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // Tech item hover effects
    document.querySelectorAll('.tech-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                y: -5,
                scale: 1.05,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                y: 0,
                scale: 1,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
    });
    
    // Social link hover effects
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                y: -3,
                scale: 1.1,
                duration: 0.2,
                ease: 'back.out(1.7)'
            });
        });
        
        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                y: 0,
                scale: 1,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
    });
    
    // Button hover effects
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                y: -2,
                scale: 1.02,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                y: 0,
                scale: 1,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
    });
    
    // Tag hover effects
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            gsap.to(tag, {
                scale: 1.05,
                duration: 0.2,
                ease: 'back.out(1.7)'
            });
        });
        
        tag.addEventListener('mouseleave', () => {
            gsap.to(tag, {
                scale: 1,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
    });
}

// Enhanced click handling with animation
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Animate the clicked item
                gsap.timeline()
                    .to(this, { scale: 0.95, duration: 0.1 })
                    .to(this, { scale: 1, duration: 0.1 });
                
                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active state immediately
                navItems.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Home button functionality
    const homeButton = document.querySelector('.home-button');
    if (homeButton) {
        homeButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Animate home button
            gsap.timeline()
                .to(this, { scale: 0.9, duration: 0.1 })
                .to(this, { scale: 1, duration: 0.2, ease: 'back.out(1.7)' });
            
            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Set first nav item as active
            navItems.forEach(nav => nav.classList.remove('active'));
            if (navItems[0]) navItems[0].classList.add('active');
        });
    }
}

// Scroll effects and animations
function initializeScrollEffects() {
    // Initialize hover animations
    initializeHoverAnimations();
    
    // Parallax effect for profile image
    gsap.to('.profile-image', {
        y: -20,
        ease: 'none',
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
    });
    
    // Navbar active state animation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
            
            // Animate the active state
            gsap.from(this, {
                scale: 0.95,
                duration: 0.2,
                ease: 'back.out(1.7)'
            });
        });
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const navItems = document.querySelectorAll('.nav-item');
    
    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.style.cssText = `
        position: fixed;
        top: 1rem;
        left: 1rem;
        z-index: 200;
        background: var(--color-background);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-sm);
        padding: 0.75rem;
        font-size: 1.25rem;
        cursor: pointer;
        display: none;
        transition: all var(--transition-normal);
    `;
    
    document.body.appendChild(mobileMenuBtn);
    
    // Show mobile menu button on small screens
    function checkScreenSize() {
        if (window.innerWidth <= 1023) {
            mobileMenuBtn.style.display = 'block';
        } else {
            mobileMenuBtn.style.display = 'none';
            sidebar.classList.remove('open');
        }
    }
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        mobileMenuBtn.innerHTML = sidebar.classList.contains('open') ? '✕' : '☰';
    });
    
    // Close mobile menu when clicking nav items
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 1023) {
                sidebar.classList.remove('open');
                mobileMenuBtn.innerHTML = '☰';
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1023 && 
            !sidebar.contains(e.target) && 
            !mobileMenuBtn.contains(e.target) &&
            sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            mobileMenuBtn.innerHTML = '☰';
        }
    });
}

// Download CV functionality
function downloadCV() {
    // You can replace this with the actual path to your CV file
    const cvUrl = 'assets/Julian_Bartosz_CV.pdf'; // Update this path to your actual CV file
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Julian_Bartosz_CV.pdf';
    
    // Animate the download button
    const button = document.querySelector('.download-cv-btn');
    if (button) {
        gsap.timeline()
            .to(button, {
                scale: 0.95,
                duration: 0.1,
                ease: 'power2.out'
            })
            .to(button, {
                scale: 1.02,
                duration: 0.2,
                ease: 'back.out(1.7)'
            })
            .to(button, {
                scale: 1,
                duration: 0.1,
                ease: 'power2.out'
            });
    }
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional: Track download event (for analytics)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'download', {
            event_category: 'CV',
            event_label: 'Julian_Bartosz_CV.pdf'
        });
    }
}

// Copy email functionality with enhanced animation
function copyEmail() {
    const email = 'bartoszjul@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        const button = document.querySelector('.copy-button');
        const originalText = button.textContent;
        
        // Animate button feedback
        gsap.timeline()
            .to(button, {
                scale: 0.95,
                duration: 0.1,
                ease: 'power2.out'
            })
            .to(button, {
                scale: 1.05,
                backgroundColor: 'var(--color-primary)',
                color: 'white',
                duration: 0.2,
                ease: 'back.out(1.7)',
                onComplete: () => {
                    button.textContent = 'Copied!';
                }
            })
            .to(button, {
                scale: 1,
                duration: 0.1,
                ease: 'power2.out'
            });
        
        setTimeout(() => {
            gsap.to(button, {
                backgroundColor: '',
                color: '',
                duration: 0.3,
                ease: 'power2.out',
                onComplete: () => {
                    button.textContent = originalText;
                }
            });
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy email: ', err);
        alert(`Email: ${email}`);
    });
}

// Form submission handler with enhanced animations
function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Animate button loading state
    gsap.timeline()
        .to(submitBtn, {
            scale: 0.98,
            duration: 0.1,
            ease: 'power2.out'
        })
        .to(submitBtn, {
            scale: 1,
            duration: 0.1,
            ease: 'power2.out',
            onComplete: () => {
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
            }
        });
    
    // Simulate API call
    setTimeout(() => {
        gsap.to(submitBtn, {
            backgroundColor: '#22c55e',
            scale: 1.02,
            duration: 0.3,
            ease: 'back.out(1.7)',
            onComplete: () => {
                submitBtn.textContent = 'Message Sent!';
                event.target.reset();
            }
        });
        
        // Reset button after delay
        setTimeout(() => {
            gsap.to(submitBtn, {
                backgroundColor: '',
                scale: 1,
                duration: 0.3,
                ease: 'power2.out',
                onComplete: () => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
            });
        }, 3000);
    }, 1000);
}

// Smooth scrolling for anchor links
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

// Enhanced loading animation
window.addEventListener('load', () => {
    gsap.from('body', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
    });
});

// Parallax effect for profile image
function initializeParallax() {
    const profileImage = document.querySelector('.profile-image');
    if (!profileImage) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.1;
        profileImage.style.transform = `translateY(${parallax}px)`;
    });
}

// Initialize parallax effect
initializeParallax();

// Add hover effects for interactive elements
document.querySelectorAll('.social-link, .nav-item, .btn, .tag').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const sidebar = document.getElementById('sidebar');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            if (mobileMenuBtn) mobileMenuBtn.innerHTML = '☰';
        }
    }
});

// Add focus management for accessibility
document.querySelectorAll('.nav-item, .social-link, .btn').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--color-primary)';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = '';
        this.style.outlineOffset = '';
    });
});

// Add this new function to ensure sidebar visibility
function ensureSidebarVisibility() {
    const sidebarElements = document.querySelectorAll('.sidebar .profile-image, .sidebar .profile-name, .sidebar .profile-title, .sidebar .status, .sidebar .social-link, .sidebar .nav-item');
    
    sidebarElements.forEach(element => {
        element.style.opacity = '1';
        element.style.visibility = 'visible';
    });
}

// Replace your updateActiveNavItem function with this enhanced version:

function updateActiveNavItem() {
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-item');
    
    let currentSection = '';
    const scrollPos = window.scrollY + 200;
    
    // Find the current section
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Update active states
    navItems.forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href');
        if (href === `#${currentSection}`) {
            item.classList.add('active');
            
            // Add a subtle animation when becoming active
            gsap.fromTo(item, 
                { scale: 0.95 },
                { scale: 1, duration: 0.2, ease: 'back.out(1.7)' }
            );
        }
    });
}

// Add scroll listener
window.addEventListener('scroll', updateActiveNavItem);

// Add this function to enhance the status button animation:

function initializeStatusButton() {
    const statusButton = document.querySelector('.status-button');
    
    if (!statusButton) return;
    
    statusButton.addEventListener('mouseenter', function() {
        // Add GSAP animation for smoother effect
        gsap.timeline()
            .to('.default-text', {
                opacity: 0,
                y: -10,
                duration: 0.2,
                ease: 'power2.out'
            })
            .to('.hover-text', {
                opacity: 1,
                y: 0,
                duration: 0.2,
                ease: 'power2.out'
            }, 0.1)
            .to('.status-dot', {
                backgroundColor: '#ff6928',
                scale: 1.1,
                duration: 0.3,
                ease: 'back.out(1.7)'
            }, 0);
    });
    
    statusButton.addEventListener('mouseleave', function() {
        gsap.timeline()
            .to('.hover-text', {
                opacity: 0,
                y: 10,
                duration: 0.2,
                ease: 'power2.out'
            })
            .to('.default-text', {
                opacity: 1,
                y: 0,
                duration: 0.2,
                ease: 'power2.out'
            }, 0.1)
            .to('.status-dot', {
                backgroundColor: '#c2e73d',
                scale: 1,
                duration: 0.3,
                ease: 'back.out(1.7)'
            }, 0);
    });
    
    // Smooth scroll to contact section on click
    statusButton.addEventListener('click', function(e) {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}