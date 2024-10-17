document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const loadingMessage = document.getElementById('loadingMessage');
    const responseMessage = document.getElementById('responseMessage');
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries()); // Convert form data to a simple object

    loadingMessage.style.display = 'block'; // Show loading message

    fetch(this.action, {
        method: 'POST',
        body: JSON.stringify(data), // Convert data to JSON string
        headers: { 'Content-Type': 'application/json' } // Specify JSON content type
    })
    .then(response => response.json())
    .then(data => {
        loadingMessage.style.display = 'none'; // Hide loading message

        // Check response and display appropriate message
        if (data.status === 'success') {
            responseMessage.textContent = 'Thank you! We have received your message.';
            this.reset(); // Reset form after successful submission
        } else {
            responseMessage.textContent = 'There was an issue submitting your message. Please try again.';
        }
    })
    .catch(error => {
        loadingMessage.style.display = 'none';
        responseMessage.textContent = 'Error sending your message. Please try again.';
        console.error('Error:', error);
    });
});
