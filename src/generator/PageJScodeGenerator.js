import {PBContext} from '../context-provider/PbPageContextProvider';
import {useContext} from 'react';
import {getPbPageData} from './Generator';

 export let usePbDataSet = (props) => {
  const { pbData,pbResourceData,setPbData } = useContext(PBContext);
   function getContentBody() {
   return {
      componentId: props.name,
      data: getResourceStaticData(props,pbResourceData),
      resource : pbData[props.sourceModel],
      queryParams: props.sourceParameters,
      autoPopulate: props.loadInitially,
      selectValueKey: props.valueKey,
      selectInitialValue: null,
      onUpdate: function(item){
        if(props.onUpdate){
            let code = props.onUpdate.includes('$') ? 
                            props.onUpdate.replace(/\$/g,'pbData.') :
                            props.onUpdate
            Function("pbData","item", code)(getPbPageData(),item);
            setPbData({...pbData, ...getPbPageData()});
        }
        },
        postQuery: function(data,response){
          // TODO
        },
        onError: function(response){
          //TODO
        },
        load: function(){
          this.resource.get(this.queryParams)
          .then(result => {
            this.data = result;
            setPbData({...pbData}) 
          })
          .catch(e => {
            console.log(e);
          });
          
          }
        }
    }

 let getContentCode = ()=> getContentBody();
 return {getContentCode}
 
}

 let getResourceStaticData = (props,pbResourceData) => {
  let content = pbResourceData[props.sourceModel]
 return content && content.staticData ?  content.staticData:  [];
}