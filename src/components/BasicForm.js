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
    }
    
  }));
  

function BasicForm(props) {
    const classes = useStyles();
    
    const [values, setValues] = React.useState({
      username : "",
      location : "",
      language : "",
      adult : "",
      recaptcha : "",
      gender : "",
      age : ""
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
        Welcome
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
      To start off right away. please confirm your details.
      </Typography>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required name="username" label="UserName" fullWidth onChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={6}>
        <InputLabel htmlFor="language-helper">Prefered Language *</InputLabel>
        <Select
          value={values.language}
          onChange={handleChange}
          inputProps={{
            name: 'language',
            id: 'language-helper',
          }}
          fullWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>English</MenuItem>
          <MenuItem value={20}>Spanish</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </Grid>
        <Grid item xs={12} md={6}>
        <InputLabel htmlFor="gender-helper">Gender *</InputLabel>
        <Select
        required
          value={values.gender}
          onChange={handleChange}
          inputProps={{
            name: 'gender',
            id: 'gender-helper',
          }}
          fullWidth
        >
          
          <MenuItem value={10}>Male</MenuItem>
          <MenuItem value={20}>Female</MenuItem>
          
        </Select>
        </Grid> 
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="age"
            label="Age"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="location"
            label="Location"
            onChange={handleChange}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="adult" value="yes" onChange={handleChange} />}
            label="i am an adult."
          />

        </Grid>
        <Grid item xs={12}>
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
    </Paper>
  );
}

export default withRouter (BasicForm);