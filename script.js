/* ====================
   PORTFOLIO JAVASCRIPT
   Smooth Interactions, Animations & Mobile Navigation
   ==================== */

// ===== DOM Elements =====
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollIndicator = document.querySelector('.scroll-indicator');

// ===== MOBILE NAVIGATION =====
/**
 * Toggle mobile navigation menu
 */
function toggleNavMenu() {
	navMenu.classList.toggle('active');
}

/**
 * Close mobile navigation menu
 */
function closeNavMenu() {
	navMenu.classList.remove('active');
}

// Event Listeners for Mobile Menu
navToggle.addEventListener('click', toggleNavMenu);
navLinks.forEach(link => {
	link.addEventListener('click', closeNavMenu);
});

// ===== NAVBAR SCROLL EFFECT =====
/**
 * Add background effect to navbar when scrolling
 */
window.addEventListener('scroll', () => {
	if (window.scrollY > 50) {
		navbar.classList.add('scrolled');
	} else {
		navbar.classList.remove('scrolled');
	}
});

// ===== SMOOTH SCROLL BEHAVIOR =====
/**
 * Handle smooth scrolling for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		const href = this.getAttribute('href');
		// Only prevent default if it's an internal link
		if (href !== '#' && document.querySelector(href)) {
			e.preventDefault();
			const target = document.querySelector(href);
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	});
});

// ===== SCROLL-TRIGGERED ANIMATIONS =====
/**
 * Intersection Observer for scroll animations
 */
const observerOptions = {
	threshold: 0.15,
	rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
			observer.unobserve(entry.target);
		}
	});
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
	section.style.opacity = '0';
	observer.observe(section);
});

// ===== SCROLL INDICATOR =====
/**
 * Smooth scroll to #about when clicking scroll indicator
 */
if (scrollIndicator) {
	scrollIndicator.addEventListener('click', () => {
		document.querySelector('#about').scrollIntoView({
			behavior: 'smooth'
		});
	});
}

// ===== PARALLAX EFFECT =====
/**
 * Create subtle parallax effect on hero image on scroll
 */
const heroImage = document.querySelector('.image-wrapper');

if (heroImage) {
	window.addEventListener('scroll', () => {
		const scrollY = window.scrollY;
		const heroSection = document.querySelector('.hero');
		const heroRect = heroSection.getBoundingClientRect();
		
		// Only apply parallax while hero is in view
		if (heroRect.bottom > 0) {
			heroImage.style.transform = `translateY(${scrollY * 0.3}px)`;
		}
	});
}

// ===== BUTTON RIPPLE EFFECT =====
/**
 * Add ripple effect to buttons on click
 */
document.querySelectorAll('.btn').forEach(button => {
	button.addEventListener('click', function(e) {
		const ripple = document.createElement('span');
		const rect = this.getBoundingClientRect();
		const size = Math.max(rect.width, rect.height);
		const x = e.clientX - rect.left - size / 2;
		const y = e.clientY - rect.top - size / 2;
		
		ripple.style.width = ripple.style.height = size + 'px';
		ripple.style.left = x + 'px';
		ripple.style.top = y + 'px';
		ripple.classList.add('ripple');
		
		// Add ripple style if not exists
		if (!document.querySelector('style[data-ripple]')) {
			const style = document.createElement('style');
			style.setAttribute('data-ripple', 'true');
			style.textContent = `
				.btn {
					position: relative;
					overflow: hidden;
				}
				.ripple {
					position: absolute;
					border-radius: 50%;
					background: rgba(255, 255, 255, 0.6);
					pointer-events: none;
					animation: ripple-animation 0.6s ease-out;
				}
				@keyframes ripple-animation {
					0% {
						transform: scale(0);
						opacity: 1;
					}
					100% {
						transform: scale(1);
						opacity: 0;
					}
				}
			`;
			document.head.appendChild(style);
		}
		
		this.appendChild(ripple);
		
		setTimeout(() => ripple.remove(), 600);
	});
});

// ===== PROJECT CARD ANIMATION =====
/**
 * Animate project cards on load
 */
document.querySelectorAll('.project-card').forEach((card, index) => {
	card.style.animation = 'none';
	card.style.opacity = '0';
	
	setTimeout(() => {
		card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
	}, 100);
});

// ===== SKILL TAGS ANIMATION =====
/**
 * Stagger animation for skill tags
 */
document.querySelectorAll('.skill-tag').forEach((tag, index) => {
	tag.style.animation = 'none';
	tag.style.opacity = '0';
	tag.style.animation = `fadeInUp 0.4s ease-out ${index * 0.05}s forwards`;
});

// ===== CONTACT FORM HANDLING (Optional) =====
/**
 * If you add a contact form, handle submissions here
 */
document.addEventListener('DOMContentLoaded', () => {
	const contactForm = document.querySelector('form[name="contact"]');
	
	if (contactForm) {
		contactForm.addEventListener('submit', function(e) {
			e.preventDefault();
			
			// Add success feedback
			const submitBtn = this.querySelector('button[type="submit"]');
			const originalText = submitBtn.textContent;
			
			submitBtn.textContent = '✓ Message Sent!';
			submitBtn.style.pointerEvents = 'none';
			
			// Reset after 3 seconds
			setTimeout(() => {
				submitBtn.textContent = originalText;
				submitBtn.style.pointerEvents = 'auto';
				this.reset();
			}, 3000);
		});
	}
});

// ===== TYPING ANIMATION EFFECT (Optional) =====
/**
 * Add typing animation to hero subtitle
 */
function initTypingAnimation() {
	const subtitle = document.querySelector('.hero-subtitle');
	if (!subtitle) return;
	
	const text = subtitle.textContent;
	subtitle.textContent = '';
	let index = 0;
	
	function type() {
		if (index < text.length) {
			subtitle.textContent += text.charAt(index);
			index++;
			setTimeout(type, 50);
		}
	}
	
	// Start typing when page loads
	setTimeout(type, 500);
}

// ===== ACCESSIBILITY IMPROVEMENTS =====
/**
 * Keyboard navigation for nav links
 */
navLinks.forEach((link, index) => {
	link.addEventListener('keydown', (e) => {
		if (e.key === 'ArrowRight') {
			e.preventDefault();
			const nextLink = navLinks[index + 1];
			if (nextLink) nextLink.focus();
		} else if (e.key === 'ArrowLeft') {
			e.preventDefault();
			const prevLink = navLinks[index - 1];
			if (prevLink) prevLink.focus();
		}
	});
});

// ===== PAGE LOAD INITIALIZATION =====
/**
 * Initialize animations on page load
 */
document.addEventListener('DOMContentLoaded', () => {
	// Trigger hero section animation
	const hero = document.querySelector('.hero');
	if (hero) {
		hero.style.opacity = '1';
	}
	
	// Uncomment to enable typing animation
	// initTypingAnimation();
	
	// Log page load
	console.log('Portfolio loaded successfully! 🚀');
});

// ===== PERFORMANCE OPTIMIZATION =====
/**
 * Lazy loading for images (if needed)
 */
if ('IntersectionObserver' in window) {
	const images = document.querySelectorAll('img[loading="lazy"]');
	
	const imageObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const img = entry.target;
				img.src = img.dataset.src;
				img.classList.add('loaded');
				observer.unobserve(img);
			}
		});
	});
	
	images.forEach(img => imageObserver.observe(img));
}

// ===== DARK MODE TOGGLE (Optional) =====
/**
 * Add dark/light mode toggle functionality
 */
function initThemeToggle() {
	// Check for saved theme preference or default to dark
	const theme = localStorage.getItem('theme') || 'dark';
	document.documentElement.setAttribute('data-theme', theme);
}

// Uncomment to initialize theme toggle
// initThemeToggle();

// ===== CONSOLE EASTER EGG =====
/**
 * Fun message in console for recruiters ;)
 */
console.log(
	'%c🎉 Welcome to Léni\'s Portfolio!',
	'font-size: 20px; color: #00d9ff; font-weight: bold;'
);
console.log(
	'%cLet\'s build something amazing together! 💎',
	'font-size: 14px; color: #7c3aed;'
);
console.log(
	'%c📧 Contact: leni.menage@outlook.fr\n📱 Phone: +33 6 16 58 58 06',
	'font-size: 12px; color: #b0b8c4;'
);