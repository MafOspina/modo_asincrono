//npm request

const request =  require('request')

const url = "https://pokeapi.co/api/v2/type"

let r = request(url, {json: true}, 
                function( error, response, body ){
    const tipos = response.body.results
    tipos.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log('------------------------------')
    });
})