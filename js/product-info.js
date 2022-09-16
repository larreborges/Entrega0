const getCarData = fetch('https://japceibal.github.io/emercado-api/products/50921.json')
.then(response => response.json())
.then(response => (response))

const getCommentData = fetch('https://japceibal.github.io/emercado-api/products_comments/50921.json')
.then(response => response.json())
.then(response => (response))

const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";
let cars = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;
let objeto = localStorage.getItem('catID');
console.log(objeto)

    const showCategoriesList = async () => {
        const carData = await getCarData;
            cars = carData
            carsImages = cars.images
            let htmlContentToAppend = "";

            if (true){
            htmlContentToAppend += `
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
            `
        }
            for(let i=0; i < carsImages.length; i++){
                let carImages = carsImages[i]
            if (true){
                htmlContentToAppend += `
                    
                        <img src="${carImages}">
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

            if (true) {
                htmlContentToAppend2 += `
                <h3>Comentarios</h3>
                `
            }

            for(let i=0; i < comments.length; i++)   {         
                let comments = commentsData[i]
                htmlContentToAppend2 += `
                
                    <p><b>${comments.user}</b> ${comments.dateTime} ${comments.score}</p>
                    <p>${comments.description} </p>
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

    