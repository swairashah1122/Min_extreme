import React from 'react';
import { Container, Typography, Box, Button,useTheme,useMediaQuery } from '@mui/material';

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5,pt:"8%",textTransform:"capitalize"  }}>
      <Typography variant="h6" gutterBottom sx={{fontSize:"15px", color: 'rgba(221, 221, 221, 1)' }}>
        Welcome to MINEX Extreme
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold', lineHeight:"50px",fontSize:"50px" }} gutterBottom>
        Join the <strong style={{color:"purple"}}>MINEX Revolution</strong> and <br /> be part of a game-changing movement.
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: {sm:'left',xs:'left',md:'left',lg:'center'},paddingTop:"20px",fontSize:"12px", color: 'rgba(221, 221, 221, 1)'}}>
        This Ethereum-based token offers unprecedented stability and value to holders, backed by a state-of-the-art Bitcoin mining farm.<br/>
        We are transforming the token industry by merging cutting-edge Bitcoin mining technology with tangible MINEX value.<br/>
        With $MINEX, we are opening new doors of opportunities for token holders, where utility meets viability.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, mt: 3 }}>
        <Button 
          variant="contained" 
          color="primary"
          sx={{ mb: 1 ,borderRadius:"20px",backgroundColor:"purple",'&:hover':{backgroundColor:"purple"}}}
        >
          Join the Pre-Sale
        </Button>
        <Button 
          variant="outlined" 
          color="primary"
          sx={{ mb: 1 ,borderRadius:"20px",backgroundColor:"gray",color:"black",fontSize:"15px",'&:hover':{backgroundColor:"gray"}}}
        >
          Explore the Whitepaper
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
