import React from "react";
import ReactPlayer from "react-player";
import { useMediaQuery, useTheme } from "@mui/material";

export default function VideoPlayer() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div>
      <ReactPlayer
        url="https://home.wistia.com/medias/bvcbeso4sh"
        controls
        width={matches ? "700px" : "370px"}
        height={matches ? "300px" : "200px"}
      />
    </div>
  );
}
