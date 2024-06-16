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
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (name.trim() === '') {
        nameError.textContent = 'Name is required';
        nameError.style.display = 'block';
        valid = false;
    } else {
        nameError.textContent = '';
        nameError.style.display = 'none';
    }

    // Validate email
    const email = document.getElementById('email').value;
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

    // Validate contact
    const contact = document.getElementById('contact').value;
    const contactError = document.getElementById('contactError');
    const contactPattern = /^\d+$/;
    if (contact.trim() === '') {
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

    // Validate confirm password
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (confirmPassword !== password) {
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPasswordError.style.display = 'block';
        valid = false;
    } else {
        confirmPasswordError.textContent = '';
        confirmPasswordError.style.display = 'none';
    }

    return valid;
}

// Add real-time validation for the contact field
document.getElementById('contact').addEventListener('input', function() {
    const contact = document.getElementById('contact').value;
    const contactError = document.getElementById('contactError');
    const contactPattern = /^\d+$/;

    if (contact.trim() === '') {
        contactError.textContent = 'Contact is required';
        contactError.style.display = 'block';
    } else if (!contactPattern.test(contact)) {
        contactError.textContent = 'Contact must contain only numbers';
        contactError.style.display = 'block';
    } else {
        contactError.textContent = '';
        contactError.style.display = 'none';
    }
});
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
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (name.trim() === '') {
        nameError.textContent = 'Name is required';
        nameError.style.display = 'block';
        valid = false;
    } else {
        nameError.textContent = '';
        nameError.style.display = 'none';
    }

    // Validate email
    const email = document.getElementById('email').value;
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

    // Validate contact
    const contact = document.getElementById('contact').value;
    const contactError = document.getElementById('contactError');
    const contactPattern = /^\d+$/;
    if (contact.trim() === '') {
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

    // Validate confirm password
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (confirmPassword !== password) {
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPasswordError.style.display = 'block';
        valid = false;
    } else {
        confirmPasswordError.textContent = '';
        confirmPasswordError.style.display = 'none';
    }

    return valid;
}

// Add real-time validation for the contact field
document.getElementById('contact').addEventListener('input', function() {
    const contact = document.getElementById('contact').value;
    const contactError = document.getElementById('contactError');
    const contactPattern = /^\d+$/;

    if (contact.trim() === '') {
        contactError.textContent = 'Contact is required';
        contactError.style.display = 'block';
    } else if (!contactPattern.test(contact)) {
        contactError.textContent = 'Contact must contain only numbers';
        contactError.style.display = 'block';
    } else {
        contactError.textContent = '';
        contactError.style.display = 'none';
    }
});
