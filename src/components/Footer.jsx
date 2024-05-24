// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Typography, Link, Grid } from '@material-ui/core';
// import logo from './logo.png'; // Import your logo

// const useStyles = makeStyles((theme) => ({
//   footer: {
//     backgroundColor: 'black',
//     padding: theme.spacing(3),
//     textAlign: 'center',
//     marginTop:"8%",
//   },
//   logo: {
//     margin: theme.spacing(2, 'auto'),
//     display: 'block',
//   },
// }));

// const Footer = () => {
//   const classes = useStyles();

//   return (
//     <footer className={classes.footer} >
//       <Grid container justify="center" spacing={2}>
//         <Grid item xs={12} >
//           <Typography variant="body1" style={{display:"flex",justifyContent:"space-evenly"}}>
//             <Link href="#" color="inherit">
//               About Us
//             </Link>
//             <Link href="#" color="inherit">
//               Whitepaper
//             </Link>
//             <Link href="#" color="inherit">
//               Q&A
//             </Link>
//             <Link href="#" color="inherit">
//               News & Updates
//             </Link> 
//             <Link href="#" color="inherit">
//               Community
//             </Link> 
//             <Link href="#" color="inherit">
//               support
//             </Link>
//           </Typography>
//         </Grid>
//         <Grid item xs={12}>
//           <img src={logo} alt="Logo" className={classes.logo} />
//         </Grid>
//         <Grid item xs={12}>
//           <Typography variant="body2" color="textSecondary">
//             &copy; {new Date().getFullYear()} All rights reserved.
//           </Typography>
//         </Grid>
//       </Grid>
//     </footer>
//   );
// };

// export default Footer;

































import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link, Grid, Container } from '@material-ui/core';
import logo from './logo.png'; // Import your logo

const useStyles = makeStyles((theme) => ({
  footer: {
    // backgroundColor: 'gray',
    padding: theme.spacing(3, 0),
    marginTop:"15%",
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(6, 0),
      
    },
    color:"white"
  },
  logo: {
    margin: theme.spacing(2, 0),
    maxWidth: '100%',
    height: 'auto',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1, 2),
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <div className={classes.links}>
              <Link href="#" color="inherit">
                About Us
              </Link>
              <Link href="#" color="inherit">
                Whitepaper
              </Link>
              <Link href="#" color="inherit">
                Q&A
              </Link>
              <Link href="#" color="inherit">
                News & Updates
              </Link>
              <Link href="#" color="inherit">
               Community
              </Link>
              <Link href="#" color="inherit">
                support
              </Link>
            </div>
          </Grid>
          <Grid item xs={12}>
            <img src={logo} alt="Logo" className={classes.logo} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" style={{fontSize:"20px"}}>
              &copy; {new Date().getFullYear()} All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
