// Boxes.js
import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const Boxes = () => {
  const boxData = [
    { icon: "fa-regular fa-calendar-days", title: "Launch date:", date: "21 May 2024" },
    { icon: "fa-solid fa-signal", title: "Market Cap:", date: "$34,789.00" },
    { icon: "fa-solid fa-tags", title: "Price:", date: "$7,540.00" },
    { icon: "fa-solid fa-globe", title: "Circ.Supply:", date: "Circ.Supply" },
    { icon: "fa-solid fa-users", title: "Holders:", date: "Holders" },
  ];
  return (
    <div style={{marginTop:"8%"}}>
    <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
      {boxData.map((data, index) => (
        <Grid item xs={6} sm={6} md={4} lg={2} key={index}>
          <Box 
            sx={{
              border: '1px solid #ddd',
              padding: 2,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 1,
              backgroundColor: 'white',
              color: "black",
              textAlign: 'center',
              margin: "10px 5px"
            }}
          >
            <i className={data.icon} style={{ fontSize: '24px', color: '#555', marginRight: '8px' }}></i>
            <Box>
              <Typography variant="body1" sx={{ mt: 1 }}>
                {data.title}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                {data.date}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
    </div>
  );
};

export default Boxes;
