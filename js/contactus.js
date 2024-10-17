// Select the contact form and message elements
const contactForm = document.getElementById('contactForm');
const loadingMessage = document.getElementById('loadingMessage');
const responseMessage = document.getElementById('responseMessage');

// Add an event listener for form submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    loadingMessage.classList.add('visible'); // Show loading message
    responseMessage.textContent = ''; // Clear previous response message

    const formData = new FormData(contactForm); // Get form data

    // Use Fetch API to submit the form data
    fetch(contactForm.action, {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData.entries())), // Convert FormData to JSON
        headers: {
            'Content-Type': 'application/json' // Set content type to JSON
        }
    })
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
        loadingMessage.classList.remove('visible'); // Hide loading message
        if (data.status === 'success') {
            responseMessage.textContent = 'Thank you! We have received your message.'; // Show success message
            contactForm.reset(); // Clear the form
        } else {
            responseMessage.textContent = 'There was an issue submitting your message: ' + data.message; // Show error message
        }
    })
    .catch(error => {
        loadingMessage.classList.remove('visible'); // Hide loading message
        responseMessage.textContent = 'An error occurred. Please try again.'; // Show generic error message
        console.error('Error:', error); // Log the error to the console
    });
});
