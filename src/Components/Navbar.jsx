import {
  Box,
  Container,
  createTheme,
  Grid,
  Link,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import "../css/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

const theme = createTheme({
  typography: {
    navbarTitle: {
      color: "white",
      fontSize: "4rem",
      fontWeight: 500,
      fontStyle: "bold",
      fontFamily: "arial",
      alignItems: "center",
      alignSelf: "center",
    },
    navbarLink: {
      fontSize: 20,
      color: "black",
      "&:hover": {
        color: "white",
      },
    },
  },
});

const Navbar = () => {
  return (
    <React.Fragment>
      <Box className="navbar-container" color="black" height={"7vh"} pt>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12}>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <ThemeProvider theme={theme}>
                  <Typography variant="navbarTitle">Dalvi Faraz</Typography>
                </ThemeProvider>
                <Box
                  className="link-container"
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box className="navbar-button-container" paddingX={3}>
                    <Link href="#" className="navbar-button">
                      <ThemeProvider theme={theme}>
                        <Typography variant="navbarLink">Project</Typography>
                      </ThemeProvider>
                    </Link>
                  </Box>
                  <Box className="navbar-button-container" paddingX={3}>
                    <Link href="#" className="navbar-button">
                      <ThemeProvider theme={theme}>
                        <Typography variant="navbarLink">Blog</Typography>
                      </ThemeProvider>
                    </Link>
                  </Box>
                  {/* <Box className="navbar-button-container" paddingX={3} >
                    <Link className='navbar-button' href="#">
                      <ThemeProvider theme={theme}>
                        <Typography variant="navbarLink">
                          Link 3
                        </Typography>
                      </ThemeProvider>
                    </Link>
                  </Box> */}
                </Box>
                <Box
                  className="link-container-btn"
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <MenuIcon sx={{ fontSize: 30 }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
