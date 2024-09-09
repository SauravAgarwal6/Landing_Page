// Contact form submission event
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting by default

    // Get form values
    const name = document.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = document.querySelector('input[placeholder="Your Email"]').value.trim();
    const message = document.querySelector('textarea[placeholder="Your Message"]').value.trim();

    // Basic validation
    if (name === "" || email === "") {
        alert("Please fill in your name and email.");
        return; // Stop form submission if validation fails
    }

    // If validation passes, show alert and reset form
    alert('Thank you for your message! We will get back to you soon.');

    // Clear the form
    document.getElementById('contact-form').reset();
});
