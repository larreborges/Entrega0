let objeto = localStorage.getItem('catID');
let url1 = 'https://japceibal.github.io/emercado-api/products/'
let url2 = 'https://japceibal.github.io/emercado-api/products_comments/'
let terminacion = '.json'
let link1 = url1 + objeto + terminacion
let link2 = url2 + objeto + terminacion
console.log(objeto)

const getCarData = fetch(link1)
.then(response => response.json())
.then(response => (response))

const getCommentData = fetch(link2)
.then(response => response.json())
.then(response => (response))

const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";
let cars = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;

    const showCategoriesList = async () => {
        const carData = await getCarData;
            cars = carData
            carsImages = cars.images
            let htmlContentToAppend = "";

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
                        <div style="float:left;">
                            <img src="${carImages}" class="img-thumbnail imagen-class2">
                        </div>
                        `
                    }
                }    
                document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
        }
            

    showCategoriesList();

    const showCategoriesList2 = async () => {
        const commentsData = await getCommentData;
            let comments = commentsData
            let htmlContentToAppend2 = ""; 
            let htmlContentToAppend3 = "";

            if (true) {
                htmlContentToAppend2 += `
                <h3>Comentarios</h3>
                `
            }

            for(let i=0; i < comments.length; i++)   {         
                let comments = commentsData[i]

                htmlContentToAppend2 += `
                
                    <p><b>${comments.user}</b> ${comments.dateTime}</p>`

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

                if (true) {
                    htmlContentToAppend2 += `
                    <h3>Comentar</h3>
                    <p>Tu opinion:</p>
                        <input>
                    <p>Tu puntuación:</p>
                    <input type="number" min="0" max="5" />
                    <button>Enviar</button>
                    `
                }

                document.getElementById("chausito").innerHTML = htmlContentToAppend2;
                
        }
            
    showCategoriesList2();

    function sortAndShowCategories(sortCriteria, categoriesArray){
        currentSortCriteria = sortCriteria;
        console.log(currentSortCriteria)
        
        if(categoriesArray != undefined){
            cars = categoriesArray;
        }
        cars = sortCategories(currentSortCriteria, cars);
        showCategoriesList();
        showCategoriesList2();
    }

