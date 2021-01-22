import React, { useContext } from "react";
import { ContextA } from "../../../App";

export default function Form(/*{transmitOpenPopupLogin}*/) {
  let context = useContext(ContextA);

  return (
    <section className="section-action">
      <div className="container">
        <h3>
          Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?
        </h3>
        <div className="btn main round bg-white">Đăng ký</div>
        <br />
        <button
          className="btn main round bg-white"
          onClick={/*transmitOpenPopupLogin*/ context.openPopupLogin}
          style={{ marginTop: 10 }}
        >
          Đăng nhập
        </button>
      </div>
    </section>
  );
}
