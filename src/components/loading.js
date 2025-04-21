import React from "react";
import logoImg from "../assets/svgLogo.svg";
import { motion } from "framer-motion";

export const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="loading-page">
        <img
          style={{
            width: "180px",
            height: "180px",
          }}
          className="svg"
          src={logoImg}
          alt="logo"
        />
      </div>
    </motion.div>
  );
};
