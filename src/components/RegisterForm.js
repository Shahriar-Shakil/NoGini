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
import Input from '@material-ui/core/Input';

import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';




const useStyles = makeStyles(theme => ({
    
    grid: {
      maxWidth : "50vw",
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
      margin: {
        margin: theme.spacing(1),
      },
      withoutLabel: {
        marginTop: theme.spacing(3),
      },
      textField: {
        flexBasis: 200,
        width : 250,
      },
      textEmail: {
        flexBasis: 200,
        width : 250,
      },
      oath : {
        [theme.breakpoints.down('sm')]: {
          fontSize: "0.1rem !important",
        },
      }
    
    
  }));
  

function BasicForm(props) {
    const classes = useStyles();
    
    const [values, setValues] = React.useState({
      email : "",
      password : "",
      cpassword : "",
      adult : "",
      recaptcha : "",
      showPassword: false,
      
    });
      
      function handleChange(event) {
        // console.log(event.target.name);
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      }
      const handleMouseDownPassword = event => {
        event.preventDefault();
      };

      const handleSubmit =(e)=>{
        e.preventDefault();
        props.history.push("/chatbox");

      }
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };

      function onChange(value) {

        setValues(oldValues => ({
          ...oldValues,
          "recaptcha": value,
        }));
        console.log("Captcha value:", value);
      }
       
  return (
    


      <form className={classes.root} noValidate onSubmit={handleSubmit}>
      <Grid container >
        <Grid item xs={12} className={classes.grid} >
            
          <TextField required name="email" label="Email" 
          className={clsx(classes.margin, classes.textEmail)}
           onChange={handleChange} />
        </Grid>
        <Grid item xs={12} >
        <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor="password">Password *</InputLabel>
        <Input
        
          id="password"
          name ="password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange}
          required
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
        </Grid>
        <Grid item xs={12} >
        <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor="cpassword">Confirm Password *</InputLabel>
        <Input
        
          id="cpassword"
          name ="cpassword"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange}
          required
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
        </Grid> 
        
        <Grid item xs={8}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="adult" value="yes" onChange={handleChange} />}
            label="i am a adult i take full responsibility if i am being reported upon abuse."
            className={classes.oath}
          />

        </Grid>
        <Grid item xs={8}>
        <ReCAPTCHA
    sitekey="6LftEp4UAAAAAOJoddCoFAPkfdaqa5ZjenwlqF1J"
    onChange={onChange}
  />
  <Grid item xs={12} className={classes.center}>
  <Button variant="contained"  color="primary" type="submit" className={classes.button}>
        Start Chatting
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>

  </Grid>
  
  </Grid>
      </Grid>
      </form>
   
  );
}

export default withRouter (BasicForm);