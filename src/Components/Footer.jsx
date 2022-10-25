import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import "../css/Footer.css";
import IconsComponent from "./Icons";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Footer = () => {
  return (
    <React.Fragment>
      <Box className="footer-container" color="black" height={"30vh"}>
        <Grid container>
          <Grid item xs={12} px={1}>
            <Box
              className="icons-list"
              display="flex"
              flexDirection="row"
              justifyContent="center"
              borderBottom={2}
              borderColor="text.secondary"
              py={2}
            >
              <IconsComponent />
            </Box>
          </Grid>
          <Grid container spacing={2} p={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Item>xs=8</Item>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
          <Grid container className="copy-right" xs={12}>
          <Typography
            variant="overline"
            fontSize={12}
            color="text.secondary"
            className="copy-right" 
          >
            {"© "}
            {new Date().getFullYear()}
            {" Dalvi Faraz. "}
            {"All rights reserved."}
          </Typography>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Footer;
