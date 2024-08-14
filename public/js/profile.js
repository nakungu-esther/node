// Fetch user profile by ID
async function fetchUserProfile(userId) {
    const response = await fetch(`/profile/${userId}`);
    const user = await response.json();

    // Populate the form fields
    document.getElementById('name').value = user.name;
    document.getElementById('email').value = user.email;
    document.getElementById('age').value = user.age;
  }

  // Call the function with a sample user ID (replace with actual ID)
  fetchUserProfile('YOUR_USER_ID');