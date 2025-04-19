import React from "react";
import { MainText } from "../style/theme";
import { Box, styled, Typography } from "@mui/material";
import course1 from "../assets/course1.png";

const VideoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "30%",
  gap: "4px",
  [theme.breakpoints.up("md")]: {
    marginBottom: "16px",
  },
}));

const VideoTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: "400px",
  fontSize: "16px",
  [theme.breakpoints.up("md")]: {
    fontSize: "24px",
  },
}));
const VideoDescription = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "8px",
  [theme.breakpoints.up("md")]: {
    fontSize: "12px",
    padding: "0 24px",
  },
}));

export default function ExplinationVideos() {
  const courseDtailes = [
    {
      imgURL: course1,
      title: "دورس تنظيف الكبد",
      description:
        "كورس متكامل لعلاج جميع مشاكل الكبد من تليفات، تراكم دهون الخ",
    },
    {
      imgURL: course1,
      title: "دورس تنظيف الكبد",
      description:
        "كورس متكامل لعلاج جميع مشاكل الكبد من تليفات، تراكم دهون الخ",
    },
    {
      imgURL: course1,
      title: "دورس تنظيف الكبد",
      description:
        "كورس متكامل لعلاج جميع مشاكل الكبد من تليفات، تراكم دهون الخ",
    },
    {
      imgURL: course1,
      title: "دورس تنظيف الكبد",
      description:
        "كورس متكامل لعلاج جميع مشاكل الكبد من تليفات، تراكم دهون الخ",
    },
  ];
  return (
    <div className="d-flex flex-column gap-5 align-items-center ">
      <MainText>تغذية عقلية</MainText>
      <div className="d-flex flex-wrap justify-content-around gap-3">
        {courseDtailes.map((el) => (
          <VideoContainer>
            <div style={{ width: "100%" }}>
              <img
                src={el.imgURL}
                alt="course"
                width={"100%"}
                height={"100%"}
                style={{
                  borderRadius: "8px",
                }}
              />
            </div>
            <VideoTitle>{el.title}</VideoTitle>
            <VideoDescription>{el.description}</VideoDescription>
          </VideoContainer>
        ))}
      </div>

      <Typography
        variant="p"
        sx={{
          padding: " 8px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          },
        }}
      >
        +شاهد المزيد
      </Typography>
    </div>
  );
}
