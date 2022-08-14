async function datos() {
    const response = await fetch('https://japceibal.github.io/emercado-api/cats_products/101.json');
    const json = await response.text();

    console.log(JSON.parse(json));
    
}

datos();