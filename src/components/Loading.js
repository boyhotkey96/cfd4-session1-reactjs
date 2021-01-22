import React from "react";
import ReactDOM from "react-dom";
import "../assets/css/style.scss";

export default function Loading() {
  return ReactDOM.createPortal(
    <div className="pageLoading">
      <div className="loading"></div>
    </div>,
    document.getElementById("modal-root")
  );
}
