import { createTheme, responsiveFontSizes } from "@mui/material";


let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#d62828',
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ].join(','),
  }    
});

theme = responsiveFontSizes(theme);

export default theme