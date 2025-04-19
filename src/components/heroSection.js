import { styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import VideoPlayer from "./videoPlayer";
import { MainText } from "../style/theme";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import customer from "../assets/customers.png";

const ActionText = styled(Typography)(({ theme }) => ({
  color: "black",
  backgroundColor: "white",
  padding: "10px",
  cursor: "pointer",
  ":hover": {
    opacity: 0.8,
  },
}));
export default function HeroSection() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div
      className="d-flex flex-column justify-content-start align-items-center gap-5"
      style={{ width: "100%" }}
    >
      <MainText>صحة كاملة، بتغذية طبيعية آمنة</MainText>

      {/* section */}
      <div
        className={`d-flex justify-content-center align-items-center ${
          matches ? "gap-5" : "gap-3"
        }`}
      >
        <div
          className={`d-flex justify-content-center align-items-center ${
            matches ? "gap-2" : "gap-1"
          }`}
        >
          <img src={icon1} alt="icon" />
          <Typography variant="h2" textAlign={"center"}>
            اساليب تغذية آمنه
          </Typography>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-1">
          <img src={icon2} alt="icon" />
          <Typography variant="h2" textAlign={"center"}>
            %منتجات طبيعية 100
          </Typography>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-1">
          <img src={icon3} alt="icon" />
          <Typography variant="h2" textAlign={"center"}>
            متابعة مستمرة
          </Typography>
        </div>
      </div>

      {/* section */}
      <div
        className={`d-flex justify-content-center align-items-center ${
          matches ? "gap-5" : "gap-4"
        }`}
      >
        <a href="#contact-us" style={{ textDecoration: "none" }}>
          <ActionText>إستشارة مجانية</ActionText>
        </a>
        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
          <Typography maxWidth={"150px"} textAlign={"center"} fontSize={"14px"}>
            إنضم لاكثر من 20+ عميل سعيد
          </Typography>
          <img src={customer} alt="customer" />
        </div>
      </div>

      {/* section */}
      <div
        // style={{ width: "100%" }}
        className="d-flex  justify-content-center align-items-center "
      >
        <VideoPlayer />
      </div>
    </div>
  );
}
