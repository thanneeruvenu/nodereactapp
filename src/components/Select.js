import React, {useEffect, useContext} from 'react';
import {usePbDataSet} from '../generator/PageJScodeGenerator';
import {PBContext} from '../context-provider/PbPageContextProvider'
import { setPbPageData } from '../generator/Generator';


const Select = (props) =>  {
  const { pbData, addPbDataContent } = useContext(PBContext);
  const pbDataSet = usePbDataSet(props);

  useEffect(() => {
    addPbDataContent(`${props.name}DS`,pbDataSet.getContentCode());
    let selectDs = pbData[`${props.name}DS`];
    if(selectDs.autoPopulate) selectDs.load();
  },[]); 

  const handleChange = (event) => {
    addPbDataContent(props.name,event.target.value);
    let selectDs = pbData[`${props.name}DS`];
    setPbPageData({...pbData});
    selectDs.onUpdate(selectDs.data[event.target.selectedIndex-1]);
    setPbPageData({})
};

return(
        <div id={`pbid-${props.name}-container`} ng-class='ownerPagesBlock_options_style'  className="pb-block-item-container pb-select">
            <label className="pb-block pb-select pb-item pb-label  " id={`pbid-${props.name}-label`} htmlFor={`pbid-${props.name}`}> 
            {props.label}
             </label>
            <select
              name={props.name}
              value={props.value}
              onChange={handleChange}
              >
              <option value="">{props.placeholder}</option>
              {pbData[`${props.name}DS`] && pbData[`${props.name}DS`].data &&  pbData[`${props.name}DS`].data.map(option => {
                return (
                  <option
                    key={option[props.labelKey]+option['id']}
                    value={option[props.valueKey]}
                    label={option[props.labelKey]}>{option[props.labelKey]}
                  </option>
                );
              })}
            </select>
      </div>)
}

export default Select;