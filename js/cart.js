const getUserData = fetch(
  "https://japceibal.github.io/emercado-api/user_cart/25801.json"
)
  .then((response) => response.json())
  .then((response) => response);

let userData;
let precioDeEnvio = 0;

function renderizarCarrito() {
  if (!userData) return;
  const { name, unitCost, count, currency, image } = userData.articles[0];
  let valueInDollars = count * unitCost;
  valueInDollars =
    currency +
    valueInDollars.toLocaleString("en-US", { minimumFractionDigits: 2 });

  let htmlContentToAppend = `
    <div class="scroller">
    <h4>Artículos a comprar</h4>
      <div class="container">
        <div class="row">
          <div class="col">
            
          </div>
          <div class="col">
            <p><b>Nombre</b></p>
          </div>
          <div class="col">
            <p><b>Costo</b></p>
          </div>
          <div class="col">
            <p><b>Cantidad</b></p>
          </div>
          <div class="col">
            <p><b>Subtotal</b></p>
          </div>
        </div>

        <hr/>

        <div class="row">
          <div class="col">
            <img src="${image}" width="100">
          </div>
          <div class="col">
            <p>${name}</p>
          </div>
          <div class="col">
            <p>${currency + unitCost}</p>
          </div>
          <div class="col">
            <input type="text" value="${count}" id="ammountValue" onkeyup="actualizarPrecio()">
          </div>
          <div class="col">
            <p id="contenedorDePrecio"><b>${valueInDollars}</b></p>
          </div>
        </div>
      </div>

      <hr/>
      <hr/>

      <h4>Tipo de envío</h4>
        <input type="radio" id="envioPremium" name="tipo_de_envio" value="envioPremium" onclick="actualizarPrecioEnvio()">
          <label for="envioPremium">Premium 2 a 5 días (15%)</label><br>
        <input type="radio" id="envioExpress" name="tipo_de_envio" value="envioExpress" onclick="actualizarPrecioEnvio()">
          <label for="envioExpress">Express 5 a 8 días (7%)</label><br>
        <input type="radio" id="envioStandard" name="tipo_de_envio" value="envioStandard" onclick="actualizarPrecioEnvio()">
          <label for="envioStandard">Standard 12 a 15 días (5%)</label>
      <br>
      <br>

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

        <hr/>

      <h4>Costos</h4>
        <div class="row border">
          <div class="col">
            <p>Subtotal</p>
            <p><small>Costo unitario del producto por cantidad</small></p>
          </div>
          <div class="col">
            <p>${valueInDollars}</p>
          </div>
        </div>
        <div class="row border">
          <div class="col">
            <p>Costo de envio</p>
            <p><small>Según el tipo de envio</small></p>
          </div>
          <div class="col">
            <p id="valorDeEnvio">${precioDeEnvio}</p>
            </div>
        </div>
        <div class="row border">
          <div class="col">
             <p>Total ($)</p>
          </div>
          <div class="col">
            <p>agregar precio total</p>
          </div>
        </div>
        <br>
      <hr/>

      <h4>Forma de Pago</h4>
        <p>No se ha seleccionado </p> 
        <button type="button" class="btn btn-link ps-0" data-bs-toggle="modal"
          data-bs-target="#modalTerminos">Seleccionar</button>
      </div>

      <button type="button" class="btn btn-primary">Finalizar compra</button> 
    `;
  document.getElementById("articulos").innerHTML = htmlContentToAppend;
}

const showUserData = async () => {
  userData = await getUserData; // destructuring de objeto y de array
  renderizarCarrito();
};

showUserData();

function actualizarPrecio() {
  const currentValue = document.getElementById("ammountValue").value;
  userData.articles[0].count = currentValue;
  renderizarCarrito();
  
  document.getElementById("ammountValue").focus();
  document.getElementById("ammountValue").setSelectionRange(currentValue.length, currentValue.length);
}

function actualizarPrecioEnvio() {
  const currentValue = document.getElementById("ammountValue").value;
  const contenedorDePrecio = document.getElementById("contenedorDePrecio").value
  
  if (document.getElementById("envioPremium").checked == true) {
    precioDeEnvio += 0,15
    console.log("Chau")
    console.log(precioDeEnvio)
  } else if (document.getElementById("envioExpress").checked == true) {
    precioDeEnvio = currentValue*0,07
  } else if (document.getElementById("envioStandard").checked == true) {
    precioDeEnvio = currentValue*0,05*contenedorDePrecio
  } else {
    precioDeEnvio = 0
  }

}

