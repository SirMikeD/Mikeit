document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    const blogTitle = document.getElementById('blogTitle').value;
    const blogContent = document.getElementById('blogContent').value;

    // Create data object
    const data = {
        username: username,
        title: blogTitle,
        content: blogContent
    };

    // Store data in localStorage
    localStorage.setItem('blogData', JSON.stringify(data));

    // Redirect to blog.html
    window.location.href = 'blog.html';
});