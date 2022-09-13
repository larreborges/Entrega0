const getCarData = fetch('https://japceibal.github.io/emercado-api/products/50921.json')
.then(response => response.json())
.then(response => (response))

const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";
let cars = [];
let currentCategoriesArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;
let objeto = localStorage.getItem('catID');

console.log(objeto)

    const showCategoriesList = async () => {
        const carData = await getCarData;
            cars = carData
        let htmlContentToAppend = "";
    
            if (true){
                htmlContentToAppend += `
                <h2>${cars.name}</h2>
                <div onclick="setCatID(${cars.id})" class="list-group-item list-group-item-action cursor-active">
                    <div class="row">
                        <div class="col-3">
                            <img src="${cars.images}" alt="${cars.description}" class="img-thumbnail">
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">${cars.name}</h4>
                                <small class="text-muted">${cars.soldCount} artículos</small>
                            </div>
                            <p class="mb-1">${cars.description}</p>
                        </div>
                    </div>
                </div>
                `
            }
    
            document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
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