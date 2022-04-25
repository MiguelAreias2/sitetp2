const botao = document.querySelector('#btnID');
const titulo = document.querySelector('.titulo');
const caixa = document.querySelector('.caixa');
const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#password');

botao.addEventListener('click', () => {
  fetch('http://localhost:3001/users')
    .then((res) => res.json())
    .then((users) => {
      users.forEach((user) => {
        if (user.email == inputEmail.value && user.password == inputPassword.value) {
          localStorage.setItem('user', user)
          window.location.replace("about.html");
        }
      });
    })
    .catch((err) => console.error(err));
})


document.getElementById("logoutButton").addEventListener("click", () => {
  if (localStorage.getItem('user')) {
    localStorage.removeItem("user")
  } 
  window.location.replace("index.html");
})