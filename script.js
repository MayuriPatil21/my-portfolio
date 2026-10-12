const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function(event) {
        console.log("Send Message button clicked!");

        event.preventDefault();

        formMessage.textContent =
            "Thank you! Your form has been submitted successfully.";

        contactForm.reset();
    });

}