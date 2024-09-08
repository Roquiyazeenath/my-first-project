document.addEventListener('DOMContentLoaded', function () {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');

    // Handle Sign In Form Submission
    signInForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('signInEmail').value;
        const password = document.getElementById('signInPassword').value;

        // Dummy credentials for demonstration
        const validEmail = 'user@example.com';
        const validPassword = 'password123';

        if (email === validEmail && password === validPassword) {
            window.location.href = 'index.html'; // Redirect to homepage on successful login
        } else {
            alert('Invalid credentials');
        }
    });

    // Handle Sign Up Form Submission (if needed)
    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Handle sign up logic here
        alert('Sign Up form submitted');
    });
});
