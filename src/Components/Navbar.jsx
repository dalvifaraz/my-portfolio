import {
  Box,
  Container,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import '../css/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, Outlet } from 'react-router-dom';

const theme = createTheme({
  typography: {
    navbarTitle: {
      color: '#1975d1',
      fontSize: '4rem',
      fontWeight: 500,
      fontStyle: 'bold',
      fontFamily: 'arial',
      alignItems: 'center',
      alignSelf: 'center',
    },
    navbarLink: {
      fontSize: 20,
    },
  },
});

const Navbar = () => {
  const [isActive, setIsActive] = useState('');
  return (
    <React.Fragment>
      <Box className='navbar-container' color='black' pt>
        <Container maxWidth='xl'>
          <Grid container>
            <Grid item xs={12}>
              <Box
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
                paddingY={1}
              >
                <NavLink to=''>
                  <ThemeProvider theme={theme}>
                    <Typography
                      variant='navbarTitle'
                      fontFamily='Arial-Black'
                      onClick={() => setIsActive('')}
                    >
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
                  <NavLink
                    to='projects'
                    onClick={() => setIsActive('projects')}
                  >
                    <Box className='navbar-button-container' py={1}>
                      <ThemeProvider theme={theme}>
                        <Typography
                          variant='navbarLink'
                          sx={
                            isActive === 'projects' && {
                              textDecoration: 'underline',
                            }
                          }
                        >
                          Projects
                        </Typography>
                      </ThemeProvider>
                    </Box>
                  </NavLink>
                  <NavLink to='blogs' onClick={() => setIsActive('blogs')}>
                    <Box className='navbar-button-container' py={1}>
                      <ThemeProvider theme={theme}>
                        <Typography
                          variant='navbarLink'
                          sx={
                            isActive === 'blogs' && {
                              textDecoration: 'underline',
                            }
                          }
                        >
                          Blogs
                        </Typography>
                      </ThemeProvider>
                    </Box>
                  </NavLink>
                  <NavLink to='haamid' onClick={() => setIsActive('design')}>
                    <Box className='navbar-button-container' py={1}>
                      <ThemeProvider theme={theme}>
                        <Typography
                          variant='navbarLink'
                          sx={
                            isActive === 'design' && {
                              textDecoration: 'underline',
                            }
                          }
                        >
                          Design
                        </Typography>
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
