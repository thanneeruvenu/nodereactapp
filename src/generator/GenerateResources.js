import { list } from '../PBResources/RestAxosService';

export let pbResource = (resourceName) =>  ({
     get : async (params) => {
        const data = await list(resourceName,params)
        .then(function (response) {
            //console.log(response);
            return response.data
        })
        .catch(function (error) {
            console.error(error);
        })
        .finally(function () {
            // always executed
        }); ;
        return data;
    }
}); 