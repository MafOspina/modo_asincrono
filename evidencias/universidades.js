//dependencia needle
const needle = require('needle')

const endpoint = "https://restcountries.com/v3.1/all"

const f = async()=>{
    try {
       const response = await needle('get', endpoint)//retorna promesa
        response.body.forEach(pais=> {
            console.log(pais.name.common)
            console.log('____________________________________________')
        })
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
