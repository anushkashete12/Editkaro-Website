document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const loadingMessage = document.getElementById('loadingMessage');
    const responseMessage = document.getElementById('responseMessage');
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries()); // Convert form data to a simple object

    loadingMessage.style.display = 'block'; // Show loading message
    responseMessage.textContent = ''; // Clear previous messages

    fetch(this.action, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json();
    })
    .then(data => {
        loadingMessage.style.display = 'none'; // Hide loading message

        // Check response and display appropriate message
        if (data.status === 'success') {
            responseMessage.textContent = 'Thank you! We have received your message.';
            this.reset(); // Reset form after successful submission
        } else {
            responseMessage.textContent = `Error: ${data.message}`;
        }
    })
    .catch(error => {
        loadingMessage.style.display = 'none';
        responseMessage.textContent = `Error sending your message: ${error.message}`;
        console.error('Error:', error);
    });
});
