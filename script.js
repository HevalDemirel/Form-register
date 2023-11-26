document.addEventListener('DOMContentLoaded', function () {
    const userNameInput = document.getElementById('username');
    const emailInput = document.getElementById('hotmail');
    const passWordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('verify-password');
    const confirmButton = document.getElementById('confirmButton');

    const userInput = [userNameInput, emailInput, passWordInput];

    confirmButton.addEventListener('click', function () {
        userInput.forEach(element => {
            console.log(element);
            if (element.value === '') {
                alert('Fyll i alla fält.');
            } else if (element === passWordInput) {
                if (element.value !== confirmPasswordInput.value) {
                    alert('Lösenorden matchar inte.');
                } else {
                    alert('Anmälan bekräftad');
                }
            }
        });
    });
});
