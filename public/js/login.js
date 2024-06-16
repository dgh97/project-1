document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let valid = true;

    // Validate username
    const username = document.getElementById('username').value;
    const usernameError = document.getElementById('usernameError');
    if (username.trim() === '') {
        usernameError.textContent = 'Username is required';
        usernameError.style.display = 'block';
        valid = false;
    } else {
        usernameError.textContent = '';
        usernameError.style.display = 'none';
    }

    // Validate password
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.trim() === '') {
        passwordError.textContent = 'Password is required';
        passwordError.style.display = 'block';
        valid = false;
    } else {
        passwordError.textContent = '';
        passwordError.style.display = 'none';
    }

    if (valid) {
        // Form is valid, submit the form
        alert('Form submitted successfully!');
        // You can replace the alert with form submission logic
        // document.getElementById('loginForm').submit();
    }
});