import React from 'react';
import {extractComponents} from './ExtractComponents';
import ControlledDropdownExample from '../resource/EdsTest'
import { EDSApplication, Typography } from '@hedtech/react-design-system/core';
import {PBContextProvider } from "../context-provider/PbPageContextProvider";


function BodyContent(props) {
  return (
    <PBContextProvider>
    <div id="content"  className="customPage container-fluid">
       { props.label &&  <h1 id={`pbid-${props.name}label`}> {props.label} </h1> }
       { extractComponents(props.components) }
       <EDSApplication>
            <Typography>Hello World</Typography>
            <ControlledDropdownExample/>

        </EDSApplication>
      </div>
      </PBContextProvider>

     );
}

export default BodyContent;
