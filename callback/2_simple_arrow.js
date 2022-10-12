
//EVITA EL FUNCTION con funcion flecha

const xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest


const url = "https://pokeapi.co/api/v2/type"

//Función para conectar a una API en modo asincrono 
//cadena de caracteres, funcion de exito y fallo que se ejecutan dentro de get_data
const get_data = (endpoint, exito, fallo) => {
    //1. Crear el objeto xmlhttp
    const h = new xmlHttpRequest()

    //2. Establecer una conexión a la API - (coo en postman, pero con js)
    h.open('GET', endpoint)

    //3. Enviar la request a server(API) - send emviar sin parámetros 
    h.send()

    //4.tratar los datos de la response
    h.onload = () => {
        if(h.status === 200){
            exito(h.responseText)
        }else{
            fallo(h.status)
        }
    }
}


//funcion callback; exito
const exito = (response) => {
    //CONCVERTIR A JSON - y luego recorrer y mostrar el nombre
    const tipos = JSON.parse(response).results
    tipos.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log('------------------------------')
    });
}

//funcion callback: fallo -> se envían dentro de otra función
const fallo = (status) =>{
    console.log(status) //código del error
}

//invocar funcion
get_data(url, exito, fallo)