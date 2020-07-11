import React from 'react'
import Simple from "../layout/simple"
import BasicForm from "../components/BasicForm"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme }from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { Box } from '@material-ui/core';
import RegisterForm from '../components/RegisterForm';
import ChatNowBtn from '../components/ChatNowBtn.js';


const useStyles = makeStyles(theme => ({
    
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    button: {
      margin: theme.spacing(1),
    },
   
    
  }));



const Register = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChangeIndex = index => {
        setValue(index);
      };

return (
        <Simple>
        <Paper className={classes.paper}>
             
    <Grid container >
      <Grid item xs={12} alignItemsk="center">
       
         
          <Typography variant="h3" gutterBottom>
        Register
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
      I want to start as <ButtonGroup size="small" aria-label="small outlined button group">
              <Button onClick={()=>setValue({index: 0 })}>Verified User</Button>
              
              <Button onClick={()=>setValue({index: 1 })}>Anonymous</Button>
            </ButtonGroup>
      </Typography> 
            
          </Grid>
          <Grid item>
          <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value.index}
        onChangeIndex={handleChangeIndex}
      >
        <Box >
           <RegisterForm />
        </Box>
        <Box  alignItems="center">
            <ChatNowBtn /> 
        </Box>
      </SwipeableViews>
       </Grid>
     </Grid>
</Paper>
        </Simple>
    )
}

export default Register
