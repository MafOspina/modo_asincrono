const axios = require('axios')

const endpoint = "https://pokeapi.co/api/v2/type"

//configuracion
let config = {
    url: endpoint,
    method: 'get'
}

const f = async ()=>{
    try {
        let response = await axios(config)
        exito(response.data)
    } catch (error){
        fallo (error)
    }
}

//funcion callback; exito
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
