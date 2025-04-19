import React from "react";
import { MainText } from "../style/theme";
import { useMediaQuery, useTheme } from "@mui/material";
import quotes from "../assets/quotes.svg";
import people from "../assets/people.svg";

export default function PromotionMessage() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center gap-4`}
    >
      <img src={quotes} alt="quote" width={matches ? "40px" : "60px"} />
      <MainText padding={matches ? "0 8px" : "0 240px"}>
        آهلا بصحتك الجيدة بغض النظر عن حالتك الحالية
      </MainText>
      <img src={people} alt="quote" width={matches ? "270px" : "320px"} />
    </div>
  );
}
