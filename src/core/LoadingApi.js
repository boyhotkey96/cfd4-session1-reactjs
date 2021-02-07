import React from "react";

export default function LoadingApi({ children }) {
  return (
    <div style={{ display: "flex", height: 250 }}>
      <div style={{ margin: "auto" }}>{children ? children : "...loading"}</div>
    </div>
  );
}
