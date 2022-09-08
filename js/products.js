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

function sortCategories(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_NAME)
    {
        result = array.sort(function(a, b)
        {
            
            if ( a.name < b.name ){ return -1; }
            if ( a.name > b.name ){ return 1; }
            return 0;
        });
        
    }else if (criteria === ORDER_DESC_BY_NAME){
        result = array.sort(function(a, b) {
            if ( a.name > b.name ){ return -1; }
            if ( a.name < b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }
    console.log(result)
    return result;
    
}

const createCarCard = (carObject) => {
    
    const carCard = document.createElement('div');
    carCard.setAttribute('id', carObject.id);

    const title = document.createElement('h3');
    title.append(carObject.name + " - USD " + carObject.cost)

    const description = document.createElement('p');
    description.append(carObject.description);
    description.classList.add('description-class');

    const sold = document.createElement('p');
    sold.append(carObject.soldCount + " vendidos");
    sold.classList.add('sold-class');

    const image = document.createElement('img');
    image.src = carObject.image
    image.classList.add('imagen-class');

    carCard.appendChild(image);
    carCard.appendChild(title);
    carCard.appendChild(description);
    carCard.appendChild(sold);

    return carCard;
}

const populateCarsList = async () => {
    const carData = await getCarData;

if (carData.products) {
        const carListContainer = document.getElementById('cars-list-container');
        cars = carData.products;
        
        //for(let i = 0; i < currentCategoriesArray.length; i++){
            //let category = currentCategoriesArray[i];

        cars.forEach(function(carData) {
            carListContainer.appendChild(createCarCard(carData));
            
        })
    }
}

populateCarsList();

function pepe() {
    cars = "carData.products"
}

pepe()


const populateCatID = async () => {
    const carID = await getCarData;

    localStorage.setItem('catID', carID.catID);
}

populateCatID();


function sortAndShowCategories(sortCriteria, categoriesArray){
    currentSortCriteria = sortCriteria;
    console.log(currentSortCriteria)
    
    if(categoriesArray != undefined){
        currentCategoriesArray = categoriesArray;
    }
    
    currentCategoriesArray = sortCategories(currentSortCriteria, currentCategoriesArray);
    //Muestro las categorías ordenadas
    populateCarsList();
}

document.getElementById('sortAsc').addEventListener('click', function(){
    console.log("hola")
    sortAndShowCategories(ORDER_ASC_BY_NAME, cars);
    console.log('chau')
})

document.getElementById('sortDesc').addEventListener('click', function(){
    sortAndShowCategories(ORDER_DESC_BY_NAME);
})

document.getElementById('sortByCount').addEventListener('click', function(){
    sortAndShowCategories(ORDER_BY_PROD_COUNT);
})

document.getElementById("clearRangeFilter").addEventListener("click", function(){
    document.getElementById("rangeFilterCountMin").value = "";
    document.getElementById("rangeFilterCountMax").value = "";

    minCount = undefined;
    maxCount = undefined;

    populateCarsList();
});

function sortAndShowCategories(sortCriteria, categoriesArray){
    currentSortCriteria = sortCriteria;

    if(categoriesArray != undefined){
        currentCategoriesArray = categoriesArray;
    }

    currentCategoriesArray = sortCategories(currentSortCriteria, currentCategoriesArray);


}

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;


        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }
        populateCarsList();
    });

