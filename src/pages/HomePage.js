import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header";
import ShortRivews from "../components/shortRivews";
import HeroSection from "../components/heroSection";
// import OurPrograms from "../components/ourPrograms";
// import ExplinationVideos from "../components/explinationVideos";
// import PromotionMessage from "../components/promotionMessage";
// import OurFeatures from "../components/ourFeatures";
// import FullReivews from "../components/fullReivews";
import ContactUs from "../components/contactUs";
import Footer from "../components/footer";
import { Box, styled } from "@mui/material";
import { Helmet } from "react-helmet";

const Line = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "1px",
  width: "30%",
  backgroundColor: "white",
  boxShadow: "0px 5px 20px 3px  rgba(255, 255, 255, 0.3)",
}));

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> W-Nutrition || التغذية بالمكملات</title>
        <meta
          name="description"
          content="الطريقة الحديثة المبتكرة لمعلاجة المشاكل الصحية بالتغذية و المكملات الطبيعية"
        />
        <link rel="canonical" href="https://w-nutrition.com/" />
      </Helmet>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "80px",
          flexDirection: "column",
        }}
      >
        <Header />
        <ShortRivews />
        <HeroSection />
        <Line />
        {/* <OurPrograms /> */}

        {/* <Line /> */}
        {/* <ExplinationVideos /> */}
        {/* <Line /> */}
        {/* <PromotionMessage />
      <Line />
      <OurFeatures />
      <Line /> */}
        {/* <FullReivews />
      <Line /> */}
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
