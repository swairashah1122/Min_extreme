import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Graphimg from './bitcoin.png';

const MyComponent = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      display="flex"
      flexDirection={{xs:'column',sm:'column',md:'row',lg:'row'}}
      justifyContent="space-between"
      alignItems={isSmallScreen ? 'flex-start' : 'center'}
      height="auto"
      marginTop={"8%"}
      p={2}
    >
      <Box
        flex={1}
        p={2}
        display="flex"
        justifyContent="center"
        order={isSmallScreen ? 2 : 1}
      >
        <img src={Graphimg} alt="Graph" style={{ maxWidth: '100%', height: 'auto' }} />
      </Box>

      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        p={2}
        order={isSmallScreen ? 1 : 2}
      >

        <Typography variant="h4">Hyper Buyback & Burn Program</Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            paddingTop: "20px",
            fontSize: "15px",
            color: 'rgba(221, 221, 221, 1)',
            textAlign: "left",
        lineHeight:"30px"

          }}
        >
          Our innovative approach to the strategic utilization of Bitcoin enhances the value of MINEX. The maximum token supply is 20,000,000, with 5,000,000 distributed in the first year. Every month 5-10% of the total circulating supply will be bought and burned. This percentages will evolve over the weeks. *For more information, Check the Whitepaper
        </Typography>

        <Typography variant="h4" marginTop={"40px"}>Staking rewards</Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            paddingTop: "20px",
            fontSize: "15px",
            color: 'rgba(221, 221, 221, 1)',
            textAlign: "left",
        lineHeight:"30px"

          }}
        >
          Earn daily returns of up to 1.5% on staking your MINEX Tokens. At the end of the staking period, you have the option to either restake or withdraw your returns.
        </Typography>

        <Typography variant="body1">•  Get Rewards Every 24 hours.</Typography>
        <Typography variant="body1">•  Sustainability: Early Withdrawal Tax Put in Place.</Typography>
        <Typography variant="body1">•  Rug-Proof: No minting to wallet, Audited by "audit".</Typography>
      </Box>
    </Box>
  );
};

export default MyComponent;
