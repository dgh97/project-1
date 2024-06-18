document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let valid = true;

    // Validate email
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const emailError = document.getElementById('emailError');
    if (email === '') {
        emailError.textContent = 'Email is required';
        emailError.style.display = 'block';
        valid = false;
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none';
    }
    emailInput.value = email; // Update input with trimmed value

    // Validate password
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value.trim();
    const passwordError = document.getElementById('passwordError');
    if (password === '') {
        passwordError.textContent = 'Password is required';
        passwordError.style.display = 'block';
        valid = false;
    } else {
        passwordError.textContent = '';
        passwordError.style.display = 'none';
    }
    passwordInput.value = password; // Update input with trimmed value

    if (valid) {
        document.getElementById('loginForm').submit();
    }
});
