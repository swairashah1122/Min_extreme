import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, useMediaQuery, useTheme } from '@mui/material';

const TokenomicsComponent = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      display="flex"
      flexDirection={{xs:'column',sm:'column',md:'row',lg:'row'}}
      justifyContent="space-between"
      alignItems="center"
      height="auto"
      width={"80%"}
      margin={"auto"}
      marginTop={"8%"}
      p={2}
    >
      <Box
        flex={1}
        p={2}
      >
        <Typography variant="h4">Tokenomics</Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            paddingTop: "20px",
            fontSize: "15px",
            color: 'rgba(221, 221, 221, 1)',
            textAlign: "left",
          }}
        >
          $MINEX is an ERC-20 token with a fixed supply that rewards holders using a positive buyback & burn formula.
        </Typography>
      </Box>

      <Box
        flex={1}
        p={2}
        display="flex"
        // border="1px solid white"
        borderRadius={"30px"}
        height={"50%"}
        justifyContent={isSmallScreen ? 'flex-start' : 'center'}
      >
        <TableContainer component={Paper} sx={{ width: '100%' }}>
          <Table size="small" sx={{ borderCollapse: 'collapse', width: '100%' }}>
            <TableBody>
              <TableRow>
                <TableCell sx={{ color: 'white', backgroundColor: '#1b1e23', border: '1px solid white' }}>
                  <Typography variant="body1" fontWeight="bold">Name</Typography>
                </TableCell>
                <TableCell sx={{ color: 'white', backgroundColor: '#1b1e23', border: '1px solid white' }}>
                  <Typography variant="body1">Mine Extreme</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ color: 'white', backgroundColor: '#1b1e23', border: '1px solid white' }}>
                  <Typography variant="body1" fontWeight="bold">Symbol</Typography>
                </TableCell>
                <TableCell sx={{ color: 'white', backgroundColor: '#1b1e23', border: '1px solid white' }}>
                  <Typography variant="body1">$MINEX</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ color: 'white', backgroundColor: '#1b1e23', border: '1px solid white' }}>
                  <Typography variant="body1" fontWeight="bold">Decimal</Typography>
                </TableCell>
                <TableCell sx={{ color: 'white', backgroundColor: '#1b1e23', border: '1px solid white' }}>
                  <Typography variant="body1">"dec"</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ color: 'white', backgroundColor: '#1b1e23', border: '1px solid white' }}>
                  <Typography variant="body1" fontWeight="bold">Contract Address</Typography>
                </TableCell>
                <TableCell sx={{ color: 'white', backgroundColor: '#1b1e23', border: '1px solid white' }}>
                  <Typography variant="body1">"ca"</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default TokenomicsComponent;





