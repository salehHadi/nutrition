import { Box, styled, Typography } from "@mui/material";
import React from "react";
import starts from "../assets/starts.svg";

const ReviewContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  marginTop: "-60px",
  [theme.breakpoints.up("md")]: {
    padding: "0 150px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "0 220px",
  },
}));

const ReviewDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  maxWidth: "140px",
}));
const ImageDiv = styled(Box)(({ theme }) => ({
  width: "80px",
  [theme.breakpoints.up("md")]: {
    width: "90px",
  },
}));

export default function HeroSection() {
  return (
    <ReviewContainer>
      <ReviewDiv className="d-flex flex-column justify-content-center align-items-center gap-1">
        <ImageDiv>
          <img src={starts} alt="start" width="100%" height="100%" />
        </ImageDiv>
        <Typography variant="h2" className="text-center">
          الام ركبي تعافت، ووزني نزل بطريقة طبيعية بدون ترهلات
        </Typography>
      </ReviewDiv>
      <ReviewDiv className="d-flex flex-column justify-content-center align-items-center gap-1">
        <ImageDiv>
          <img src={starts} alt="start" width="100%" height="100%" />
        </ImageDiv>
        <Typography variant="h2" className="text-center">
          الام ركبي تعافت، ووزني نزل بطريقة طبيعية بدون ترهلات
        </Typography>
      </ReviewDiv>
      <ReviewDiv className="d-flex flex-column justify-content-center align-items-center gap-1">
        <ImageDiv>
          <img src={starts} alt="start" width="100%" height="100%" />
        </ImageDiv>
        <Typography variant="h2" className="text-center">
          الام ركبي تعافت، ووزني نزل بطريقة طبيعية بدون ترهلات
        </Typography>
      </ReviewDiv>
    </ReviewContainer>
  );
}
