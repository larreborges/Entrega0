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
  let nameValue = document.getElementById("validationName").value
  let lastnameValue = document.getElementById("validationLastName").value
  let emailValue = document.getElementById("validationEmail").value
  let phoneValue = document.getElementById("validationPhone").value
  let nameValue2 = document.getElementById("noValidationName2").value
  let lastnameValue2 = document.getElementById("noValidationLastName2").value

  if (verifyName() && verifyLastname() && verifyEmail() && verifyPhone()) {
    localStorage.setItem("name", nameValue);
    localStorage.setItem("lastname", lastnameValue);
    localStorage.setItem("email", emailValue);
    localStorage.setItem("phone", phoneValue);
    localStorage.setItem("name2", nameValue2);
    localStorage.setItem("lastname2", lastnameValue2);
    alert("Los datos se han guardado");
  }
});

function getData() {
  let nameData = localStorage.getItem('name');
  let lastnameData = localStorage.getItem('lastname');
  let emailData = localStorage.getItem('email');
  let phoneData = localStorage.getItem('phone');

  document.getElementById("validationName").value = nameData;
  document.getElementById("validationLastName").value = lastnameData;
  document.getElementById("validationEmail").value = emailData;
  document.getElementById("validationPhone").value = phoneData;
}

getData();