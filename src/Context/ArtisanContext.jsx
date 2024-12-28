import React, { createContext } from "react";
import datas from "../data/datas.json";

export const ArtisanContext = createContext(null);

function ArtisanContextProvider(props) {
  const contextValue = { datas };

  return (
    <ArtisanContext.Provider value={contextValue}>
      {props.children}
    </ArtisanContext.Provider>
  );
}

export default ArtisanContextProvider;
