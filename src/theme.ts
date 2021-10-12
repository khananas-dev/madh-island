import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#0C9B75',
      dark: '#007254',
      contrastText: '#fff',
    },
    info: {
      light: '#EAFCF7',
      main: '#EAFCF7',
      dark: '#007254',
      contrastText: '#535353',
    }
  },
});

theme.typography.h1 = {
  fontSize: '34px',
  color: '#2E2E2E',
  fontFamily: 'Roboto'

  // '@media (min-width:600px)': {
  //   fontSize: '1.5rem',
  // },
  // [theme.breakpoints.up('md')]: {
  //   fontSize: '2.4rem',
  // },
};
theme.typography.h2 = {
  fontSize: '32px',
  fontFamily: 'Roboto',
  fontWeight:`400`,

};
theme.typography.h3 = {
  fontSize: '24px',
  fontFamily: 'Roboto'

};
theme.typography.h4 = {
  fontSize: '20px',
  fontWeight:500,
  fontFamily: 'Roboto'

};
theme.typography.h5 = {
  fontSize: '18px',
  fontWeight:500,
  fontFamily: 'Roboto'

};
theme.typography.h6 = {
  fontSize: '16px',
  fontWeight:500,
  fontFamily: 'Roboto'

};
theme.typography.body1 = {
  fontSize: '14px',
  fontFamily: 'Roboto'

};
theme.typography.body2 = {
  fontSize: '14px',
  fontFamily: 'Roboto',
  fontWeight:500,
};
theme.typography.caption = {
  fontSize: '12px',
  fontFamily: 'Roboto'
  
};
export default theme;
