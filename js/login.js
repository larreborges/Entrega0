let user = document.getElementById("floatingInput").value;

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

var button = document.getElementById("btn");
button.addEventListener("click", function(){
  if (verifyUsername() && verifyPassword()){
    document.location.href = 'index.html';
  }
});

localStorage.setItem('username', user);
