document.addEventListener('DOMContentLoaded', function () {
    const userNameInput = document.getElementById('username');
    const emailInput = document.getElementById('hotmail');
    const passWordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('verify-password');
    const confirmButton = document.getElementById('confirmButton');

    confirmButton.addEventListener('click', function () {
        if (userNameInput.value === '' || emailInput.value === '' || passWordInput.value === '' || confirmPasswordInput.value === '') {
            alert('Fyll i alla fält.');
        } else if (passWordInput.value !== confirmPasswordInput.value) {
            alert('Lösenorden matchar inte.');
        } else {
            alert('Anmälan bekräftad!');
        }
    })
});
