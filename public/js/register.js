document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    if (validateForm()) {
        // Form is valid, submit the form
        document.getElementById('registerForm').submit();
    }
});

function validateForm() {
    let valid = true;

    // Validate name
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();
    const nameError = document.getElementById('nameError');
    if (name === '') {
        nameError.textContent = 'Name is required';
        nameError.style.display = 'block';
        valid = false;
    } else {
        nameError.textContent = '';
        nameError.style.display = 'none';
    }
    nameInput.value = name; // Update input with trimmed value

    // Validate email
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.display = 'block';
        valid = false;
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none';
    }
    emailInput.value = email; // Update input with trimmed value

    // Validate contact
    const contactInput = document.getElementById('contact');
    const contact = contactInput.value.trim();
    const contactError = document.getElementById('contactError');
    const contactPattern = /^\d+$/;
    if (contact === '') {
        contactError.textContent = 'Contact is required';
        contactError.style.display = 'block';
        valid = false;
    } else if (!contactPattern.test(contact)) {
        contactError.textContent = 'Contact must contain only numbers';
        contactError.style.display = 'block';
        valid = false;
    } else {
        contactError.textContent = '';
        contactError.style.display = 'none';
    }
    contactInput.value = contact; // Update input with trimmed value

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

    // Validate confirm password
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const confirmPassword = confirmPasswordInput.value.trim();
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (confirmPassword !== password) {
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPasswordError.style.display = 'block';
        valid = false;
    } else {
        confirmPasswordError.textContent = '';
        confirmPasswordError.style.display = 'none';
    }
    confirmPasswordInput.value = confirmPassword; // Update input with trimmed value

    return valid;
}

// Add real-time validation for the contact field
document.getElementById('contact').addEventListener('input', function() {
    const contactInput = document.getElementById('contact');
    const contact = contactInput.value.trim();
    const contactError = document.getElementById('contactError');
    const contactPattern = /^\d+$/;

    if (contact === '') {
        contactError.textContent = 'Contact is required';
        contactError.style.display = 'block';
    } else if (!contactPattern.test(contact)) {
        contactError.textContent = 'Contact must contain only numbers';
        contactError.style.display = 'block';
    } else {
        contactError.textContent = '';
        contactError.style.display = 'none';
    }
    contactInput.value = contact; // Update input with trimmed value
});
