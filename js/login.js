const users = [
  {user: "gbn18", pass: "123"},
  {user: "mbn18", pass: "qwerty"}
];

const userKey = 'logged';

// Wait for DOM to load
$(function () {
  redirectToLoginIfUnauthorized();
});

function redirectToLoginIfUnauthorized() {
  let current_path = window.location.pathname.split('/').pop();
  let logged = localStorage.getItem("logged");
  console.log("Hello ", logged);

  if (logged == null && current_path != 'login.html') {
    window.location.replace("login.html");
  }
}

function logout() {
  localStorage.removeItem(userKey);
}

function login() {
  username = $("#username");
  password = $("#password");

  if (isUserValid(username, password)) {
    localStorage.setItem(userKey, username.val());
    window.location.replace("index.html");
  } else {
    alert("Wrong user password!");
  }
}

function isUserValid(username, password) {
  for (n = 0; n < users.length; n++) {
    if (username.val() === users[n].user) {
      if (password.val() === users[n].pass) {
        return true;
      }
    }
  }
  return false;
}

function getUserName() {
  return localStorage.getItem(userKey);
}
