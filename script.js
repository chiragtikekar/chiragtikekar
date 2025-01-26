// Scroll smoothly to the target section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        document.getElementById('form-response').innerText = "Thank you for your message!";
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-response').innerText = "Please fill in all fields.";
    }
}
