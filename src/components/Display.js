import React from 'react';

function Display(props) {
  return (
    <div id= {`pbid-${props.name}-container`} ng-class={`${props.name}_style`} className="pb-page-item-container pb-display">
        
        <label className="pb-page  pb-display pb-item pb-label" id= {`pbid-${props.name}-label`} htmlFor= {`pbid-${props.name}`}>
           {props.label} 
        </label>
        
        <span id={`pbid-${props.name}`} className="pb-page pb-display pb-item" > {props.value} </span>
    </div>
  );
}

export default Display;
