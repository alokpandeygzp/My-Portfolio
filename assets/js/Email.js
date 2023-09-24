emailjs.init('vZMrjScfM3_UC-xRu');
  document.getElementById('contact-submit').addEventListener('click', function() {
    var name = document.getElementById('contact-name').value;
    var email = document.getElementById('contact-email').value;
    var message = document.getElementById('contact-message').value;

    // Check if any of the input fields are empty
    if (!name || !email || !message) {
        alert('Please fill in all the fields before sending the email.');
        return; // Stop the function execution
      }

    var templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: 'Alok Pandey',
    };

    emailjs.send("service_v7j5gk9", "template_587oavu", templateParams)
      .then(function(response) {
        console.log('Email sent successfully:', response);
        alert("Email sent successfully :)");
        // Clear the input fields after sending the email
        document.getElementById('contact-name').value = '';
        document.getElementById('contact-email').value = '';
        document.getElementById('contact-message').value = '';
      }, function(error) {
        console.log('Failed to send email:', error);

        alert("Email not sent. Some error occured");
      });
  });