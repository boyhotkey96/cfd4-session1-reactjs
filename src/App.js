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
import AuthProvider from "./hook/useAuth";

export const ContextA = React.createContext();

export default function App() {
  let refLogin = useRef();
  // console.log(refLogin)

  function openPopupLogin() {
    refLogin.current.style.display = "flex";
  }

  function closePopupLogin() {
    refLogin.current.style.display = "none";
  }

  return (
    <AuthProvider>
      <ContextA.Provider
        value={{
          openPopupLogin: openPopupLogin,
          closePopupLogin,
          test: "test",
        }}
      >
        <BrowserRouter>
          <Loading />
          <PopupLogin
            ref={refLogin} /*sendClosePopupLogin={closePopupLogin}*/
          />
          <Header /*sendOpenPopupLogin={openPopupLogin}*/ />
          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <Home /*transmitOpenPopupLogin={openPopupLogin}*/ />
              )}
            />
            <Route path="/thong-tin-ca-nhan" component={Profile} />
            <Route path="/chi-tiet/:id" component={Detail} />
            <Route path="/dang-ky" component={Register} />
            <Route component={Page404} />
            {/* <Redirect from='*' to='/404' /> */}
          </Switch>
          <Footer />
        </BrowserRouter>
      </ContextA.Provider>
    </AuthProvider>
  );
}
