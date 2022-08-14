    async function datos() {
        const response = await fetch('https://japceibal.github.io/emercado-api/cats_products/101.json');
        const json = await response.text();

        console.log(JSON.parse(json));
        
    }

    datos();

    document.getElementById("p1").innerHTML = datos();
    document.getElementById("p2").innerHTML = "New text!";
    document.getElementById("p3").innerHTML = "New text!";
    document.getElementById("p4").innerHTML = "New text!";