import React, { useState } from "react";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import logo from "../assets/logo.png";

export default function Footer() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = (text) => {
    setIsHovered(false);
    setIsClicked(true);
    navigator.clipboard.writeText(text).then(() => {
      setTimeout(() => {
        setIsClicked(false);
      }, 3000);
    });
  };

  return (
    <div
      className="d-flex justify-content-between align-items-center"
      style={{ width: "100%" }}
    >
      <img
        src={logo}
        alt="logo"
        width={matches ? "136px" : "100px"}
        height={matches ? "136px" : "100px"}
      />

      <Typography
        onClick={() => handleCopy("info@w-nutrition.com")}
        sx={{
          opacity: 0.8,
          fontSize: matches ? "20px" : "12px",
          overflow: "hidden",
        }}
        variant="h6"
      >
        info@w-nutrition.com
      </Typography>
    </div>
  );
}
