import React, { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { ContextA } from "../App";
import { useAppContext, useDeLaylink, useDelaylink } from "../core/AppProvider";
import { useAuth } from "../core/hook/useAuth";

export default function Header(/*{ sendOpenPopupLogin }*/) {
  const context = useAppContext();
  let auth = useAuth();

  let delayLink = useDeLaylink();

  let $ = window.$;
  useEffect(() => {
    $(".menu-hambeger").on("click", function () {
      $("body").toggleClass("menu-is-show");
    });

    $("#header nav ul").on("click", function (e) {
      e.stopPropagation();
    });
    $(".overlay_nav").on("click", function (e) {
      $("body").removeClass("menu-is-show");
    });

    $(document).keyup(function (e) {
      if (e.key === "Escape") {
        $("body").removeClass("menu-is-show");
      }
    });
  }, []);

  function noEffect() {
    $("body").removeClass("menu-is-show");
  }
  //   console.log(history);
  return (
    <>
      <header id="header">
        <div className="wrap">
          <div className="menu-hambeger">
            <div className="button">
              <span />
              <span />
              <span />
            </div>
            <span className="text">menu</span>
          </div>
          <Link onClick={delayLink} to="/" className="logo">
            <img src="/img/logo.svg" alt="" />
            <h1>CFD</h1>
          </Link>
          <div className="right">
            {auth.login ? (
              <div className="have-login">
                <div className="account">
                  <a href="#" className="info">
                    <div className="name">{auth.login.name}</div>
                    <div className="avatar">
                      <img src="/img/avatar-lg.jpg" alt="" />
                    </div>
                  </a>
                </div>
                <div className="hamberger"></div>
                <div className="sub">
                  <Link onClick={delayLink} to="/thong-tin-ca-nhan/khoa-hoc">
                    Khóa học của tôi
                  </Link>
                  <Link onClick={delayLink} to="/thong-tin-ca-nhan">
                    Thông tin tài khoản
                  </Link>
                  <a href="javascript:void()" onClick={auth.logout} to="/">
                    Đăng xuất
                  </a>
                </div>
              </div>
            ) : (
              <div class="not-login bg-none">
                <a
                  href="javascript:void(0)"
                  class="btn-register"
                  onClick={() => context.openPopupLogin()}
                >
                  Đăng nhập
                </a>
                <a
                  href="javascript:void(0)"
                  class="btn main btn-open-login"
                  onClick={context.openPopupRegister}
                >
                  Đăng ký
                </a>
              </div>
            )}
          </div>
        </div>
      </header>
      <nav className="nav">
        <ul>
          <li className="li_login">
            <a
              href="javascript:void(0)"
              class="btn-register"
              onClick={() => context.openPopupLogin()}
            >
              Đăng nhập
            </a>
            <a
              href="javascript:void(0)"
              class="btn main btn-open-login"
              onClick={context.openPopupRegister}
            >
              Đăng ký
            </a>
          </li>
          <li className="active">
            <Link to="/" onClick={delayLink}>
              Trang chủ
            </Link>
          </li>
          <li>
            <Link to="/team" onClick={delayLink}>
              CFD Team
            </Link>
          </li>
          <li>
            <Link to="/thong-tin-ca-nhan/khoa-hoc" onClick={delayLink}>
              Khóa Học
            </Link>
          </li>
          <li>
            <Link to="/thong-tin-ca-nhan/du-an" onClick={delayLink}>
              Dự Án
            </Link>
          </li>
          <li>
            <Link to="/lien-he" onClick={noEffect}>
              Liên hệ
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
