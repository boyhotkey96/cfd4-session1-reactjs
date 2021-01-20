import React from "react";
import { Link, NavLink, useLocation, useRouteMatch } from "react-router-dom";

export default function Menu() {
  // let url = useLocation();
  let { path, url } = useRouteMatch();
  // console.log(url);

  return (
    <div className="tab-title">
      <NavLink to={`${url}`} exact>
        Thông tin tài khoản
      </NavLink>
      <NavLink to={`${url}/khoa-hoc`}>Khóa học của bạn</NavLink>
      <NavLink to={`${url}/du-an`}>Dự án đã làm</NavLink>
      <NavLink to={`${url}/lich-su-thanh-toan`}>Lịch sử thanh toán</NavLink>
      <NavLink to={`${url}/coin`}>Quản lý COIN của tôi</NavLink>
    </div>
  );
}
