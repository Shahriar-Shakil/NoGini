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
    // minHeight : 40
  },
  content : {
    minHeight : 40
  }
});

export default function UserInfoCard(props) {
  const classes = useStyles();
  

  return (
    <Card className={classes.card}>
      <CardContent>
  
        <Typography variant="h5" component="h2">
          {props.userData.username}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         {props.userData.gender} , {props.userData.age}
        </Typography>
        {(props.showDetails)?
            <Typography variant="body2" component="p" className={classes.content}>
        
          {props.userData.about}
        </Typography>
        : ""
        }
      </CardContent>
      <CardActions>
        <Button size="small">Chat Now</Button>
      </CardActions>
    </Card>
  );
}