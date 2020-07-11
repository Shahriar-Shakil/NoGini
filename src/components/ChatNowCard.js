import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

 function ChatNowCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const handleClick =(e)=>{
    
    props.redirectTo("/register");
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Online 
        </Typography>
        <Typography variant="h5" component="h2">
          {props.detail.name}
          
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          good rated
        </Typography>
        <Typography variant="body2" component="p">
         Display the paid information
          <br />
          Second information
        </Typography>
      </CardContent>
      <CardActions>
    {props.detail.name === "You" ? <hr/> : 
      <Button variant="outlined" color="primary" fullWidth onClick={handleClick}>
        Chat Now
      </Button>
    }
      </CardActions>
    </Card>
  );
}

export default ChatNowCard