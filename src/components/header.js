import { Box, styled, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/logo.png";

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "80px",
  height: "80px",
  [theme.breakpoints.up("sm")]: {
    width: "95px",
    height: "95px",
  },
  [theme.breakpoints.up("md")]: {
    width: "110px",
    height: "110px",
  },
}));

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <ImageContainer>
        <img src={logo} alt="logo" width="100%" height="100%" />
      </ImageContainer>

      <div className="d-flex justify-content-between align-items-center gap-3">
        <a
          href="#contact-us"
          style={{ textDecoration: "none", color: "white" }}
        >
          <Typography variant="h1">إستشارة مجانية</Typography>
        </a>
        <Typography
          variant="h1"
          className="p-2 px-3 border rounded-pill"
          sx={{
            cursor: "pointer",
            ":hover": {
              backgroundColor: "rgba(255,255,255,0.1)",
            },
          }}
        >
          تسجيل الدخول
        </Typography>
      </div>
    </div>
  );
}
