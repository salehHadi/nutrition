import React from "react";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import facetime from "../assets/facetime.svg";
import Ellipse from "../assets/Ellipse.svg";

export default function OurFeatures() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      className="d-flex flex-wrap justify-content-between align-items-center gap-5 "
      style={{ direction: "rtl", marginBottom: "40px" }}
    >
      <div
        className="d-flex flex-column justify-content-start align-items-start gap-2"
        style={{ width: matches ? "100%" : "40%" }}
      >
        <div
          style={{ width: "100%" }}
          className="d-flex justify-content-start align-items-center gap-2"
        >
          <img
            src={facetime}
            alt="div"
            width={"50px"}
            height={"50px"}
            style={{
              borderRadius: "8px",
            }}
          />
          <h1
            style={{
              fontSize: matches ? "20px" : "28px",
            }}
          >
            المتابعة بالتواصل المباشر ..
          </h1>
        </div>
        <h2
          style={{
            fontSize: matches ? "16px" : "20px",
            opacity: "0.8",
          }}
        >
          المتابعة من خلال المكالمات بمواعيد مسبقة / الرسائل المباشرة على الواتس
          اب.
        </h2>
      </div>

      <div
        className="d-flex flex-column justify-content-start align-items-start gap-2"
        style={{
          width: matches ? "100%" : "40%",
          padding: "12px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "8px",
        }}
      >
        <h1
          style={{
            fontSize: matches ? "18px" : "20px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "8px",
            borderRadius: "4px",
          }}
        >
          يتضمن هذا التواصل:{" "}
        </h1>
        <div
          className="d-flex justify-content-center align-items-center gap-2"
          style={{
            fontSize: matches ? "20px" : "28px",
          }}
        >
          <img
            src={Ellipse}
            alt="circle"
            style={{
              width: matches ? "15px" : "18px",
            }}
          />
          <Typography variant="h2">
            شرحا لجميع الاسئلة المتعلقة بالحالة.
          </Typography>
        </div>
        <div
          className="d-flex justify-content-center align-items-center gap-2"
          style={{
            fontSize: matches ? "20px" : "28px",
          }}
        >
          <img
            src={Ellipse}
            alt="circle"
            style={{
              width: matches ? "15px" : "18px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          />
          <Typography variant="h2">تقييم الوضع الراهن. </Typography>
        </div>
        <div
          className="d-flex justify-content-center align-items-center gap-2"
          style={{
            fontSize: matches ? "20px" : "28px",
          }}
        >
          <img
            src={Ellipse}
            alt="circle"
            style={{
              width: matches ? "15px" : "18px",
            }}
          />
          <Typography variant="h2">وضع خطة للمرحلة التالية.</Typography>
        </div>
      </div>
    </div>
  );
}
