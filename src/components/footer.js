import React, { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import logo from "../assets/logo.png";
import { ShowMessage } from "../style/theme";

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
      <Box
        sx={{ direction: "ltr", cursor: "pointer", position: "relative" }}
        onClick={() => handleCopy("info@w-nutrition.com")}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && <ShowMessage>اضغط للنسخ</ShowMessage>}
        {isClicked && <ShowMessage>تم النسخ</ShowMessage>}
        <Typography
          sx={{
            opacity: 0.8,
            fontSize: matches ? "20px" : "12px",
            overflow: "hidden",
            cursor: "pointer",
            position: "relative",
          }}
          variant="h6"
        >
          info@w-nutrition.com
        </Typography>
      </Box>
    </div>
  );
}
