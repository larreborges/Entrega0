const getCarData = fetch('https://japceibal.github.io/emercado-api/cats_products/101.json')
.then(response => response.json())
.then(response => (response))

const createCarCard = (carObject) => {
    const carCard = document.createElement('div');
    carCard.setAttribute('id', carObject.id);

    const title = document.createElement('h3');
    title.append(carObject.name)

    carCard.appendChild(title);
    
    return carCard;
}

const populateCarsList = async () => {
    const carData = await getCarData;

    if (carData instanceof Error) {
        console.error('Unable to load cars');
    } else if (carData.products) {
        const carListContainer = document.getElementById('cars-list-container');
        const cars = carData.products;
    
        cars.forEach(function(carData) {
            carListContainer.appendChild(createCarCard(carData));
        })
    }
}

populateCarsList();