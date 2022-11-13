function titular() {
    var cat = JSON.parse(localStorage.getItem('username'));
    document.getElementById("userName").innerHTML = cat;
    document.getElementById("validationEmail").value.innerHTML = cat;
}
titular();

