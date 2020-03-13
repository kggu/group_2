import React, { useState, useEffect, useContext } from "react";

export const BackendAPIContext = React.createContext();

export const useBackendAPI = () => useContext(BackendAPIContext);

export const BackendAPI = () => {
    return (
        <BackendAPIContext.Provider
          value={}
        >
        </BackendAPIContext.Provider>
      );
}