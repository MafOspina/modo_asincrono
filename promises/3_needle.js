//dependencia needle
const needle = require('needle')

const endpoint = "https://pokeapi.co/api/v2/type"


//needle trae demasiadsa información
needle('get', endpoint)
.then((response)=>{
    return response.body.results
})
//iteración para mostrar todos los tipos
.then((tipos_pokemon)=>{
    tipos_pokemon.forEach(element => {
        console.log(element.name)
        console.log('***********************')
    });
})
.catch((error)=>{
    console.log(error)
})