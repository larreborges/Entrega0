fetch('https://japceibal.github.io/emercado-api/cats_products/101.json')
.then(res => res.json())
.then(data => {
    console.log(data);
        document.getElementById("p1").innerHTML = "hola";
        data.forEach(element => console.log(element));
})


document.getElementById("p2").innerHTML = "pepito"

