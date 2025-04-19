import React from "react";
import { MainText } from "../style/theme";
import { Box, styled, Typography } from "@mui/material";
// import course1 from "../assets/course1.png";
import course2 from "../assets/course2.png";
import course3 from "../assets/course3.png";
import course4 from "../assets/course4.png";
import course5 from "../assets/course5.png";

const CourseContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "45%",
  gap: "4px",
  marginBottom: "8px",
  direction: "rtl",
  [theme.breakpoints.up("md")]: {
    width: "35%",
    marginBottom: "16px",
  },
}));

const CourseTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: "400px",
  fontSize: "20px",
  [theme.breakpoints.up("md")]: {
    fontSize: "28px",
  },
}));
const CourseDescription = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "12px",
  padding: "0 4px",
  opacity: 0.9,
  [theme.breakpoints.up("md")]: {
    fontSize: "14px",
    padding: "0 24px",
  },
}));

export default function OurPrograms() {
  const courseDtailes = [
    {
      imgURL: course5,
      title: " كورس تنظيف الكبد",
      description:
        "كورس تنظيف الكبد هو برنامج لتحسين صحة الكبد وتخليصه من السموم عبر غذاء صحي، تمارين، ومكملات طبيعية.",
    },
    {
      imgURL: course2,
      title: "كورس النحافة",
      description:
        "كورس النحافة هو برنامج يساعد على خسارة الوزن من خلال نظام غذائي متوازن وتمارين رياضية، مع دعم مستمر لتحقيق نتائج صحية وآمنة.",
    },
    {
      imgURL: course3,
      title: "كورس تنظيف الدم",
      description:
        "برنامج لتعزيز الصحة عبر إزالة السموم، وتحسين وظائف الأعضاء، وتنقية الدم، مع نظام غذائي وعلاجات طبيعية لزيادة الطاقة وتقوية المناعة.",
    },
    {
      imgURL: course4,
      title: "برنامجي المتخصص",
      description:
        "برنامج مخصص يتكيف مع احتياجات الفرد الصحية، حيث يتم تصميم خطة غذائية وتمارين رياضية تناسب حالته الصحية بشكل آمن وفعال.",
    },
  ];
  return (
    <div className="d-flex flex-column gap-5 ">
      <MainText>تعرف برامجنا؟</MainText>
      <div className="d-flex flex-wrap justify-content-around align-items-start gap-4">
        {courseDtailes.map((el) => (
          <CourseContainer>
            <div style={{ width: "100%" }}>
              <img
                src={el.imgURL}
                alt="course"
                width={"100%"}
                height={"90%"}
                style={{
                  borderRadius: "8px",
                }}
              />
            </div>
            <CourseTitle>{el.title}</CourseTitle>
            <CourseDescription>{el.description}</CourseDescription>
          </CourseContainer>
        ))}
      </div>
    </div>
  );
}
