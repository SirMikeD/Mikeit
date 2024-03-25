document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submitBtn');
    if(submitBtn) {
        submitBtn.addEventListener('click', function(event) {
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
        
            // Retrieve existing blogs from localStorage or initialize an empty array
            const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
            
            // Add the new blog to the array
            blogs.unshift(data);
            
            // Store the updated array back in localStorage
            localStorage.setItem('blogs', JSON.stringify(blogs));
        
            // Redirect to blog.html
            window.location.href = 'blog.html';
        });
    }
});
