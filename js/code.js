
let posts = [
    
];

 // Get the current date
 const currentDate = new Date();
 const day = currentDate.getDate();
 const month = currentDate.toLocaleString('default',
  { month: 'short' });
 const year = currentDate.getFullYear();
 const formattedDate = day + ' ' + month + ' ' + year;




function openModal() {
    document.getElementById("createPostModal").style.display = "block";
}

function closeModal() {
    document.getElementById("createPostModal").style.display = "none";
}

function addPostmodal() {
    const postContent = document.getElementById("modalPostContent").value;
    const postImage = document.getElementById("postImage").files[0];
    const imageUrl = postImage ? URL.createObjectURL(postImage) : null;

    if (postContent.trim() === "" && !imageUrl) return;

    const newPost = {
        id: Date.now(),
        content: postContent,
        image: imageUrl,
        likes: 0,
        comments: [],
    };

    posts.push(newPost);
    document.getElementById("modalPostContent").value = "";
    document.getElementById("postImage").value = "";
    closeModal();
    renderPosts();
}

function renderPosts() {
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = "";

    posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.className = "post";
        postElement.innerHTML = `
            <div class="inner-wrapper">
                <div><img  id="photo" src="./imgs/blog/im1.jpg" alt="Profile" class="profile-pic">
                <label><b>Ann Mark</b></label>
                <span class="post-date">${formattedDate}</span>
                </div>
                
                <div><i id="del-icon" onclick="deletePost(${post.id})"  class="material-icons" style="font-size:18px;color: red;">close</i></div></div>
            <div class="semi-wrapper">
            <p>${post.content}</p>
            ${post.image ? `<img class="img-post rounded" src="${post.image}" alt="Post Image"></div>` : ''}

             
           <div style="width:75%"> <button class="btn-layer" id="edit-btn" onclick="editPost(${post.id})"><i class="material-icons" style="font-size:18px;color: white;">edit</i>Edit</button><div>
            


            <div class="interact-part">
            <div class="act-icon likes">
            <span id="likes-${post.id}">${post.likes}</span>
            <i  onclick="likePost(${post.id})" class="material-icons" style="font-size:18px;color:gray;line-height: 1.5em;cursor: pointer;">favorite</i>
      <label>Like</label>
            </div>
           
 
            <div class="act-icon">
                <i class="material-icons"  style="font-size:18px;color:gray;line-height: 1.5em;cursor: pointer;">comment</i>
                <label>comment</label></div>
                 </div>


          <div class="comments">

          <div id="comments-${post.id}" style="background-color:#ccc ">${renderComments(post.comments)}</div>
          <div class="commentpart">
          <div class="inner-comment" style="display:flex">
                 
                <textarea id="comment-${post.id}" placeholder="Add a comment"></textarea>
                <button class="btn-layer" onclick="addComment(${post.id})">Send</button></div></div></div>
            
        `;
        postsContainer.appendChild(postElement);
    });
}

function renderComments(comments) {
    return comments.map(({ text, userPic }) => 
        `<div class="comment"><img src="${userPic}" alt="Profile" class="profile-pic">${text}</div>`
    ).join('');
}

function likePost(postId) {
    const post = posts.find(p => p.id === postId);
    post.likes++;
    renderPosts();
}

function editPost(postId) {
    const post = posts.find(p => p.id === postId);
    const newContent = prompt("Edit your post:", post.content);
    if (newContent !== null) {
        post.content = newContent;
        renderPosts();
    }
}

function deletePost(postId) {
    posts = posts.filter(post => post.id !== postId);
    renderPosts();
}

function addComment(postId) {
    const commentInput = document.getElementById(`comment-${postId}`);
    const commentText = commentInput.value;

    if (commentText.trim() === "") return;

    const post = posts.find(p => p.id === postId);
    const userPic = "https://via.placeholder.com/40"; // Placeholder for user profile picture
    post.comments.push({ text: commentText, userPic });
    commentInput.value = "";
    renderPosts();
}



