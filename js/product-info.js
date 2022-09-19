let objeto = localStorage.getItem('catID');
let url1 = 'https://japceibal.github.io/emercado-api/products/'
let url2 = 'https://japceibal.github.io/emercado-api/products_comments/'
let terminacion = '.json'
let link1 = url1 + objeto + terminacion
let link2 = url2 + objeto + terminacion

const getCarData = fetch(link1)
.then(response => response.json())
.then(response => (response))

const getCommentData = fetch(link2)
.then(response => response.json())
.then(response => (response))

let cars = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;

    const showCategoriesList = async () => {
        const carData = await getCarData;
            cars = carData
            carsImages = cars.images
            carsRelated = cars.relatedProducts
            let htmlContentToAppend = "";
            let htmlContentToAppend3 = ""

            if (true){
            htmlContentToAppend += `
            <div>
                <h2>${cars.name}</h2>
                    <p><b>Precio</b></p>
                        <p>${cars.currency} ${cars.cost}</p>
                    <p><b>Descripción</b></p>
                        <p>${cars.description} </p>
                    <p><b>Categoría</b></p>
                        <p>${cars.category} </p>
                    <p><b>Cantidad de vendidos</b></p>
                        <p>${cars.soldCount} </p>
                    <p><b>Imágenes ilustrativas</b></p>
            </div>
            `
        }
            for(let i=0; i < carsImages.length; i++){
                let carImages = carsImages[i]
            if (true){
                htmlContentToAppend += `
                        <div>
                            <img src="${carImages}" class="img-thumbnail imagen-class2">
                        </div>
                        `
                    }
                }    

                for(let i=0; i < carsRelated.length; i++){
                    let hola = carsRelated[i] 
                    htmlContentToAppend3 += `
                    <div onclick="setCatID(${hola.id})" class="list-group-item list-group-item-action cursor-active">
                        <img src="${hola.image}" class="img-thumbnail imagen-class2">
                        <p>${hola.name}</p>
                    </div>
                    `
                }

                document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
                document.getElementById("chausote").innerHTML = htmlContentToAppend3;
        }   

    showCategoriesList();

    const showCategoriesList2 = async () => {
        const commentsData = await getCommentData;
            let comments = commentsData
            let htmlContentToAppend2 = ""; 

            if (true) {
                htmlContentToAppend2 += `
                <h3>Comentarios</h3>
                `
            }

            for(let i=0; i < comments.length; i++)   {         
                let comments = commentsData[i]
                htmlContentToAppend2 += `
                    <p><b>${comments.user}</b> ${comments.dateTime}</p>
                    `

                    for (let index = 0; index < comments.score; index++) {
                        htmlContentToAppend2 += `
                        <span class="fa fa-star checked"></span>
                        `
                    }

                    for (let index = comments.score; index < 5; index++) {
                        htmlContentToAppend2 += `
                        <span class="fa fa-star"></span>
                        `
                    }

                    htmlContentToAppend2 += `
                    <p>${comments.description}</p>
                    `
                }

                    htmlContentToAppend2 += `
                    <h3>Comentar</h3>
                    <p>Tu opinion:</p>
                        <input>
                    <p>Tu puntuación:</p>
                    <input type="number" min="0" max="5" />
                    <button>Enviar</button>
                    `   

                    htmlContentToAppend2 += `
                    <h3>Productos relacionados</h3>
                    `

                document.getElementById("chausito").innerHTML = htmlContentToAppend2;
                
        }
            
    showCategoriesList2();

    function setCatID(id) {
        localStorage.setItem("catID", id);
        window.location = "product-info.html"
    }

    function titular() {
        var cat = JSON.parse(localStorage.getItem('username'));
        let dropdown = `<div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          ${cat}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
          <li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
          <li><a class="dropdown-item" href="login.html">Cerrar sesión</a></li>
        </ul>
      </div>
      `

        document.getElementById("userName").innerHTML = dropdown

    }
    titular();