// import React from 'react';
// import { makeStyles } from '@mui/styles';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';

// const useStyles = makeStyles((theme) => ({
//   circle: {
//     width: '200px',
//     height: '200px',
//     borderRadius: '50%',
//     position: 'absolute',
//     marginTop: '40px',
//     overflow: 'hidden',
//   },
//   left: {
//     width: '50%',
//     height: '100%',
//     float: 'left',
//     position: 'relative',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   top: {
//     height: '50%',
//     backgroundColor: 'blue',
//   },
//   bottom: {
//     height: '50%',
//     backgroundColor: 'green',
//   },
//   right: {
//     width: '50%',
//     height: '100%',
//     float: 'left',
//     position: 'relative',
//     backgroundColor: 'orange',
//   },
//   box: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#1d2025',
//     width: '400px',
//     height: '300px',
//     paddingTop: '70px',
//     borderRadius: '15px',
//     position: 'relative',
//   },
//   textContainer: {
//     display: 'flex',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     height: '50px',
//     width: '100%',
//     backgroundColor: '#1d2025',
//     marginTop: '85%',
//     borderRadius: '15px',
//     position: 'absolute',
//     bottom: '0',
//   },
// }));

// function DividedCircle() {
//   const classes = useStyles();

//   return (
//     <>
//       <Typography sx={{marginTop:"8%",fontSize:"50px",display:"flex",textAlign:"center",justifyContent:"center"}}>$Minex Distribution</Typography>
//     <Grid container pt={10} display={"flex"}  direction="row" >
//       <Grid item xs={12} sm={6} sx={{display:"flex",justifyContent:"center"}}>
//         <Box className={classes.box}>
//           <Typography sx={{ fontSize: '25px', marginRight: '20px', marginBottom: '90%' }}>Total supply</Typography>
//           <Paper className={classes.circle}>
//             <div className={classes.left}>
//               <div className={classes.top}></div>
//               <div className={classes.bottom}></div>
//             </div>
//             <div className={classes.right}></div>
//           </Paper>
//           <Box className={classes.textContainer}>
//             <Typography variant='h6'>• Locked</Typography>
//             <Typography variant='h6'>• Locked</Typography>
//             <Typography variant='h6'>• Locked</Typography>
//           </Box>
//         </Box>
//       </Grid>

//       <Grid item xs={12} sm={6} sx={{display:"flex",justifyContent:"center"}}>
//         <Box className={classes.box}>
//           <Typography sx={{ fontSize: '30px', marginBottom: '90%' }}>Total supply</Typography>
//           <Paper className={classes.circle}>
//             <div className={classes.left}>
//               <div className={classes.top}></div>
//               <div className={classes.bottom}></div>
//             </div>
//             <div className={classes.right}></div>
//           </Paper>
//           <Box className={classes.textContainer}>
//             <Typography variant='h6'>• Locked</Typography>
//             <Typography variant='h6'>• Locked</Typography>
//             <Typography variant='h6'>• Locked</Typography>
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//     </>
//   );
// }

// export default DividedCircle;















// import React from 'react';
// import { Box,Typography } from '@mui/material';

// const DividedCircleWithText = () => {

//   return (

//     <>
//     <Typography sx={{fontSize:"30px", textAlign:"center", marginTop:"8%"}}>$Minex Distribution</Typography>
//     <Box sx={{display:'flex',justifyContent:"space-around",marginTop:"2%"}}>
//     <Box sx={{ bgcolor: 'gray', p: 2, textAlign: 'center', color: 'white',width:"500px"}}>
//      < Typography sx={{fontSize:"25px",marginRight:"65%"}}>Total Supply:</Typography>
//       <Box
//         sx={{
//           width: '200px',
//           height: '200px',
//           borderRadius: '50%',
//           overflow: 'hidden',
//           position: 'relative',
//           margin: 'auto',
//           marginTop:"20%"
//         }}
//       >
//         {/* Right half */}
//         <Box
//           sx={{
//             width: '50%',
//             height: '100%',
//             bgcolor: 'orange',
//             float: 'right',
//           }}
//         />

//         {/* Left half */}
//         <Box
//           sx={{
//             width: '50%',
//             height: '100%',
//             float: 'left',
//             position: 'relative',
//           }}
//         >
//           {/* Top half */}
//           <Box
//             sx={{
//               width: '100%',
//               height: '50%',
//               bgcolor: 'lightgreen',
//             }}
//           />

//           {/* Bottom half */}
//           <Box
//             sx={{
//               width: '100%',
//               height: '50%',
//               bgcolor: 'lightblue',
//             }}
//           />
//         </Box>
//       </Box>
//       <Box sx={{ display: 'flex',justifyContent:"space-evenly",backgroundColor:"gray",height:"40px",alignItems:"center", mt: 20 }}>
//         <Box
//           sx={{
//             width: '10px',
//             height: '10px',
//             borderRadius: '50%',
//             backgroundColor: 'orange',
//             display: 'inline-block',
//             mr: 1,
//           }}
//         />
//           <Box sx={{ mr: 1 }}>Locked</Box>
//         <Box
//           sx={{
//             width: '10px',
//             height: '10px',
//             borderRadius: '50%',
//             backgroundColor: 'lightgreen',
//             display: 'inline-block',
//             mr: 1,
//           }}
//         />
//         <Box sx={{ mr: 1 }}>Locked</Box>

//         <Box
//           sx={{
//             width: '10px',
//             height: '10px',
//             borderRadius: '50%',
//             backgroundColor: 'lightblue',
//             display: 'inline-block',
//             mr: 1,
//           }}
//         />
//         <Box sx={{ mr: 1 }}>Locked</Box>

//       </Box>
//     </Box>

// <Box sx={{ bgcolor: 'gray', p: 2, textAlign: 'center', color: 'white',width:"500px"}}>
// < Typography sx={{fontSize:"25px",marginRight:"65%"}}>Total Supply:</Typography>
//  <Box
//    sx={{
//      width: '200px',
//      height: '200px',
//      borderRadius: '50%',
//      overflow: 'hidden',
//      position: 'relative',
//      margin: 'auto',
//      marginTop:"20%"
//    }}
//  >
//    {/* Right half */}
//    <Box
//      sx={{
//        width: '50%',
//        height: '100%',
//        bgcolor: 'orange',
//        float: 'right',
//      }}
//    />

//    {/* Left half */}
//    <Box
//      sx={{
//        width: '50%',
//        height: '100%',
//        float: 'left',
//        position: 'relative',
//      }}
//    >
//      {/* Top half */}
//      <Box
//        sx={{
//          width: '100%',
//          height: '50%',
//          bgcolor: 'lightgreen',
//        }}
//      />

//      {/* Bottom half */}
//      <Box
//        sx={{
//          width: '100%',
//          height: '50%',
//          bgcolor: 'lightblue',
//        }}
//      />
//    </Box>
//  </Box>
//  <Box sx={{ display: 'flex',justifyContent:"space-evenly",backgroundColor:"gray",height:"40px",alignItems:"center", mt: 20 }}>
//    <Box
//      sx={{
//        width: '10px',
//        height: '10px',
//        borderRadius: '50%',
//        backgroundColor: 'orange',
//        display: 'inline-block',
//        mr: 1,
//      }}
//    />
//      <Box sx={{ mr: 1 }}>Marketing&Development</Box>
//    <Box
//      sx={{
//        width: '10px',
//        height: '10px',
//        borderRadius: '50%',
//        backgroundColor: 'lightgreen',
//        display: 'inline-block',
//        mr: 1,
//      }}
//    />
//    <Box sx={{ mr: 1 }}>presale</Box>

//    <Box
//      sx={{
//        width: '10px',
//        height: '10px',
//        borderRadius: '50%',
//        backgroundColor: 'lightblue',
//        display: 'inline-block',
//        mr: 1,
//      }}
//    />
//    <Box sx={{ mr: 1 }}>Liquidity</Box>
//    <Box
//      sx={{
//        width: '10px',
//        height: '10px',
//        borderRadius: '50%',
//        backgroundColor: 'lightblue',
//        display: 'inline-block',
//        mr: 1,
//      }}
//    />
//    <Box sx={{ mr: 1 }}>StakingRewards</Box>

//  </Box>
// </Box>
// </Box>

// </>
//   );
// };

// export default DividedCircleWithText;


























import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const DividedCircleWithText = () => {
  return (
    <>
      <Typography sx={{ fontSize: '30px', textAlign: 'center', marginTop: '8%' }}>
        $Minex Distribution
      </Typography>
      <Grid container spacing={2} justifyContent="space-evenly" sx={{ marginTop: '2%' }}>
        <Grid item xs={12} md={4}>
          <Box sx={{ bgcolor: 'gray', p: 2, textAlign: 'center', color: 'white' }}>
            <Typography sx={{ fontSize: '25px', textAlign: 'left' }}>Total Supply:</Typography>
            <Box
              sx={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                margin: '20px auto',
              }}
            >
              {/* Right half */}
              <Box
                sx={{
                  width: '50%',
                  height: '100%',
                  bgcolor: 'orange',
                  float: 'right',
                }}
              />

              {/* Left half */}
              <Box
                sx={{
                  width: '50%',
                  height: '100%',
                  float: 'left',
                  position: 'relative',
                }}
              >
                {/* Top half */}
                <Box
                  sx={{
                    width: '100%',
                    height: '50%',
                    bgcolor: 'lightgreen',
                  }}
                />

                {/* Bottom half */}
                <Box
                  sx={{
                    width: '100%',
                    height: '50%',
                    bgcolor: 'lightblue',
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                backgroundColor: 'gray',
                height: '40px',
                alignItems: 'center',
                mt: 2,
              }}
            >
              <Box
                sx={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: 'orange',
                  display: 'inline-block',
                  mr: 1,
                }}
              />
              <Box>Locked</Box>
              <Box
                sx={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: 'lightgreen',
                  display: 'inline-block',
                  mr: 1,
                }}
              />
              <Box>Locked</Box>
              <Box
                sx={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: 'lightblue',
                  display: 'inline-block',
                  mr: 1,
                }}
              />
              <Box>Locked</Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ bgcolor: 'gray', p: 2, textAlign: 'center', color: 'white' }}>
            <Typography sx={{ fontSize: '25px', textAlign: 'left' }}>Total Supply:</Typography>
            <Box
              sx={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                margin: '20px auto',
              }}
            >
              {/* Right half */}
              <Box
                sx={{
                  width: '50%',
                  height: '100%',
                  bgcolor: 'orange',
                  float: 'right',
                }}
              />

              {/* Left half */}
              <Box
                sx={{
                  width: '50%',
                  height: '100%',
                  float: 'left',
                  position: 'relative',
                }}
              >
                {/* Top half */}
                <Box
                  sx={{
                    width: '100%',
                    height: '50%',
                    bgcolor: 'lightgreen',
                  }}
                />

                {/* Bottom half */}
                <Box
                  sx={{
                    width: '100%',
                    height: '50%',
                    bgcolor: 'lightblue',
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                backgroundColor: 'gray',
                height: '40px',
                alignItems: 'center',
                mt: 2,
                flexWrap: 'wrap',
              }}
            >
              <Box
                sx={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: 'orange',
                  display: 'inline-block',
                  mr: 1,
                }}
              />
              <Box>Marketing&Development</Box>
              <Box
                sx={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: 'lightgreen',
                  display: 'inline-block',
                  mr: 1,
                }}
              />
              <Box>Presale</Box>
              <Box
                sx={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: 'lightblue',
                  display: 'inline-block',
                  mr: 1,
                }}
              />
              <Box>Liquidity</Box>
              <Box
                sx={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: 'lightblue',
                  display: 'inline-block',
                  mr: 1,
                }}
              />
              <Box>StakingRewards</Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default DividedCircleWithText;
