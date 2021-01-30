import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import React, { useRef, useContext } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Detail from "./pages/detail";
import Page404 from "./pages/page404";
import Register from "./pages/register";
import Loading from "./components/Loading";
import PopupLogin from "./components/PopupLogin";
import AuthProvider from "./core/hook/useAuth";
import PrivateRouter from "./core/PrivateRouter";
import PopupRegister from "./components/PopupRegister";

export const ContextA = React.createContext();
export const ContextB = React.createContext();

export default function App() {
  let refLogin = useRef();
  let refRegister = useRef();
  // console.log(refLogin)

  function openPopupRegister() {
    refLogin.current.style.display = "none";
    refRegister.current.style.display = "flex";
  }

  function closePopupRegister() {
    refRegister.current.style.display = "none";
  }

  function openPopupLogin() {
    refRegister.current.style.display = "none";
    refLogin.current.style.display = "flex";
  }

  function closePopupLogin() {
    refLogin.current.style.display = "none";
  }

  return (
    <AuthProvider>
      <ContextB.Provider>
        <ContextA.Provider
          value={{
            openPopupLogin: openPopupLogin,
            closePopupLogin,
            openPopupRegister,
            closePopupRegister: closePopupRegister,
          }}
        >
          <BrowserRouter>
            <Loading />
            <PopupLogin
              ref={refLogin} /*sendClosePopupLogin={closePopupLogin}*/
            />
            <PopupRegister ref={refRegister} />
            <Header /*sendOpenPopupLogin={openPopupLogin}*/ />
            <Switch>
              <Route
                path="/"
                exact
                component={() => (
                  <Home /*transmitOpenPopupLogin={openPopupLogin}*/ />
                )}
              />
              <PrivateRouter path="/thong-tin-ca-nhan" component={Profile} />
              <Route path="/chi-tiet/:slug" exact component={Detail} />
              <PrivateRouter path="/dang-ky/:slug" exact component={Register} />
              <Route component={Page404} />
              {/* <Redirect from='*' to='/404' /> */}
            </Switch>
            <Footer />
          </BrowserRouter>
        </ContextA.Provider>
      </ContextB.Provider>
    </AuthProvider>
  );
}
