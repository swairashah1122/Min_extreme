import React, { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
    const [expanded, setExpanded] = useState('panel1');  // Default to the first panel being expanded

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container sx={{marginTop:"10%",}} >
            <Typography variant="h4" align="center" gutterBottom>
                Frequently Asked Questions
            </Typography>

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{borderRadius:"20px",marginTop:"15px",backgroundColor:"black",color:"white",border:"1px solid white"}}>
                <AccordionSummary
                
                    expandIcon={<ExpandMoreIcon  style={{ color: 'white' }}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Q1: How can I become an investor?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The main requirement is to reach the age of 18+. If this requirement is met, then all you need to do is follow these steps:
                        <ol>
                            <li>Click the 'Get Started' tab in the top right corner of our website.</li>
                            <li>Provide your name, create a user login, enter your email address, and set your password.</li>
                            <li>Click 'Continue' and check out with terms and conditions to create your account.</li>
                            <li>To log in, simply click the 'Log In' tab located to the left of the 'Get Started' tab.</li>
                            <li>Choose an investment plan and proceed with your deposit.</li>
                        </ol>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{borderRadius:"20px",marginTop:"15px",backgroundColor:"black",color:"white",border:"1px solid white"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon  style={{ color: 'white' }}/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Q2: How to make a deposit?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {/* <!-- Placeholder for Answer 2 --> */}
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{borderRadius:"20px",marginTop:"15px",backgroundColor:"black",color:"white",border:"1px solid white"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon  style={{ color: 'white' }}/>}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Q3: What makes MINE Extreme be different from other platforms?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {/* <!-- Placeholder for Answer 3 --> */}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
};

export default FAQ;



















// import React, { useState } from 'react';
// import {
//     Accordion,
//     AccordionSummary,
//     AccordionDetails,
//     Typography,
//     Container,
// } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { makeStyles } from '@mui/styles';

// // Define custom styles
// const useStyles = makeStyles(() => ({
//     root: {
//         backgroundColor: '#000', // Black background
//         color: '#fff', // White text
//         minHeight: '100vh',
//         padding: '16px',
//     },
//     accordion: {
//         backgroundColor: '#333', // Dark grey for accordion background
//         color: '#fff', // White text
//     },
//     accordionSummary: {
//         backgroundColor: '#444', // Slightly lighter grey for summary
//     },
//     accordionDetails: {
//         backgroundColor: '#555', // Even lighter grey for details
//     },
// }));

// const FAQ = () => {
//     const classes = useStyles();  // Apply custom styles
//     const [expanded, setExpanded] = useState('panel1'); // Default to the first panel being expanded

//     const handleChange = (panel) => (event, isExpanded) => {
//         setExpanded(isExpanded ? panel : false);
//     };

//     return (
//         <Container className={classes.root}>
//             <Typography variant="h4" align="center" gutterBottom>
//                 Frequently Asked Questions
//             </Typography>

//             <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.accordion}>
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon style={{ color: 'black' }} />}
//                     aria-controls="panel1a-content"
//                     id="panel1a-header"
//                     className={classes.accordionSummary}
//                 >
//                     <Typography>How can I become an investor?</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails className={classes.accordionDetails}>
//                     <Typography>
//                         The main requirement is to reach the age of 18+. If this requirement is met, then all you need to do is follow these steps:
//                         <ol>
//                             <li>Click the 'Get Started' tab in the top right corner of our website.</li>
//                             <li>Provide your name, create a user login, enter your email address, and set your password.</li>
//                             <li>Click 'Continue' and check out with terms and conditions to create your account.</li>
//                             <li>To log in, simply click the 'Log In' tab located to the left of the 'Get Started' tab.</li>
//                             <li>Choose an investment plan and proceed with your deposit.</li>
//                         </ol>
//                     </Typography>
//                 </AccordionDetails>
//             </Accordion>

//             <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={classes.accordion}>
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
//                     aria-controls="panel2a-content"
//                     id="panel2a-header"
//                     className={classes.accordionSummary}
//                 >
//                     <Typography>What is the minimum investment amount?</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails className={classes.accordionDetails}>
//                     <Typography>
//                         {/* <!-- Placeholder for Answer 2 --> */}
//                     </Typography>
//                 </AccordionDetails>
//             </Accordion>

//             <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className={classes.accordion}>
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
//                     aria-controls="panel3a-content"
//                     id="panel3a-header"
//                     className={classes.accordionSummary}
//                 >
//                     <Typography>How do I withdraw my earnings?</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails className={classes.accordionDetails}>
//                     <Typography>
//                         {/* <!-- Placeholder for Answer 3 --> */}
//                     </Typography>
//                 </AccordionDetails>
//             </Accordion>
//         </Container>
//     );
// };

// export default FAQ;
