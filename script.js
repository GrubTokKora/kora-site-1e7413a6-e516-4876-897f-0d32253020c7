document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const form = event.target;
            const formMessage = document.getElementById('form-message');
            const submitButton = form.querySelector('button[type="submit"]');

            const name = form.elements['name'].value;
            const email = form.elements['email'].value;
            const message = form.elements['message'].value;
            const recaptchaResponse = grecaptcha.getResponse();

            formMessage.textContent = '';

            if (!name || !email || !message) {
                formMessage.textContent = 'Please fill in all fields.';
                formMessage.className = 'mt-4 text-center text-red-600';
                return;
            }
            if (!recaptchaResponse) {
                formMessage.textContent = 'Please complete the CAPTCHA.';
                formMessage.className = 'mt-4 text-center text-red-600';
                return;
            }

            const config = window.KORA_SITE_CONFIG || {};
            const apiBaseUrl = (config.apiBaseUrl || '').replace(/\/+$/, '');
            const businessId = config.businessId;

            if (!apiBaseUrl || !businessId) {
                formMessage.textContent = 'Form submission is not configured.';
                formMessage.className = 'mt-4 text-center text-red-600';
                return;
            }

            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            fetch(`${apiBaseUrl}/api/v1/public/forms/submit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    business_id: businessId,
                    form_type: 'contact',
                    form_data: { name, email, message },
                    submitter_email: email,
                    captcha_token: recaptchaResponse
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                formMessage.textContent = 'Message sent successfully!';
                formMessage.className = 'mt-4 text-center text-green-600';
                form.reset();
                grecaptcha.reset();
            })
            .catch(error => {
                console.error('Error sending message:', error);
                formMessage.textContent = 'Failed to send message. Please try again later.';
                formMessage.className = 'mt-4 text-center text-red-600';
            })
            .finally(() => {
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            });
        });
    }
});