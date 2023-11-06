console.log("Script loaded!");
document.addEventListener("DOMContentLoaded", function() {
    
    // Get references to the form elements
    var postForm = document.getElementById("postForm");
    var postTitle = document.getElementById("postTitle");
    var postDescription = document.getElementById("postDescription");
    var postsContainer = document.getElementById("postsContainer");

    // Function to create a new post element
    function createPostElement(title, description) {
        var postElement = document.createElement("div");
        postElement.classList.add("feed-post");

        postElement.innerHTML =
            '<div class="post-header">' +
            '    <img src="path-to-avatar.jpg" alt="User Avatar" class="user-avatar">' +
            '    <div class="user-info">' +
            '        <h3>John Doe</h3>' + // Replace with actual user name
            '        <p>@johndoe</p>' + // Replace with actual user handle
            '    </div>' +
            '</div>' +
            '<div class="post-content">' +
            '    <h4>' + title + '</h4>' + // The title of the post
            '    <p>' + description + '</p>' + // The content of the post
            '</div>';

        return postElement;
    }

    // Add event listener to handle form submission
    postForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get the values from the form inputs
        var title = postTitle.value;
        var description = postDescription.value;

        // Create a new post element and add it to the feed
        var newPost = createPostElement(title, description);
        postsContainer.prepend(newPost); // Add the new post to the top of the feed

        // Clear the form fields
        postTitle.value = '';
        postDescription.value = '';
    });
});
