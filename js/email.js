
const form = document.getElementById('newsletterForm');
  const loadingMessage = document.getElementById('loadingMessage');
  const responseMessage = document.getElementById('responseMessage');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    loadingMessage.classList.add('visible'); // Show loading message
    responseMessage.textContent = ''; // Clear previous response message

    const formData = new FormData(form);

    // Use Fetch API to submit the form data
    fetch(form.action, {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      loadingMessage.classList.remove('visible'); // Hide loading message
      responseMessage.textContent = 'Thank you for subscribing!'; // Show success message
      form.reset(); // Clear the form
    })
    .catch(error => {
      loadingMessage.classList.remove('visible'); // Hide loading message
      responseMessage.textContent = 'An error occurred. Please try again.'; // Show error message
    });
  });
