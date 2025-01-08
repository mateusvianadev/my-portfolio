import { createTheme, responsiveFontSizes } from "@mui/material";


let theme = createTheme({
  palette: {
    primary: {
      main: '#161a1d',
    },
    secondary: {
      main: '#008000',
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