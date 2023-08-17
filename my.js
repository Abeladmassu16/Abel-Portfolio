document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const emailData = {
        to: "abeladmassu3097@gmail.com",
        subject: "New Contact Form Submission",
        body: `
            Name: ${formData.get("Name")}
            Email: ${formData.get("Email")}
            Message: ${formData.get("Message")}
        `
    };

    fetch("/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(emailData)
    })
    .then(response => {
        if (response.ok) {
            alert("Email sent successfully!");
        } else {
            alert("Email sending failed.");
        }
    })
    .catch(error => {
        console.error("Error sending email:", error);
    });
});

