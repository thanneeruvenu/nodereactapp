const axios = require('axios');

const instance = axios.create({
    baseURL: 'BannerExtensibility/internalPb/',
    timeout: 10000
   // headers: {'X-Custom-Header': 'foobar'}
  }); 

export const list = async (uri,queryParams) =>{
    let pbResponse = null
    try{ 
        pbResponse =  await instance.get(`/${uri}`, {
        params: queryParams
    })
    .then(function (response) {
       // console.log(response);
        return response
    })
    .catch(function (error) {
        console.error(error);
    })
    .finally(function () {
        // always executed
    }); 
}catch(error){
    console.error(error);
}
return pbResponse;
}



  