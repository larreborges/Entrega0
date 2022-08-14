    function loadJSON() {
        fetch('https://japceibal.github.io/emercado-api/cats_products/101.json')
    .then(function (response){
        return response.json();
    })
    .then(function(data){
console.log(data);

})

}