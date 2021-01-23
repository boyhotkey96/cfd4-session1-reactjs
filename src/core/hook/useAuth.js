import React, { useContext, useState } from "react";

const Context = React.createContext();
let loginStorage = null;

try {
  loginStorage = JSON.parse(localStorage.getItem("login"));
} catch (error) {}

export default function AuthProvider({ children }) {
  let [login, setLogin] = useState(loginStorage);

  function loginAction(data) {
    if (data) {
      localStorage.setItem("login", JSON.stringify(data));
      setLogin(data);
    }
  }

  function logout() {
    localStorage.removeItem("login");
    setLogin(null);
  }

  return (
    <Context.Provider value={{ login, loginAction, logout }}>
      {children}
    </Context.Provider>
  );
}

export function useAuth() {
  return useContext(Context);
}
