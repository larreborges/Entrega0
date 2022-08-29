const user = document.getElementById("floatingInput");

localStorage.setItem('username', 'user');

function verifyPassword() {
  const pw = document.getElementById("floatingPassword").value;
  console.log(pw);
  debugger
  //si le saco el debugger deja de funcionar correctamente la página, he intentado con muchas formas y esta es la que me funcionó mejor
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
  } else {
    return true;
  }
}

const button = document.getElementById("btn");
button.addEventListener("click", () => {
  if (verifyPassword() && verifyUsername()) {
    window.location.replace("index.html");
  }
});

