import React, { useContext } from "react";
import { useEffect } from "react";
import { Route } from "react-router";
import { ContextA } from "../App";
import { useAppContext } from "./AppProvider";
import { useAuth } from "./hook/useAuth";

export default function PrivateRouter(props) {
  // console.log("props: " + {...props})
  let auth = useAuth();
  let popupContext = useAppContext();

  useEffect(() => {
    if (!auth.login) {
      popupContext.openPopupLogin()
    }
  }, [auth.login]);

  if (auth.login) return <Route {...props} />;

  return (
    <div style={{ height: 500, display: "flex" }}>
      <p style={{ margin: "auto" }}>Bạn chưa đăng nhập để vào trang này?</p>
    </div>
  );
}
