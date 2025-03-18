document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const playerName = document.getElementById('playerName').value;
    const playerEmail = document.getElementById('playerEmail').value;
    const playerAge = document.getElementById('playerAge').value;
    const slotSelection = document.getElementById('slotSelection').value;

    if (playerName && playerEmail && playerAge && slotSelection) {
        alert('Registration successful! You have booked ' + slotSelection);
        // Here, you can add code to save the registration data to a database or server
    } else {
        alert('Please fill out all fields');
    }
});
