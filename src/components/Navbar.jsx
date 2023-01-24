import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

function Navbar(props) {
  const currentUser = true;
  const navigate = useNavigate()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center', flexDirection: "column" }}>

            {currentUser ? (
              <>
                <Button onClick={() => navigate("/profile")}>
                  Profile
                </Button>
                <Button onClick={() => navigate("/newblog")}>
                  New Blog
                </Button>
                <Button onClick={null}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button onClick={() => navigate("/register")}>
                  Register
                </Button>
              </>
            )}

          </ListItemButton>
        </ListItem>

      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, color:"#000" }}>
            {currentUser ? (
              <>
                <Button sx={{ color:"#fff" }} onClick={() => navigate("/profile")}>
                  Profile
                </Button>
                <Button sx={{ color:"#fff" }} onClick={() => navigate("/newblog")}>
                  New
                </Button>
                <Button sx={{ color:"#fff" }} onClick={null}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button sx={{ color:"#fff" }} onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button sx={{ color:"#fff" }} onClick={() => navigate("/register")}>
                  Register
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ marginTop: "64px" }}>
      </Box>
    </Box>
  );
}



export default Navbar;