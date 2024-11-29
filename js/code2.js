
const likeCounts = {};

// Function to like a post
function likemyPost(postId) {
    if (!likeCounts[postId]) {
        likeCounts[postId] = 0;
    }
    likeCounts[postId]++;
    document.getElementById(`likeCount${postId}`).innerText = likeCounts[postId];
}

// Function to show the comment input
function showCommentInput(postId) {
    const input = document.getElementById(`commentmyInput${postId}`);
    input.style.display = input.style.display === 'none' ? 'block' : 'none';
}

// Function to add a comment
function addmyComment(postId) {
    const commentText = document.getElementById(`commentText${postId}`).value;
    if (commentText) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.textContent = commentText;
        document.getElementById(`mycomments${postId}`).appendChild(commentElement);
        document.getElementById(`commentText${postId}`).value = ''; // Clear the input
    }
}

// Function to delete a post
function deletemyPost(postId) {
    const post = document.querySelector(`.myoldpost[data-id="${postId}"]`);
    if (post) {
        post.remove();
    }
}

