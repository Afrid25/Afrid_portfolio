// Admin Login Script
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple authentication (in a real app, this would be server-side)
    if (username === 'admin' && password === 'password') {
        // Store login status in localStorage
        localStorage.setItem('adminLoggedIn', 'true');
        // Redirect to admin panel
        window.location.href = 'panel.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
