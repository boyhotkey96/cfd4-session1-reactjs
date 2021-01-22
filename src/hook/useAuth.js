import React, { useContext } from "react";

const Context = React.createContext({});

export default function AuthProvider({ children }) {
  let login = {
    name: 'Phùng Bá Dự'
  };

  return <Context.Provider value={{login}}>{children}</Context.Provider>;
}

export function useAuth() {
  return useContext(Context);
}
