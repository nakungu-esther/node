//form
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = documment.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;

    // Simple check for demonstration
    if (username === 'admin' && password === 'password') {
      alert('register successful');
      window.location.href = 'product.html'; // Redirect to product page
    } else {
      alert('Invalid credentials');
    }
  });