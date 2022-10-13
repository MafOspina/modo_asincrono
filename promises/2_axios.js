const axios = require('axios')

const endpoint = "https://pokeapi.co/api/v2/type"

let config = {
    method: 'get',
    url: endpoint
}

axios( config ).then((response)=>{ 
    return response.data.results
})
.then((results)=>{
    results.forEach(element => {
        console.log(element.name)
        console.log('***********************')
    });
})
  
.catch((error)=>{ 
    console.log(Error(`error: ${error}`))
})