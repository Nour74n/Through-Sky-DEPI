
const commentForm = document.getElementById('commentForm');
const commentInput = document.getElementById('commentInput');
const commentsList = document.getElementById('commentsList');
function addComment(text) {
  const commentDiv = document.createElement('div');
  commentDiv.classList.add('comment');
  const commentText = document.createElement('p');
  commentText.textContent = text;
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', function() {
    commentDiv.remove();
  });
  commentDiv.appendChild(commentText);
  commentDiv.appendChild(deleteBtn);
  commentsList.appendChild(commentDiv);
}
commentForm.addEventListener('submit', function(e) {
  e.preventDefault(); 
  const newComment = commentInput.value.trim();
  if (newComment) {
    addComment(newComment);
    commentInput.value = '';}
});
