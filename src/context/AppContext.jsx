import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider=({ children }) =>{
  const [role, setRole] = useState("viewer");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <AppContext.Provider value={{ role, setRole,darkMode, setDarkMode }}>
      {children}
    </AppContext.Provider>
  );
}