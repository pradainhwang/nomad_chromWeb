const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const todoForm = document.querySelector('#todo-form');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  // // greeting.innerHTML = "Hello " + username;
  // greeting.innerText = `Hello ${username}`;  // 코드가 쩗아지는 다른방법 //
  // greeting.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
  greeting.innerText = username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  todoForm.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit)
} else {
  paintGreetings(savedUsername);
}