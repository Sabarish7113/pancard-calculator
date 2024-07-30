document.getElementById('panForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const panInput = document.getElementById('pan').value.toUpperCase();
    const errorMessage = document.getElementById('error-message');
    
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (panPattern.test(panInput)) {
        errorMessage.style.display = 'none';
        alert('PAN number is valid!');
    } else {
        errorMessage.textContent = 'Invalid PAN number. Please enter a valid PAN number.';
        errorMessage.style.display = 'block';
    }
});
