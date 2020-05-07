import React from 'react'
import Block from "./Block";
import Display from "./Display";
import Select from './Select';
import { ResourceComp } from './ResourceComp';

export function extractComponents(components) {
    return components.map((component) => {
      switch(component.type) {
        case 'resource':
          return <ResourceComp {...component} key={component.name} />
        case 'display':
          return <Display {...component} key={component.name}/>;
        case 'block':
          return <Block {...component} key={component.name}/>;
         case 'select':
          return <Select {...component} key={component.name}/>; 
        default:
          return null;
      }
    })
  } 
  