import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00796b",
    },
    secondary: {
      main: "#d32f2f",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;
