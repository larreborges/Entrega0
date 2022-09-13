const getCarData = fetch('https://japceibal.github.io/emercado-api/cats_products/101.json')
.then(response => response.json())
.then(response => (response))

const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";
let cars = [];
let currentCategoriesArray = []; //cambiar cars por currentCategoriesArray
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;
let objeto = localStorage.getItem('catID');

console.log(objeto)

    const showCategoriesList = async () => {
        const carData = await getCarData;
            cars = carData.products
        let htmlContentToAppend = "";
        for(let i = 0; i < cars.length; i++){
            let category = cars[i]; 
    
            if (((minCount == undefined) || (minCount != undefined && parseInt(category.productCount) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(category.productCount) <= maxCount))){
    
                htmlContentToAppend += `
                <div onclick="setCatID(${category.id})" class="list-group-item list-group-item-action cursor-active">
                    <div class="row">
                        <div class="col-3">
                            <img src="${category.image}" alt="${category.description}" class="img-thumbnail">
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">${category.name}</h4>
                                <small class="text-muted">${category.soldCount} artículos</small>
                            </div>
                            <p class="mb-1">${category.description}</p>
                        </div>
                    </div>
                </div>
                `
            }
    
            document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
        }
    }

    showCategoriesList();

    function sortAndShowCategories(sortCriteria, categoriesArray){
        currentSortCriteria = sortCriteria;
        console.log(currentSortCriteria)
        
        if(categoriesArray != undefined){
            cars = categoriesArray;
        }
        cars = sortCategories(currentSortCriteria, cars);
        showCategoriesList();
    }