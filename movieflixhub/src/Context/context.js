import React from "react";

export const AppContext = React.createContext();
const API_URL = `http://www.omdbapi.com/?apikey=e1825798&
 `
export const AppProvider = ({ children }) => {
    return <AppContext.Provider value={'Something'}>{children}</AppContext.Provider>
}