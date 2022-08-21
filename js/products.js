const getCarData = fetch('https://japceibal.github.io/emercado-api/cats_products/101.json')
.then(response => response.json())
.then(response => (response))

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
        const cars = carData.products;
        cars.forEach(function(carData) {
            carListContainer.appendChild(createCarCard(carData));
        })
    }
}

populateCarsList();

