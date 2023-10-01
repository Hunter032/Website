// Back button to go back to main page from contact us page.

const mainPageBtn = document.getElementById('backBtn');
mainPageBtn.addEventListener('click', function(){
    window.location.href = 'index.html'  
})

// Submit button make text areas blank after clicking submit.

const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submitButton');

submitBtn.addEventListener('click', function(){

    event.preventDefault();
    
    fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm), // Send form data
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            contactForm.reset();
            alert('Email was sent!')
        } else {
            console.error('Email sending failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});