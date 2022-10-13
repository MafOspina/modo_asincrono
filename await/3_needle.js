//dependencia needle
const needle = require('needle')

const endpoint = "https://pokeapi.co/api/v2/type"

const f = async()=>{
    try {
       const response = await needle('get', endpoint)//retorna promesa
       exito(response.body)
    } catch (error) {
        fallo(error)
    }
}

const exito = (response) => {
    //recorrer y mostrar el nombre
    const tipos = response.results
    tipos.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log('------------------------------')
    });
}

//funcion callback: fallo -> se envían dentro de otra función
const fallo = (status) =>{
    console.log(status) //código del error
}


f()

