import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Countries from '../assets/json/countries.json';
import ReCAPTCHA from "react-google-recaptcha";
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router";
import {Search} from '@material-ui/icons'
import { display } from '@material-ui/system';



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
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    center : {
      textAlign : "center",
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(1),
    },
    numWidth: {
        width: 50,
      },
  }));
  

function PaymentForm(props) {
    const classes = useStyles();
    
    const [values, setValues] = React.useState({
      self : "",
      selfAge : "",
      lookingFor : "",
      lookinForAgeRange : "",
      
    });
      
      function handleChange(event) {
        // console.log(event.target.name);
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      }


      const handleSubmit =(e)=>{
        e.preventDefault();
        props.history.push("/nearby");

      }
    
      function onChange(value) {

        setValues(oldValues => ({
          ...oldValues,
          "recaptcha": value,
        }));
        console.log("Captcha value:", value);
      }

      
       
  return (
     <Paper className={classes.paper}>
      <Typography variant="h3" gutterBottom>
        Payment
      </Typography>
      
      <form noValidate onSubmit={handleSubmit} className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={12} md={3}>
       
        <FormControl className={classes.formControl}>

        <TextField
            required
            name="knocks"
            label="knocks"
            onChange={handleChange}
            fullWidth
            //className = {classes.numWidth}
            type = "number"
            helperText="I want to buy"
          />
          
        </FormControl>
        </Grid>
              
        <Grid item xs={12} md={3}>
        <FormControl className={classes.formControl}>
        <TextField
            required
            name="euros"
            label="Euros"
            onChange={handleChange}
            fullWidth
            //className = {classes.numWidth}
            type = "number"
            helperText="costing"
          />
          </FormControl>
        </Grid>
        
        <Grid item xs={12} md={3}>
        <FormControl className={classes.formControl}>
        <TextField
            required
            name="credits"
            label="Credits"
            onChange={handleChange}
            fullWidth
            //className = {classes.numWidth}
            type = "number"
            helperText="maintenance credits"
          />
        </FormControl>
        </Grid>
        <Grid item xs={12} md={3}>
        <FormControl className={classes.formControl}>
        <TextField
            required
            name="persons"
            label="Persons"
            onChange={handleChange}
            fullWidth
            //className = {classes.numWidth}
            type = "number"
            helperText="credit for"
          />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={3}>
        <FormControl className={classes.formControl}>
        <TextField
            required
            name="costionc"
            label="credit costing"
            onChange={handleChange}
            fullWidth
            //className = {classes.numWidth}
            type = "number"
            helperText="for credits"
          />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={12}>
        <FormControl className={classes.formControl}>
        <TextField
            required
            name="total"
            label="Total cost"
            onChange={handleChange}
            fullWidth
            //className = {classes.numWidth}
            type = "number"
            helperText="Euro"
          />
          </FormControl>
        </Grid>
        
  <Grid item xs={12} className={classes.center}>
  <Button variant="contained"  color="primary" type="submit" className={classes.button}>
        Find
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>

  </Grid>
  
  </Grid>
      
      </form>
    </Paper>
  );
}

export default withRouter (PaymentForm);