import React from "react";
import { MainText } from "../style/theme";
import {
  Box,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import starts from "../assets/starts.svg";
import char1 from "../assets/char1.png";
import char2 from "../assets/char2.png";
import char3 from "../assets/char3.png";

const CommentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  flexDirection: "column",
  width: "140px",
  height: "200px",
  [theme.breakpoints.up("md")]: {
    width: "30%",
    height: "170px",
  },
}));

const CustomerDetailes = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  alignItems: "start",
  gap: "8px",
  width: "100%",
}));

const NameContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
  flexDirection: "column",
  width: "100%",
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "10px",
  lineHeight: "2",
  letterSpacing: "0.5px",
  [theme.breakpoints.up("md")]: {
    fontSize: "12px",
  },
}));

export default function FullReivews() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center gap-3"
      style={{
        direction: "rtl",
      }}
    >
      <MainText dir="rtl">آراء العملاء .. </MainText>
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 ">
        <CommentContainer>
          <CustomerDetailes>
            <NameContainer>
              <Typography variant="h6">ام فهد</Typography>
              <img src={starts} alt="rating" width={matches ? "50%" : "30%"} />
            </NameContainer>

            <img src={char1} alt="person" width={matches ? "50%" : "30%"} />
          </CustomerDetailes>
          <Text>
            ولدي كان يعاني من الصدفية فالجلد، كان يحك جلده لدرجة ينزل الدم،
            <span style={{ color: "#FFD799" }}>
              بفضل الله ثم خطة المكملات، تعافى ولدي من الصدفية و وزنه زاد.
            </span>
          </Text>
        </CommentContainer>

        <CommentContainer>
          <CustomerDetailes>
            <NameContainer>
              <Typography variant="h6">صالح ابوره</Typography>
              <img src={starts} alt="rating" width={matches ? "50%" : "30%"} />
            </NameContainer>

            <img src={char2} alt="person" width={matches ? "30%" : "30%"} />
          </CustomerDetailes>
          <Text>
            انا مهندس برمجات و اعاني بشدة من التعب الذهني و صعوبة فالنوم بفضل
            الله ثم{" "}
            <span style={{ color: "#FFD799" }}>
              بخطة المكملات، نومي سار اعمق، نشاطي اكبر و عضلاتي مبنية و متزنه.{" "}
            </span>
          </Text>
        </CommentContainer>

        <CommentContainer>
          <CustomerDetailes>
            <NameContainer>
              <Typography variant="h6">سلوئ عبيد</Typography>
              <img src={starts} alt="rating" width={matches ? "50%" : "30%"} />
            </NameContainer>

            <img src={char3} alt="person" width={matches ? "50%" : "30%"} />
          </CustomerDetailes>
          <Text>
            بسبب وزني الزايد و عدم ممارسة الرياضه بإنتظام كنت اعاني من الام
            فالركب و بفضل الله ثم الخطه العلاجية،{" "}
            <span style={{ color: "#FFD799" }}>
              الام ركبي تعافت، ووزني نزل بطريقة طبيعية بدون ترهلات.{" "}
            </span>
          </Text>
        </CommentContainer>
      </div>
    </div>
  );
}
