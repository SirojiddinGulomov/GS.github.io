function displayMessage(message) {
    document.getElementById('output').innerText = message;
}

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '12345') {
        document.getElementById('registration-output').innerText = 'Registration successful!';
        document.getElementById('button-container').style.display = 'block';
    } else {
        document.getElementById('registration-output').innerText = 'Invalid username or password.';
    }
}
