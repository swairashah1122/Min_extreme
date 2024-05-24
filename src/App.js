import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/welcome';
import Boxes from './components/boxes';
import {Container } from '@mui/material';
import { Box } from '@mui/material';
import ContentSection from './components/ContentSection';
import Graphbox from './components/Graphbox';
import Stakingrewards from './components/Stakingrewards';
import TokenomicsComponent from './components/TokenomicsComponent';
import Minexdistribute from './components/Minexdistribute';
import Coincollection from './components/Coincollection';
import QnAsection from './components/Q&A section';
import Joinus from './components/joinus';
import Footer from './components/Footer';
const App = () => {
  return (

    <div  >
      <Navbar />
      <Welcome />
      <Boxes />
      <Box sx={{  minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <ContentSection />
    </Box>
     <Graphbox></Graphbox>
     <Stakingrewards></Stakingrewards>
     <TokenomicsComponent></TokenomicsComponent>
     <Minexdistribute></Minexdistribute>
     <Coincollection></Coincollection>
     <QnAsection></QnAsection>
     <Joinus></Joinus>
     <Footer></Footer>
   
    </div>


    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
    //   <div>
    //     <Navbar />
    //     <Welcome />
        // <Container>
        //   <Boxes />
        // </Container>
    //   </div>
    // </ThemeProvider>
  );
};

export default App;
