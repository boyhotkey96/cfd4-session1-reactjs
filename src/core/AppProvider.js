import React, { useContext } from "react";
import { BrowserRouter, useHistory } from "react-router-dom";
import { Provider } from "react-redux";
import AuthProvider from "./hook/useAuth";
import Loading from "../components/Loading";
import store from '../redux/store'

export const Context = React.createContext({});

export function AppProvider({ children, value }) {
  let history = useHistory();
  let $ = window.$;

  function delayLink(e) {
    e.preventDefault();
    // document.querySelector(".pageLoading").classList.add("active");

    let payloading = document.querySelector(".pageLoading");
    let div = payloading.querySelector(".loading");
    console.log(div);
    let scale =
      (Math.sqrt(
        Math.pow(window.outerHeight, 2) + Math.pow(window.outerWidth, 2)
      ) /
        100) *
      2;
    div.style.transform = `translate(-50%, -50%) scale(${scale})`;
    div.style.left = `${e.clientX}px`;
    div.style.top = `${e.clientY}px`;

    setTimeout(() => {
      history.push(e.target.href?.replace(window.location.origin, "") || "/");
      $("body").removeClass("menu-is-show");
    }, 300);
    setTimeout(() => {
      // document.querySelector(".pageLoading").classList.remove("active");
      div.style.transform = `translate(-50%, -50%) scale(${0})`;
    }, 600);
  }

  return (
    <Provider store={store}>
      <Context.Provider value={{ ...value, delayLink }}>
        <AuthProvider>
          <Loading />
          {children}
        </AuthProvider>
      </Context.Provider>
    </Provider>
  );
}

export default (props) => {
  return (
    <BrowserRouter>
      <AppProvider {...props} />
    </BrowserRouter>
  );
};

export function useDeLaylink() {
  return useContext(Context).delayLink;
}

export function useAppContext() {
  return useContext(Context);
}
