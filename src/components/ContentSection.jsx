// ContentSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const ContentSection = () => {
  return (
    <Box sx={{backgroundColor:"none", p: 3, textAlign: 'center', color: 'white' }}>
      {/* Paragraph */}
      <Typography variant="body1" sx={{ mb: 3,textAlign: { xs: 'left', md: 'left',lg:'center' }  }}>
        It is not just a utility token, but a symbol of groundbreaking ideas. It is designed to appreciate in value over time, leveraging<br />
        Bitcoin mining profits to continuously enhance the asset's value, ultimately benefiting the community.
      </Typography>

      {/* Bordered Box */}
      <Box sx={{ border: '1px solid purple', p: 5, mt: 3, textAlign: 'left', color: 'white' }}>
        <Typography variant="body1" >
       <i class="fa-solid fa-quote-left"></i>
         <br />The sun rises over a vast expanse of land, where rows of sleek, futuristic buildings stretch as far as 
          the eye can see. In the distance, a faint humming sound can be heard, like the low roar of a distant crowd. But this is no crowd - it's the sound of thousands of powerful computer servers, all working in unison to mine Bitcoin. This is the MINEX Mining Farm, with a per kWh of only 0.02 cents, the mining profitability will be 5-10x greater than any other Bitcoin mining operation in the world.
          <i class="fa-solid fa-quote-right"  style={{marginLeft:"30px"}}></i>
       
        </Typography>
      </Box>
    </Box>
  );
};

export default ContentSection;
