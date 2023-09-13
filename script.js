function submitForm() {
    // Get the selected car options
    const carOptions = Array.from(document.querySelectorAll('input[name="car_option[]"]:checked'))
                        .map(checkbox => checkbox.value);

    // Get user information
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    // Display a confirmation message
    const confirmationDiv = document.getElementById('confirmation');
    confirmationDiv.style.display = 'block';

    // You can perform further actions here, like sending data to a server or storing it in a database
}
