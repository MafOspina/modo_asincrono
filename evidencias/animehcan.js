//dependencia needle
const needle = require('needle')

const endpoint = "https://animechan.vercel.app/api/random"

const f = async()=>{
    try {
       const response = await needle('get', endpoint)//retorna promesa
       console.log(response.body.anime)

    } catch (error) {
        console.log(error)
    }
}

const exito = (response) => {
    //recorrer y mostrar el nombre
    const universidades = response
    universidades.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log('------------------------------')
    });
}

//funcion callback: fallo -> se envían dentro de otra función
const fallo = (status) =>{
    console.log(status) //código del error
}


f()
