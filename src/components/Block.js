import React, { useEffect,useContext } from 'react';
import {extractComponents} from "./ExtractComponents";
import {PBContext} from '../context-provider/PbPageContextProvider'

function Block(props) {
  const { pbData, addPbDataContent } = useContext(PBContext);

  useEffect(()=>{
    addPbDataContent(`${props.name}_visible`,props.showInitially);
  },[]);

  return (  
<div id={`pbid-${props.name}`}  ng-class='samplePage_child_1_style'  className="pb-block" style={{ display: pbData[`${props.name}_visible`] ? "block" : "none" }} > 
  { props.label && <h2 className="pb-block-label" id= {`pbid-${props.name}-label`}>{props.label}</h2>}
  { props.components && extractComponents(props.components) }
</div> 
  );
}

export default Block;
