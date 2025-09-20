// Modal functionality
function openModal() {
    document.getElementById('interestModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('interestModal').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('interestModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
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

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Analytics tracking
function trackEvent(eventName, properties = {}) {
    // Example for Google Analytics:
    if (window.gtag) {
        window.gtag('event', eventName, properties);
    }
}

// Add event listeners for modal triggers and close buttons
document.addEventListener('DOMContentLoaded', function() {
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', openModal);
    });

    // Add event listener for modal close button
    const modalCloseButtons = document.querySelectorAll('.modal-close');
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });

    // Track CTA clicks
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', () => {
            trackEvent('CTA Click', {
                location: 'KL',
                price: '360',
                button_text: button.textContent.trim()
            });
        });
    });
});
