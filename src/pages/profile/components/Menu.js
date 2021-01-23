import React from "react";
import { Link, NavLink, useLocation, useRouteMatch } from "react-router-dom";

export default function Menu() {
  // let url = useLocation();
  let { path, url } = useRouteMatch();
  // console.log(url);

  function delayLink(e) {
    // e.preventDefault();
    let $ = window.$;
      $("body").removeClass("menu-is-show");
  }

  return (
    <div className="tab-title">
      <NavLink to={`${url}`} exact onClick={delayLink} >
        Thông tin tài khoản
      </NavLink>
      <NavLink to={`${url}/khoa-hoc`} onClick={delayLink}>Khóa học của bạn</NavLink>
      <NavLink to={`${url}/du-an`} onClick={delayLink}>Dự án đã làm</NavLink>
      <NavLink to={`${url}/lich-su-thanh-toan`} onClick={delayLink}>Lịch sử thanh toán</NavLink>
      <NavLink to={`${url}/coin`} onClick={delayLink}>Quản lý COIN của tôi</NavLink>
    </div>
  );
}
