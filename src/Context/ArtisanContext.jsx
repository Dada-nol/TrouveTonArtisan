import React, { createContext } from "react";
import datas from "../Data/datas.json";

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
