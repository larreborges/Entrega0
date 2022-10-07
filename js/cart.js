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
      <div class="container">
        <div class="row">
          <div class="col">
          </div>
          <div class="col">
            <li><b>Nombre</b></li>
          </div>
          <div class="col">
            <li><b>Costo</b></li>
          </div>
          <div class="col">
            <li><b>Cantidad</b></li>
          </div>
          <div class="col">
            <li><b>Subtotal</b></li>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <img src="${imagen}" width="100">
          </div>
          <div class="col">
            <li>${nombre}</li>
          </div>
          <div class="col">
            <li>${moneda+costo}</li>
          </div>
          <div class="col">
            <input type="text" value="${cantidad}" id="ammountValue">
          </div>
          <div class="col">
            <li>${moneda+cantidad*costo}</li>
          </div>
        </div>
      </div>

      <h4>Tipo de envío</h4>
        <input type="radio" id="html" name="fav_language" value="HTML">
          <label for="html">Premium 2 a 5 días (15%)</label><br>
        <input type="radio" id="css" name="fav_language" value="CSS">
          <label for="css">Express 5 a 8 días (7%)</label><br>
        <input type="radio" id="javascript" name="fav_language" value="JavaScript">
          <label for="javascript">Standard 12 a 15 días (5%)</label>

      <h4>Dirección de envio</h4>
        <div class="row">
          <div class="col">
            <p>Calle</p>
          </div>
          <div class="col">
            <p>Dirección</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input type="text">
          </div>
          <div class="col">
            <input type="text">
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p>Esquina</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <input type="text">
          </div>
        </div>
    `
    document.getElementById("articulos").innerHTML =
      htmlContentToAppend;


    document.getElementById("ammountValue").addEventListener("click", function(){
      
    })
}

showUserData();