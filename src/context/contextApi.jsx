import { createContext, useState } from "react";

export const contextData = createContext();

export const ContextProvider = ({ children }) => {

      const [search, setSearch] = useState("");

      return <contextData.Provider value={{search, setSearch}}>
            {children}
      </contextData.Provider>
}