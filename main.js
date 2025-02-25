

const apiPost = "https://jsonplaceholder.typicode.com/posts";   //promis

const getPosts = () => {
 const response =  fetch(apiPost).then((response) => { console.log('response:', response) 
    return (response.json()) }).then(posts => displayPosts(posts)) //получать данные с сервера response - ответ
    console.log(response)
}


function displayPosts(posts) {
  const postsContainer = document.getElementById('posts');
  const slicedPosts = posts.slice(0, 9); //срез - через константу!

  slicedPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.style.marginBottom = '40px';
    

    postsContainer.innerHTML += `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
          <hr>
      `
    postsContainer.appendChild(postElement);
    
  });
}


getPosts()


const apiComment = 'https://jsonplaceholder.typicode.com/comments';

const getComment = () => {
  fetch(apiComment).then((response) => { return (response.json()) }).then(comment => displayComments(comment))
}
function displayComments(comment) {
  const commentsContainer = document.getElementById('comments');
  const slicedComm = comment.slice(0, 9);

  slicedComm.forEach(comment => {
    const commentElement = document.createElement('div');
    commentElement.style.marginBottom = '20px';

    commentsContainer.innerHTML += `
          <h2>${comment.name}</h2>
          <p>${comment.email}</p>
          <p>${comment.body}</p>
          <hr>
      `
    commentsContainer.appendChild(commentElement);
  });
}
getComment()

const apiUsers = 'https://jsonplaceholder.typicode.com/users';

const getUsers = () => {
  fetch(apiUsers).then((response) => { return (response.json()) }).then(users => displayUsers(users))
}
function displayUsers(users) {
  const usersContainer = document.getElementById('users');


  users.forEach(users => {
    const usersElement = document.createElement('div');
    usersElement.style.marginBottom = '20px';

    usersContainer.innerHTML += `
          <h2>${users.name}</h2>
          <p>${users.email}</p>
          <p>${users.address}</p>
          <hr>
      `
    usersContainer.appendChild(usersElement);
  });
}
getUsers()
