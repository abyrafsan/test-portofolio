// script.js
const form = document.querySelector('.contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // You can add your form handling logic here, e.g., send data to server or display a message
    alert('Form submitted successfully!');
});
