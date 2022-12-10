import {
  Box,
  Container,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from '@mui/material';
import React from 'react';
import '../css/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, Outlet } from 'react-router-dom';

const theme = createTheme({
  typography: {
    navbarTitle: {
      color: 'white',
      fontSize: '4rem',
      fontWeight: 500,
      fontStyle: 'bold',
      fontFamily: 'arial',
      alignItems: 'center',
      alignSelf: 'center',
    },
    navbarLink: {
      fontSize: 20,
      color: 'black',
      '&:hover': {
        color: 'white',
      },
    },
  },
});

const Navbar = () => {
  return (
    <React.Fragment>
      <Box className='navbar-container' color='black' height={'7vh'} pt>
        <Container maxWidth='xl'>
          <Grid container>
            <Grid item xs={12}>
              <Box
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
              >
                <NavLink to=''>
                  <ThemeProvider theme={theme}>
                    <Typography variant='navbarTitle' fontFamily='Arial-Black'>
                      Dalvi Faraz
                    </Typography>
                  </ThemeProvider>
                </NavLink>
                <Box
                  className='link-container'
                  display='flex'
                  flexDirection='row'
                  justifyContent='space-between'
                  alignItems='center'
                >
                  {/* <NavLink>
                    <Box className='navbar-button-container' py={1}>
                      <Link className='navbar-button'>
                        <ThemeProvider theme={theme}>
                          <Typography variant='navbarLink'>Project</Typography>
                        </ThemeProvider>
                      </Link>
                    </Box>
                  </NavLink>
                  <Box className='navbar-button-container' py={1}>
                    <Link href='#' className='navbar-button'>
                      <ThemeProvider theme={theme}>
                        <Typography variant='navbarLink'>Blog</Typography>
                      </ThemeProvider>
                    </Link>
                  </Box> */}

                  <NavLink to='projects'>
                    <Box className='navbar-button-container' py={1}>
                      <ThemeProvider theme={theme}>
                        <Typography variant='navbarLink'>Projects</Typography>
                      </ThemeProvider>
                    </Box>
                  </NavLink>
                  <NavLink to='blogs'>
                    <Box className='navbar-button-container' py={1}>
                      <ThemeProvider theme={theme}>
                        <Typography variant='navbarLink'>Blogs</Typography>
                      </ThemeProvider>
                    </Box>
                  </NavLink>
                  <NavLink to='haamid'>
                    <Box className='navbar-button-container' py={1}>
                      <ThemeProvider theme={theme}>
                        <Typography variant='navbarLink'>HAAMID</Typography>
                        {/* <Typography variant='navbarLink'>Design</Typography> */}
                      </ThemeProvider>
                    </Box>
                  </NavLink>
                </Box>
                <Box
                  className='link-container-btn'
                  display='flex'
                  flexDirection='row'
                  justifyContent='space-between'
                  alignItems='center'
                >
                  <MenuIcon sx={{ fontSize: 30 }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Outlet />
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
