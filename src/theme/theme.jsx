import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",

    h1: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 600,
    },
    button: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 500,
      textTransform: "none",
    },
  },
});

export default theme;
