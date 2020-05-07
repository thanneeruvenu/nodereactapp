import React, { createContext, useState } from "react";

export const Context = createContext({});

export const Provider = props => {
  // Initial values are obtained from the props
  const { pbData: initialPbData, pbResourceData: initialResourceData, children } = props;

  // Use State to keep the values
  const [pbData, setPbData] = useState(initialPbData);

  const [pbResourceData, setPbResourceData] = useState(initialResourceData);

  const addPbDataContent = (key, value) => {
    pbData[key] = value;
    setPbData({ ...pbData });
  };

  const getPbDataContent = () => {
      return pbData;
  }

  const addPbResourceData = (key, value) => {
    pbResourceData[key]=value;
    setPbResourceData({...pbResourceData})
}

  // Make the context object:
  const pbContext = {
    pbData,
    setPbData,
    getPbDataContent,
    addPbDataContent,
    pbResourceData,
    setPbResourceData,
    addPbResourceData
  };

  // pass the value in provider and return
  return <Context.Provider value={pbContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

export {
  Context as PBContext,
  Provider as PBContextProvider,
  Consumer as PBContextConsumer
};
Provider.defaultProps = {
  pbData: {},
  pbResourceData: {}
};
