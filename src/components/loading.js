import React from "react";
import logoImg from "../assets/svgLogo.svg";

export const Loading = () => {
  return (
    <div className="loading-page">
      <img className="svg" src={logoImg} alt="logo" />
    </div>
  );
};
