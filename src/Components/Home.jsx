import React from 'react';
import Footer from './Footer';
import '../css/Home.css';
import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
}));

const Home = () => {
  return (
    <>
      <Box className='home'>
        <Grid container sx={{ textAlign: 'center' }}>
          <Grid xs={12}>
            <Grid container alignItems={'center'} justifyContent={'center'}>
              <img src='./developer.png' alt='developer'/>
              <Grid direction='column' alignSelf='center'>
              <Typography variant='h1' sx={{alignSelf:'center'}}>HELLO WORLD</Typography>
              <Typography variant='h1' sx={{alignSelf:'center'}}>Welcome to my Portfolio</Typography>
              <Typography variant='h1' sx={{alignSelf:'center'}}>Innovation Never Ends</Typography>
              </Grid>
            </Grid>
            <Typography variant='h5' sx={{marginTop:'179px', alignSelf:'center'}}>Click here to explore</Typography>
          </Grid>
        </Grid>
      </Box>
      {/* <Footer/> */}
    </>
  );
};

export default Home;
