let user = document.getElementById("floatingInput").value;
let user2 = JSON.stringify(user);

function verifyPassword() {
  const pw = document.getElementById("floatingPassword").value;

  if (pw == "") {
    alert("Por favor, llene la contraseña");
    return false;
  }
  if (pw.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres");
    return false;
  }
  if (pw.length > 30) {
    alert("La contraseña debe tener como máximo 30 caracteres");
    return false;
  }
  return true;
}

function verifyUsername() {
  const un = document.getElementById("floatingInput").value;

  if (un == "") {
    alert("Por favor, complete el email");
    return false;
  }
  return true;
}

/*function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }*/

let button = document.getElementById("btn");
button.addEventListener("click", function () {
  if (verifyUsername() && verifyPassword()) {
    localStorage.setItem("username", user2);
    document.location.href = "index.html";
  }
});
