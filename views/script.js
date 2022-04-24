const botao = document.querySelector('#btnID');
const titulo = document.querySelector('.titulo');
const caixa = document.querySelector('.caixa');
const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#password');

// https://jsonplaceholder.typicode.com/users

// function getUsers() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((users) => {
//       users.forEach((user) => {
//         const userParagraph = document.createElement('p');
//         userParagraph.innerText = user.name;
//         caixa.appendChild(userParagraph);
//       });
//     })
//     .catch((err) => console.error(err));
// }

// getUsers();

// ASYNC | AWAIT
// async function getUsers() {
//   try {
//     const res = await fetch('http://localhost:3001/users');
//     return await res.json();
//   }catch(error){
//     return error.json();
//   }
// }

botao.addEventListener('click', () => {
  fetch('http://localhost:3001/users')
    .then((res) => res.json())
    .then((users) => {
      users.forEach((user) => {
        if(user.email == inputEmail.value && user.password == inputPassword.value){
          localStorage.setItem('user', user)
          window.location.replace("about.html");
        }
      });
    })
    .catch((err) => console.error(err));
  })


  document.querySelectorAll(".logoutButton").addEventListener("click", () =>{
    localStorage.removeItem("user")
    window.location.replace("index.html");
  })