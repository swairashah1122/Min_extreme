import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const JoinBox = () => {
  return (
    <Container  >
      <Box
        sx={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          marginTop:"15%",
          backgroundColor:"black",
          padding: '16px',
          textAlign: 'center',
          boxShadow: 3,
        }}
      >
        <Typography variant="h6" component="p" gutterBottom>
          Join Today For A Prosperous Tomorrow
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 10 ,width:"25%",borderRadius:"30px",backgroundColor:"gray",transition: 'background-color 0.5s ease','&:hover':{backgroundColor:"#363336"}}}>
          Join Us
        </Button>
      </Box>
    </Container>
  );
};

export default JoinBox;