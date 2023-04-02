import { createContext, useContext, useState } from "react";

const Statecontext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <Statecontext.Provider
      value={{
        activeMenu: activeMenu,
        setActiveMenu: setActiveMenu,
      }}
    >
      {children}
    </Statecontext.Provider>
  );
};

export const useStateContext = () => useContext(Statecontext);
