Get references to HTML elements
const commentForm = document.getElementById('commentForm');
const commentInput = document.getElementById('commentInput');
const commentsList = document.getElementById('commentsList');

// Function to add a new comment to the list
function addComment(text) {
  // Create a new div for the comment
  const commentDiv = document.createElement('div');
  commentDiv.classList.add('comment');
  
  // Create a paragraph element for the comment text
  const commentText = document.createElement('p');
  commentText.textContent = text;
  
  // Append the text to the comment div
  commentDiv.appendChild(commentText);
  
  // Append the comment div to the comments list
  commentsList.appendChild(commentDiv);
}

// Event listener for form submission
commentForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission from reloading the page
  
  // Get the comment text from the input field
  const newComment = commentInput.value.trim();
  
  // Only add the comment if it's not empty
  if (newComment) {
    addComment(newComment);
    commentInput.value = ''; // Clear the input field after submitting
  }
});
