import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "../css/Footer.css";
import IconsComponent from "./Icons";
import SendIcon from '@mui/icons-material/Send';


const Footer = () => {
  const [newsLetterMail, setNewsLetterMail] = useState("");
  const [newsLetterMailError, setNewsLetterMailError] = useState("");

  const handleChange = (event) => {
    let value = event.target.value;
    if (value === "") setNewsLetterMailError(false);
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
      setNewsLetterMailError(true);
    else setNewsLetterMailError(false);

    setNewsLetterMail(value);
  };

  const handleNewsLetterClick =() => {
    setNewsLetterMail('');
  }

  return (
    <React.Fragment>
      <Box className="footer-container" color="black">
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
              <Typography fontSize={32} color="white" fontFamily="Arial-Black">
                NEWSLETTER <br /> SIGNUP
              </Typography>
              <Typography
                fontSize={14}
                color="white"
                fontFamily="Arial"
                fontWeight="bold"
              >
                subscribe to my channel for latest update ??
              </Typography>
              <Grid item pt={2}>
                <TextField
                  required
                  label="Enter Email Address"
                  type="email"
                  inputProps={{
                    style: {
                      fontSize: 16,
                      height: 40,
                      padding: "0 14px",
                      fontWeight: "normal",
                    },
                  }}
                  value={newsLetterMail}
                  onChange={handleChange}
                  error={newsLetterMailError === true}
                  helperText={
                    newsLetterMailError === true ? "Enter a valid email!" : ""
                  }
                />
                <Button variant="contained" style={{height: 37, padding: '0 14px', marginLeft: 8  }}  disabled={newsLetterMailError === true || newsLetterMail === ""} onClick={handleNewsLetterClick} endIcon={<SendIcon />}>
                  Subscribe
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              DALVI
            </Grid>
          </Grid>
          <Grid container className="copy-right">
            <Typography
              variant="overline"
              fontSize={12}
              color="GrayText"
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
