const getUserData = fetch(
  "https://japceibal.github.io/emercado-api/user_cart/25801.json"
)
  .then((response) => response.json())
  .then((response) => response);

let userData;

function renderizarCarrito() {
  if (!userData) return;
  const { name, unitCost, count, currency, image } = userData.articles[0];
  let valueInDollars = count * unitCost;
  valueInDollars =
    currency +
    valueInDollars.toLocaleString("en-US", { minimumFractionDigits: 2 });

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
        <hr/>
        <div class="row">
          <div class="col">
            <img src="${image}" width="100">
          </div>
          <div class="col">
            <li>${name}</li>
          </div>
          <div class="col">
            <li>${currency + unitCost}</li>
          </div>
          <div class="col">
            <input type="text" value="${count}" id="ammountValue" onkeyup="actualizarPrecio()">
          </div>
          <div class="col">
            <li><b>${valueInDollars}</b></li>
          </div>
        </div>
      </div>

      <hr/>
      <hr/>

      <h4>Tipo de envío</h4>
        <input type="radio" id="html" name="fav_language" value="HTML">
          <label for="html">Premium 2 a 5 días (15%)</label><br>
        <input type="radio" id="css" name="fav_language" value="CSS">
          <label for="css">Express 5 a 8 días (7%)</label><br>
        <input type="radio" id="javascript" name="fav_language" value="JavaScript">
          <label for="javascript">Standard 12 a 15 días (5%)</label>
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

  console.log("Hola");
  renderizarCarrito();
  document
    .getElementById("ammountValue")
    .setSelectionRange(currentValue.length, currentValue.length)
    .focus();
}
