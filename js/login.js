let contra = document.getElementById("floatingPassword");

let nombre = document.getElementById("floatingInput");

function verificarContra() {
   if (contra.lenght<7 || contra.lenght>40) {
    alert("Contraseña Inválida")
   }
   else{
    true
   }
}

function verificarUsuario() {
    if (nombre.lenght<7 || nombre.lenght>40) {
        alert("Usuario Inválido")
       }
       else{
        true
       }
}

document.getElementById("btn").onclick = 
    function pageRedirect() {
        if (verificarContra() && verificarUsuario()){
        window.location.replace("index.html");
    }   
}

