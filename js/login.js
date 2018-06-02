const users = [
  {user: "gbn18", pass: "123"},
  {user: "mbn18", pass: "qwerty"}
];


// Wait for DOM to load
$(function () {
  redirectToLoginIfUnauthorized();
  // catch click
  $("#login button").click(login);
});

function redirectToLoginIfUnauthorized() {
  let current_path = window.location.pathname.split('/').pop();
  let logged = localStorage.getItem("logged");
  console.log("Hello ", logged);

  if (logged == null && current_path != 'login.html') {
    window.location.replace("login.html");
  }
}

function login() {
  username = $("#username");
  password = $("#password");

  if (isUserValid(username, password)) {
    localStorage.setItem("logged", username.val());
    window.location.replace("index.html");
  }
  alert("Wrong user password!");
}

function isUserValid(username, password) {
  for (n = 0; n < users.length; n++) {
    if (username.val() == users[n].user) {
      if (password.val() == users[n].pass) {
        return true;
      }
    }
  }
  return false;
}
