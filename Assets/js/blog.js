document.addEventListener('DOMContentLoaded', function() {
  const blogList = document.getElementById('blogList');
  const usernameInput = document.getElementById('username');
  const blogTitleInput = document.getElementById('blogTitle');
  const blogContentInput = document.getElementById('blogContent');
  
  // Function to add a new blog post
  function addBlogPost() {
      // Get form values
      const username = usernameInput.value;
      const blogTitle = blogTitleInput.value;
      const blogContent = blogContentInput.value;

      // Create blog post element
      const blogPost = document.createElement('div');
      blogPost.classList.add('blog-post');
      blogPost.innerHTML = `
          <h3>${blogTitle}</h3>
          <p><strong>By:</strong> ${username}</p>
          <p>${blogContent}</p>
      `;

      // Add new blog post below existing ones
      blogList.appendChild(blogPost);

      // Clear form inputs
      usernameInput.value = '';
      blogTitleInput.value = '';
      blogContentInput.value = '';
  }

  // Event listener for the submit button in index.html
  document.getElementById('submitBtn').addEventListener('click', function(event) {
      event.preventDefault();
      addBlogPost();
  });
});
