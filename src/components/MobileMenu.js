import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChatBubble from '@material-ui/icons/ChatBubble';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const options = [
    {label:'Search', ref:"/search", pub:true},
    {label:'Payment', ref:"/payment", pub:true},
    {label:'Chat', ref:"/chat", pub:false},
];  
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    [theme.breakpoints.down('sm')]: {
        flexGrow: 1,
        
      },
    
  },
  topnav : {
    marginLeft : 90,
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      display: "none",
      
    },
    },
    vicon : {
        display : "flex",
        [theme.breakpoints.up('md')]: {
            display: "none",
            
          },
    }

}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

//   const handleChange = event => {
//     setAuth(event.target.checked);
//   };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton}  href="/" color="inherit" aria-label="menu">
            <ChatBubble />
          </IconButton>
          <Typography variant="h6" className={classes.title} >
            Nigh
          </Typography>
          <Box className={classes.topnav} >
          {options.map(option => (
          
          <Link component={RouterLink} color="inherit" to={option.ref}>
          <Button color="inherit">
            {option.label}
          </Button>
          </Link>
          
        ))}
      {/* <Button color="inherit">Search</Button>
      <Button color="inherit">Chat</Button>
      <Button color="inherit">Payments</Button> */}
      </Box>
          {auth && (
            <div className={classes.vicon}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
              {options.map(option => (
         
          <Link component={RouterLink} color="inherit" to={option.ref}>
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option.label}
          </MenuItem>
          </Link>
         
        ))}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}