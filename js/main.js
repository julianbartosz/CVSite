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
    
    // Set up scroll listener
    window.addEventListener('scroll', updateActiveNavItem);
    
    // Add profile image fix
    preventProfileImageScrollEffect();
    
    // Mobile-first initialization
    initializeMobileMenu();
    
    // Add dynamic mobile profile spacing
    adjustMobileProfileSpacing();
    
    setTimeout(() => {
        enhanceSidebarAnimations();
        initializeScrollEffects();
        initializeStatusButton();
        initializeStatusDotAnimationAlternative();
    }, 100);
    
    // Initialize mobile optimizations
    initializeMobileOptimizations();
});

// Function to dynamically adjust mobile profile spacing
function adjustMobileProfileSpacing() {
    if (window.innerWidth <= 1023) {
        const mobileProfileSection = document.querySelector('.mobile-profile-section');
        const mainContent = document.querySelector('.main-content');
        
        if (mobileProfileSection && mainContent) {
            // Wait for the DOM to be fully rendered
            setTimeout(() => {
                const profileHeight = mobileProfileSection.offsetHeight;
                const padding = profileHeight + 20; // Add 20px buffer
                
                mainContent.style.paddingTop = `${padding}px`;
                
                // Store the calculated padding for resize events
                window.mobileProfilePadding = padding;
            }, 100);
        }
    }
}

// Enhanced Mobile Menu functionality with project-focused navigation
function initializeMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
    
    if (!mobileMenuBtn || !mobileMenu || !mobileOverlay) return;

    // Enhanced screen size detection
    function checkScreenSize() {
        const isMobile = window.innerWidth <= 1023;
        
        if (isMobile) {
            mobileMenuBtn.style.display = 'flex';
            document.body.classList.add('mobile-layout');
            // Recalculate mobile profile spacing on resize
            adjustMobileProfileSpacing();
        } else {
            mobileMenuBtn.style.display = 'none';
            mobileMenu.classList.remove('open');
            mobileOverlay.classList.remove('active');
            document.body.classList.remove('mobile-layout');
            document.body.style.overflow = '';
            mobileMenuBtn.innerHTML = '☰';
            mobileMenuBtn.setAttribute('aria-label', 'Open mobile menu');
            
            // Reset main content padding on desktop
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                mainContent.style.paddingTop = '';
            }
        }
    }

    function openMobileMenu() {
        mobileMenu.classList.add('open');
        mobileOverlay.classList.add('active');
        mobileMenuBtn.innerHTML = '✕';
        mobileMenuBtn.setAttribute('aria-label', 'Close mobile menu');
        document.body.style.overflow = 'hidden';
        
        // Focus first menu item for accessibility
        const firstMenuItem = mobileMenu.querySelector('.mobile-menu-item');
        if (firstMenuItem) {
            setTimeout(() => firstMenuItem.focus(), 100);
        }
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('open');
        mobileOverlay.classList.remove('active');
        mobileMenuBtn.innerHTML = '☰';
        mobileMenuBtn.setAttribute('aria-label', 'Open mobile menu');
        document.body.style.overflow = '';
        mobileMenuBtn.focus();
    }

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = mobileMenu.classList.contains('open');
        
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    // Close mobile menu when clicking menu items
    mobileMenuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = item.getAttribute('href');
            
            // Close menu first
            closeMobileMenu();
            
            // Then scroll to section after a brief delay
            setTimeout(() => {
                if (targetSection && targetSection.startsWith('#')) {
                    const section = document.querySelector(targetSection);
                    if (section) {
                        const offset = 200; // Account for mobile profile section
                        const targetPosition = section.offsetTop - offset;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            }, 100);
        });
    });

    // Close mobile menu when clicking overlay
    mobileOverlay.addEventListener('click', closeMobileMenu);

    // Enhanced keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
            closeMobileMenu();
        }
        
        // Tab trapping in mobile menu
        if (mobileMenu.classList.contains('open') && e.key === 'Tab') {
            const focusableElements = mobileMenu.querySelectorAll(
                'a, button, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    });

    // Debounced resize handler for better performance
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(checkScreenSize, 150);
    });
    
    checkScreenSize();

    // Store references for cleanup
    window.mobileMenuControls = {
        openMobileMenu,
        closeMobileMenu,
        mobileMenuBtn,
        mobileOverlay
    };
}

// Mobile-specific optimizations
function initializeMobileOptimizations() {
    // Prevent zoom on input focus for iOS
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            if (window.innerWidth <= 768) {
                // Temporarily set font-size to 16px to prevent zoom
                this.style.fontSize = '16px';
            }
        });
        
        input.addEventListener('blur', function() {
            // Reset font-size
            this.style.fontSize = '';
        });
    });
    
    // Optimize touch interactions
    const touchElements = document.querySelectorAll('.mobile-menu-item, .status-button, .download-cv-btn, .social-link');
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        }, { passive: true });
        
        element.addEventListener('touchend', function() {
            this.style.transform = '';
        }, { passive: true });
    });
    
    initializeSwipeGestures();
}

// Swipe gesture support for mobile menu
function initializeSwipeGestures() {
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    
    document.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    }, { passive: true });
    
    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
    }, { passive: true });
    
    document.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        
        const diffX = currentX - startX;
        const threshold = 100;
        
        if (window.innerWidth <= 1023) {
            const sidebar = document.getElementById('sidebar');
            const mobileControls = window.mobileMenuControls;
            
            if (diffX > threshold && startX < 50 && !sidebar.classList.contains('open')) {
                mobileControls.openMobileMenu();
            }
            else if (diffX < -threshold && sidebar.classList.contains('open')) {
                mobileControls.closeMobileMenu();
            }
        }
        
        startX = 0;
        currentX = 0;
    }, { passive: true });
}

// Enhanced navigation with mobile support and proper scrolling
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Animate the clicked item
                if (window.innerWidth <= 768) {
                    gsap.timeline()
                        .to(this, { scale: 0.95, duration: 0.05 })
                        .to(this, { scale: 1, duration: 0.1 });
                } else {
                    gsap.timeline()
                        .to(this, { scale: 0.95, duration: 0.1 })
                        .to(this, { scale: 1, duration: 0.1 });
                }
                
                // Calculate offset based on screen size
                const offset = window.innerWidth <= 1023 ? 200 : 0; // Account for mobile profile
                const targetPosition = targetSection.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
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
            
            const duration = window.innerWidth <= 768 ? 0.15 : 0.2;
            gsap.timeline()
                .to(this, { scale: 0.9, duration: duration * 0.5 })
                .to(this, { scale: 1, duration: duration, ease: 'back.out(1.7)' });
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            navItems.forEach(nav => nav.classList.remove('active'));
            if (navItems[0]) navItems[0].classList.add('active');
        });
    }
}

// Enhanced scroll animations with GSAP
function initializeScrollAnimations() {
    gsap.utils.toArray('.case-study-item').forEach((item, index) => {
        gsap.set(item, { opacity: 0, y: 60, scale: 0.95 });
        
        gsap.to(item, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            delay: index * 0.2,
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    gsap.utils.toArray('.section').forEach((section, index) => {
        gsap.set(section, { opacity: 0, y: 50 });
        
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
    
    // Additional animations for other elements...
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
}

// Enhanced hover animations with GSAP
function initializeHoverAnimations() {
    document.querySelectorAll('.tech-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                borderColor: '#fd7338',
                duration: 0.2,
                ease: 'power2.out'
            });
            
            const techName = item.querySelector('.tech-name');
            if (techName) {
                gsap.to(techName, {
                    color: '#fd7338',
                    duration: 0.2,
                    ease: 'power2.out'
                });
            }
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                borderColor: 'var(--color-light-grey)',
                duration: 0.2,
                ease: 'power2.out'
            });
            
            const techName = item.querySelector('.tech-name');
            if (techName) {
                gsap.to(techName, {
                    color: 'rgb(118, 118, 118)',
                    duration: 0.2,
                    ease: 'power2.out'
                });
            }
        });
    });
    
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            gsap.to(tag, {
                borderColor: '#fd7338',
                color: '#fd7338',
                duration: 0,
                ease: 'power2.out'
            });
        });
        
        tag.addEventListener('mouseleave', () => {
            gsap.to(tag, {
                borderColor: 'var(--color-light-grey)',
                color: 'grey',
                duration: 0,
                ease: 'power2.out'
            });
        });
    });
}

function initializeScrollEffects() {
    initializeHoverAnimations();
    
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            gsap.from(this, {
                scale: 0.95,
                duration: 0.2,
                ease: 'back.out(1.7)'
            });
        });
    });
}

// Enhanced CV download with mobile optimization
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'cv/Julian_Bartosz_CV.pdf';
    link.download = 'Julian_Bartosz_CV.pdf';
    
    const button = document.querySelector('.download-cv-btn') || document.querySelector('.mobile-menu-btn-primary');
    if (button) {
        const isMobile = window.innerWidth <= 768;
        const duration = isMobile ? 0.15 : 0.2;
        
        gsap.timeline()
            .to(button, {
                scale: 0.95,
                duration: duration * 0.5,
                ease: 'power2.out'
            })
            .to(button, {
                scale: 1.02,
                duration: duration,
                ease: 'back.out(1.7)'
            })
            .to(button, {
                scale: 1,
                duration: duration * 0.5,
                ease: 'power2.out'
            });
    }
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    if (typeof gtag !== 'undefined') {
        gtag('event', 'download', {
            event_category: 'CV',
            event_label: 'Julian_Bartosz_CV.pdf'
        });
    }
}

// Enhanced copy email functionality
function copyEmail() {
    const email = 'bartoszjul@gmail.com';
    
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(() => {
            showCopyFeedback();
        }).catch(() => {
            fallbackCopyEmail(email);
        });
    } else {
        fallbackCopyEmail(email);
    }
    
    function showCopyFeedback() {
        const button = document.querySelector('.copy-button');
        const originalText = button.textContent;
        const isMobile = window.innerWidth <= 768;
        const duration = isMobile ? 0.15 : 0.2;
        
        gsap.timeline()
            .to(button, {
                scale: 0.95,
                duration: duration * 0.5,
                ease: 'power2.out'
            })
            .to(button, {
                scale: 1.05,
                backgroundColor: 'var(--color-primary)',
                color: 'white',
                duration: duration,
                ease: 'back.out(1.7)',
                onComplete: () => {
                    button.textContent = 'Copied!';
                }
            })
            .to(button, {
                scale: 1,
                duration: duration * 0.5,
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
    }
    
    function fallbackCopyEmail(email) {
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            showCopyFeedback();
        } catch (err) {
            alert(`Email: ${email}`);
        }
        
        document.body.removeChild(textArea);
    }
}

// Enhanced form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    const isMobile = window.innerWidth <= 768;
    const duration = isMobile ? 0.15 : 0.2;
    
    gsap.timeline()
        .to(submitBtn, {
            scale: 0.98,
            duration: duration * 0.5,
            ease: 'power2.out'
        })
        .to(submitBtn, {
            scale: 1,
            duration: duration * 0.5,
            ease: 'power2.out',
            onComplete: () => {
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
            }
        });
    
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

// Enhanced updateActiveNavItem function with mobile support
function updateActiveNavItem() {
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-item');
    
    let currentSection = '';
    const offset = window.innerWidth <= 1023 ? 220 : 200; // Account for mobile profile
    const scrollPos = window.scrollY + offset;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href');
        if (href === `#${currentSection}`) {
            item.classList.add('active');
            
            // Only animate on desktop
            if (window.innerWidth > 1023) {
                gsap.fromTo(item, 
                    { scale: 0.95 },
                    { scale: 1, duration: 0.2, ease: 'back.out(1.7)' }
                );
            }
        }
    });
}

function initializeStatusButton() {
    const statusButton = document.querySelector('.status-button');
    
    if (!statusButton) return;
    
    statusButton.addEventListener('mouseenter', function() {
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
            }, 0.1);
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
            }, 0.1);
    });
    
    statusButton.addEventListener('click', function(e) {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const offset = window.innerWidth <= 768 ? 80 : 0;
            const targetPosition = contactSection.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
}

function enhanceSidebarAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.set('.section', { opacity: 0, y: 50 });
    gsap.set('.tech-item', { opacity: 0, y: 20, scale: 0.9 });
    
    // Fix: Don't hide tags on mobile - only hide them on desktop
    if (window.innerWidth > 1023) {
        gsap.set('.tag', { opacity: 0, scale: 0.8 });
    } else {
        // Ensure tags are visible on mobile
        gsap.set('.tag', { opacity: 1, scale: 1 });
    }
    
    gsap.set([
        '.profile-name', '.profile-title', '.profile-location', 
        '.status-button', '.btn-secondary', '.download-cv-btn', 
        '.social-link', '.floating-nav-container', 
        '.nav-item', '.home-button'
    ], { autoAlpha: 0 });
    
    const tl = gsap.timeline({ delay: 0.3 });
    
    tl.fromTo('.profile-image', 
        { scale: 0.9, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 0.6, ease: 'back.out(1.4)' }
    )
    .fromTo('.profile-name', 
        { x: 30, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.4'
    )
    .fromTo('.profile-title', 
        { x: 30, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
    )
    .fromTo('.profile-location', 
        { x: 30, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
    )
    .fromTo('.status-button', 
        { x: 70, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.3, ease: 'power2.out' },
        '-=1'
    )
    .fromTo('.btn-secondary', 
        { x: 70, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.3, ease: 'power2.out' },
        '-=0.9'
    )
    .fromTo('.social-link', 
        { x: 70, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.3, stagger: 0.05, ease: 'power2.out' },
        '-=0.9'
    )
    .fromTo('.floating-nav-container', 
        { scale: 0.95, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.6'
    )
    .fromTo('.nav-item', 
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.3, stagger: 0.1, ease: 'power2.out' },
        '-=0.3'
    )
    .fromTo('.home-button', 
        { scale: 0.8, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 0.4, ease: 'back.out(1.7)' },
        '-=0.2'
    );

    // Animate content sections on scroll
    gsap.utils.toArray('.section').forEach(section => {
        gsap.fromTo(section, 
            { opacity: 0, y: 50 },
            {
                opacity: 1, 
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // Animate tags on desktop only
    if (window.innerWidth > 1023) {
        gsap.utils.toArray('.tag').forEach((tag, index) => {
            gsap.fromTo(tag,
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                    delay: index * 0.02,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: '.tags-container',
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
    }

    // Animate tech items
    gsap.utils.toArray('.tech-item').forEach((item, index) => {
        gsap.fromTo(item,
            { opacity: 0, y: 20, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.4,
                delay: index * 0.03,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
}

function preventProfileImageScrollEffect() {
    if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.vars.targets && 
                (trigger.vars.targets.includes('.profile-image') || 
                 trigger.vars.targets === '.profile-image')) {
                trigger.kill();
            }
        });
    }
    
    window.addEventListener('scroll', function() {
        gsap.set('.profile-image', { clearProps: 'all' });
    });
}

function initializeStatusDotAnimationAlternative() {
    const statusDots = document.querySelectorAll('.status-dot');
    
    if (!statusDots.length) return;
    
    statusDots.forEach(dot => {
        const existingPulse = dot.querySelector('.status-dot-pulse');
        if (existingPulse) {
            existingPulse.remove();
        }
        
        const pulseElement = document.createElement('div');
        pulseElement.className = 'status-dot-pulse';
        pulseElement.style.cssText = `
            position: absolute;
            top: -3px;
            left: -3px;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background-color:rgb(177, 221, 44);
            z-index: 1;
            pointer-events: none;
            transform-origin: center center;
        `;
        
        dot.style.position = 'relative';
        dot.appendChild(pulseElement);
        
        const timeline = gsap.timeline({
            repeat: -1,
            defaults: { ease: "power2.inOut" }
        });
        
        timeline
            .fromTo(pulseElement, 
                { scale: 1.0, opacity: 0.5, },
                { scale: 0.6, opacity: 0.7, duration: 0.5, ease: "power2.in" }
            )
            .to(pulseElement, 
                { scale: 1.4, opacity: 0, duration: 1.3, ease: "power2.out" }
            );
            
        dot.pulseElement = pulseElement;
        dot.pulseTimeline = timeline;
    });
    
    const statusButtons = document.querySelectorAll('.status-button');
    statusButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            const dot = this.querySelector('.status-dot');
            if (!dot || !dot.pulseElement || !dot.pulseTimeline) return;
            
            gsap.to(dot.pulseElement, {
                backgroundColor: 'rgba(255, 105, 40, 0.65)',
                duration: 0.3
            });
            
            dot.pulseTimeline.timeScale(1.3);
        });
        
        button.addEventListener('mouseleave', function() {
            const dot = this.querySelector('.status-dot');
            if (!dot || !dot.pulseElement || !dot.pulseTimeline) return;
            
            gsap.to(dot.pulseElement, {
                backgroundColor: 'rgba(194, 231, 61, 0.65)',
                duration: 0.3
            });
            
            dot.pulseTimeline.timeScale(1);
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = window.innerWidth <= 768 ? 80 : 0;
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
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