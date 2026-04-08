// script.js

// Smooth scroll navigation
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Reserve button click handler
document.getElementById('reserve-button').addEventListener('click', function() {
    smoothScroll('#reservation-form');
});

// WhatsApp button interactivity
document.getElementById('whatsapp-button').addEventListener('click', function() {
    window.open('https://wa.me/your-number', '_blank');
});

// Menu button functionality
document.getElementById('menu-button').addEventListener('click', function() {
    smoothScroll('#menu-section');
});

// Order now button handlers
document.getElementById('order-now-button').addEventListener('click', function() {
    alert('Your order has been placed!');
});

// Call now button interactivity
document.getElementById('call-now-button').addEventListener('click', function() {
    window.open('tel:+your-phone-number');
});
