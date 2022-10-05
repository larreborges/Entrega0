const getUserData = fetch('https://japceibal.github.io/emercado-api/user_cart/25801.json')
.then(response => response.json())
.then(response => (response))

const showUserData = async () => {
    const userData = await getUserData;
    let htmlContentToAppend = "hola";

    document.getElementById("articulos").innerHTML =
      htmlContentToAppend;

}

showUserData();