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

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('interestForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            crypto: formData.get('crypto'),
            interest: formData.get('interest'),
            timestamp: new Date().toISOString(),
            event: 'Stateless Hack KL'
        };

        // Show loading state
        const submitButton = form.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Submitting...';
        submitButton.disabled = true;

        // Simulate form submission (replace with actual endpoint)
        setTimeout(() => {
            // Reset form
            form.reset();

            // Show success message
            alert('Thank you! We\'ll contact you with deposit instructions once we validate demand.');

            // Close modal
            closeModal();

            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;

            // In a real implementation, you would send data to your backend
            console.log('Form submitted:', data);

            // Example: Send to Google Forms, Typeform, or your own API
            // fetch('/api/register-interest', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(data)
            // });

        }, 2000);
    });
});

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
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Analytics tracking
function trackEvent(eventName, properties = {}) {
    // Replace with your analytics service (Plausible, Google Analytics, etc.)
    console.log('Event tracked:', eventName, properties);

    Example for Google Analytics:
    if (window.gtag) {
        window.gtag('event', eventName, properties);
    }
}

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
