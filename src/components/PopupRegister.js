import { CircularProgress } from "@material-ui/core";
import React, { useState, useRef, useContext } from "react";
import ReactDOM from "react-dom";
import { ContextA } from "../App";
import useFormValidate from "../core/hook/formValidate";
import { useAuth } from "../core/hook/useAuth";

function PopupRegister(props, ref) {
  console.log(ref);
  let context = useContext(ContextA);
  let auth = useAuth();
  let [loading, setLoading] = useState(false);
  let { form, inputChange, error, submit } = useFormValidate(
    {
      name: "",
      username: "",
      password: "",
    },
    {
      rule: {
        name: {
          required: true,
        },
        username: {
          pattern: "email",
          required: true,
        },
        password: {
          required: true,
          min: 6,
          max: 32,
        },
      },
    }
  );

  function btnSubmit(e) {
    e.preventDefault();
    let error = submit();
    if (Object.keys(error).length === 0) {
      setLoading(true);
      fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            // auth.loginAction(res.data);
            setLoading(false);
            context.closePopupRegister();
            context.openPopupLogin();
          }
        });
    }
  }

  return ReactDOM.createPortal(
    <div
      className="popup-form popup-login"
      ref={ref}
      style={{ display: "none" }}
    >
      <div className="wrap">
        <form id="login">
          <div className="ct_login" style={{ display: "block" }}>
            <h2 className="title">Đăng ký</h2>
            <input type="hidden" className="url_post" defaultValue />
            <input
              name="name"
              onChange={inputChange}
              value={form.name}
              type="text"
              placeholder="Username"
            />
            {error.name && <p className="error-text">{error.name}</p>}
            <input
              name="username"
              onChange={inputChange}
              value={form.username}
              type="text"
              placeholder="Email"
            />
            {error.username && <p className="error-text">{error.username}</p>}
            <input
              name="password"
              type="password"
              placeholder="Mật khẩu"
              onChange={inputChange}
              value={form.password}
            />
            {error.password && <p className="error-text">{error.password}</p>}
            <p className="mess-error" id="message_login" />
            <div className="remember">
              <label className="btn-remember">
                <div>
                  <input type="checkbox" />
                </div>
                <p>Nhớ mật khẩu</p>
              </label>
              <a
                href="javascript:void(0)"
                className="forget"
                onClick={context.openPopupLogin}
              >
                Đăng nhập
              </a>
            </div>
            <div
              className="btn react main btn-login btn-register"
              onClick={btnSubmit}
            >
              đăng ký
              {loading && (
                <CircularProgress size={20} style={{ marginLeft: 20 }} />
              )}
            </div>
            <div className="text-register" style={{ fontWeight: 700 }}>
              <strong>Hoặc đăng nhập bằng</strong>
            </div>
            <div>
              <div className="btn btn-login btn-google " id="googleSignIn">
                <img src="/img/google.svg" alt="" />
                Google
              </div>
              <p className="mess-error" id="message_login_by_g" />
            </div>
            <div className="close" onClick={context.closePopupRegister}>
              <img src="/img/close-icon.png" alt="" />
            </div>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default React.forwardRef(PopupRegister);
