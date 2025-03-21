import { createContext, useState } from "react";

// Create Context
export const GlobalContext = createContext();

// Create a Provider Component
export const GlobalProvider = ({ children }) => {
  const [searchedContent, setSearchedContent] = useState("songs");

  return (
    <GlobalContext.Provider value={{ searchedContent, setSearchedContent }}>
      {children}
    </GlobalContext.Provider>
  );
};