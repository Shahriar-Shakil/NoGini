import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ChatBubble from '@material-ui/icons/ChatBubble';

import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Box } from '@material-ui/core';
import MobileMenu from '../components/MobileMenu'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Nigh.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  headbutton: {
    margin: theme.spacing(1),
    fontSize : 20,
    
    // display: 'none',
  },
  input: {
    display: 'none',
  },
  
  
}));


export default function Simple(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
      <Button color="inherit" className={classes.headbutton} href="/">
        <ChatBubble className={classes.icon} />
        Nigh
      </Button>
      <Box className={classes.topnav} >
      <Button color="inherit">Search</Button>
      <Button color="inherit">Chat</Button>
      <Button color="inherit">Payments</Button>
      </Box>
      <div className={classes.grow}></div> */}

      <MobileMenu />
      
        {/* </Toolbar>
      </AppBar> */}
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
        {props.children}
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography> */}
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}


