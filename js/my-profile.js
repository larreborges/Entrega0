let name = document.getElementById()

function titular() {
    var cat = JSON.parse(localStorage.getItem('username'));
    document.getElementById("userName").innerHTML = cat;
    document.getElementById("validationEmail").value = cat;
}
titular();

function verifyName() {
    const username = document.getElementById("validationName").value;
  
    if (username == "") {
      alert("Por favor, complete el nombre");
      return false;
    }
    return true;
  }

  function verifyLastname() {
    const username = document.getElementById("validationLastName").value;
  
    if (username == "") {
      alert("Por favor, complete el apellido");
      return false;
    }
    return true;
  }

  function verifyEmail() {
    const username = document.getElementById("validationEmail").value;
  
    if (username == "") {
      alert("Por favor, complete el email");
      return false;
    }
    return true;
  }

  function verifyPhone() {
    const username = document.getElementById("validationPhone").value;
  
    if (username == "") {
      alert("Por favor, complete el telefono");
      return false;
    }
    return true;
  }

let button = document.getElementById("finalizarCompra");
button.addEventListener("click", function () {
  if (verifyName() && verifyLastname() && verifyEmail() && verifyEmail()) {
    localStorage.setItem("name", );
    localStorage.setItem("lastname", );
    localStorage.setItem("email", );
    localStorage.setItem("phone", )
  }
});