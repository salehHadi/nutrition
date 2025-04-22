import { createTheme, styled, Typography } from "@mui/material";

export const Colors = {
  color1: "#072408",
  color2: "#113C10",
  color3: "#1D5618",
  color4: "#29752C",
  color5: "#229E1F",
  color6: "#49B937",
  color7: "#FFDD2E",
  color8: "#F38A00",

  white: "#FFF",
};

export const FontWeight = {
  bold: "700",
  regular: "500",
};

export const FontSize = {
  size1: "12px",
  size2: "16px",
  size3: "10px",
};

export const MainText = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontWeight: "bold",
  textAlign: "center",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    fontSize: "40px",
  },
}));

export const ShowMessage = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: -25,
  right: "0%",
  width: "100px",
  textAlign: "center",
  fontSize: "10px",
  padding: "4px",
  borderRadius: "4px",
  fontWeight: "bold",
  backgroundColor: "white",
  color: "black",
  display: "inline-block",
}));

const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: Colors.color1,
  //     },
  //     //     secondary: {
  //     //       main: "Colors.",
  //     //     },
  //   },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
  },
  typography: {
    fontFamily: '"Readex Pro", serif',
    fontSize: "12px",
    cursor: "pointer",
    h1: {
      fontSize: "12px",
      "@media (min-width:600px)": {
        fontSize: "14px",
      },
      "@media (min-width:900px)": {
        fontSize: "16px",
      },
    },
    h2: {
      fontSize: "12px",
      "@media (min-width:600px)": {
        fontSize: "14px",
      },
    },
  },
});

export default theme;
