const getUserData = fetch('https://japceibal.github.io/emercado-api/user_cart/25801.json')
.then(response => response.json())
.then(response => (response))

const showUserData = async () => {
    const userData = await getUserData;
    let articulos = userData.articles[0]
    let nombre = articulos.name;
    let costo = articulos.unitCost;
    let cantidad = articulos.count;
    let moneda = articulos.currency;
    let imagen = articulos.image;

    let htmlContentToAppend = `
    
    <h4>Artículos a comprar</h4>
      <ul>
        <li><b>Nombre</b></li>
        <li>${nombre}</li>
        <li><b>Costo</b></li>
        <li>${moneda+costo}</li>
        <li><b>Cantidad</b></li>
        <li>${cantidad}</li>
        <li><b>Subtotal</b></li>
        <li>${moneda+cantidad*costo}</li>
        <img src="${imagen}">
      </ul>

    `

    document.getElementById("articulos").innerHTML =
      htmlContentToAppend;

}

showUserData();