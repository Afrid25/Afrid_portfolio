// Admin Login Script
document.addEventListener('DOMContentLoaded', function() {
    // Show admin login modal when needed (you can add a button or keyboard shortcut)
    // For now, you can access it by calling showAdminLogin() in console

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('error-message');

            // Simple authentication (in a real app, this would be server-side)
            if (username === 'admin' && password === 'password') {
                // Store login status in localStorage
                localStorage.setItem('adminLoggedIn', 'true');
                // Hide login modal and show admin panel
                document.getElementById('admin-login-modal').style.display = 'none';
                showAdminPanel();
            } else {
                errorMessage.textContent = 'Invalid username or password';
            }
        });
    }

    // Close modal functionality
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
});

// Function to show admin login modal
function showAdminLogin() {
    document.getElementById('admin-login-modal').style.display = 'block';
}

// Function to show admin panel modal
function showAdminPanel() {
    document.getElementById('admin-panel-modal').style.display = 'block';
    // Initialize admin panel if not already done
    if (typeof initAdminPanel === 'function') {
        initAdminPanel();
    }
}
