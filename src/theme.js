import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#02B397", // your global button color
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none", // optional: prevent uppercase
          padding: "8px 16px",
          fontWeight: "bold",
        },
      },
      defaultProps: {
        variant: "contained", // optional: sets default variant for all buttons
        color: "primary", // optional: sets default color
      },
    },
  },
});

export default theme;
