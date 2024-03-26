import React from "react";
import { useApp } from "../../../features/app/appSlice";

function Loading() {
  const { loading } = useApp();

  if (!loading) return null;

  return (
    <div className="preloader" style={{ marginBottom: 200 }}>
      <div className="loader">
        <div className="loader-outter"></div>
        <div className="loader-inner"></div>

        <div className="indicator" style={{ backgroundImage: "url('img/Icon-VPBank_1.png')" }}>
          <svg width={"16px"} height="12px">
            <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
            <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Loading;
