import { useEffect,useContext } from "react"
import {pbResource} from "../generator/GenerateResources";
import {PBContext} from '../context-provider/PbPageContextProvider'

export const ResourceComp = (props) => {
    const { addPbResourceData, addPbDataContent } = useContext(PBContext);
    useEffect(() => {
        addPbResourceData(props.name, props);
        if(props.staticData instanceof Array && props.resource){
            addPbDataContent(props.name, pbResource(`${props.resource}`))
          }

    },[]);

    return null;
} 

