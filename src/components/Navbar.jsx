import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Mylogo from '../components/logo.png';


const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const menuItems = ['About us', 'Whitepaper', 'FAQ', 'News & Updates', 'Community', 'Support'];

  return (
    <AppBar position="static" style={{backgroundColor:"black"}}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div" >
          <img src={Mylogo} alt="" sx={{ flexGrow: 1, width:"8px",height:"2%"}}/>
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerClose}
            >
              <Box 
                sx={{ width:"50px",}}
                role="presentation"
                onClick={handleDrawerClose}
                onKeyDown={handleDrawerClose}
              >
                <List>
                  {menuItems.map((item, index) => (
                    <ListItem button key={index}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                    <Button color="inherit" startIcon={<LoginIcon />} >
                      Login
                    </Button>
                  <ListItem button>
                    <Button color="inherit">Get Started</Button>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <>
            <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
              {menuItems.map((item, index) => (
                <Button key={index} color="inherit">{item}</Button>
              ))}
            </Box>
            <Button color="inherit" startIcon={<LoginIcon />} sx={{backgroundColor:"gray",color:"black",borderRadius:"20px",paddingLeft: "25px",paddingRight: "25px","&:hover":{ '&:hover': { backgroundColor: "gray" }},marginRight:"20px"}}>
              Login
            </Button>
            <Button color="inherit"  sx={{backgroundColor:"white",color:"black",borderRadius:"20px",paddingLeft: "25px",paddingRight: "25px","&:hover":{ '&:hover': { backgroundColor: "white" }}}}>Get Started</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;