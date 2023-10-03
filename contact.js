// Back button to go back to main page from contact us page.

const mainPageBtn = document.getElementById('backBtn');
mainPageBtn.addEventListener('click', function(){
    window.location.href = 'index.html'  
})

// Submit button make text areas blank after clicking submit.

const contactForm = document.getElementById('contact-form');

// Add a submit event listener to the form
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Send the form data to Formspree.io using fetch
    fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            // Email sent successfully, now reset the form
            contactForm.reset();
            alert('Email sent successfully!'); // You can display a success message if needed
        } else {
            // Handle email sending failure
            console.error('Email sending failed');
        }
    })
    .catch(error => {
        // Handle any network errors or other exceptions
        console.error('Error:', error);
    });
});
