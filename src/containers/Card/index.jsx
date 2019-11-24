import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 340,
    width: 630,
    marginTop: '2em',
  },
  control: {
    padding: theme.spacing(10),
  },
  title: {
      color: 'black',
      fontSize: '1.1em',
      marginLeft: '.9em',
      marginBottom: '1em'
  },
  cardDetails: {
      display: 'flex',
      marginTop: '1.3em',
      
  },
  details: {
      color: 'black',
      fontSize: '.8em',
      marginTop: '.2em',
      
  },
  columnEnd: {
      marginLeft: 'auto',
      marginRight: '9em',
      maxWidth: '6em'
  },
  pos: {
      marginLeft: '1em'
  }
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={5}>
          
            <Grid key={0} item>
              <Card className={classes.paper}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Contact info
          </Typography>
          <div className={classes.cardDetails}>
          <Typography className={classes.pos} color="textSecondary">
            Email
            <br/>
          <span className={classes.details}>
            Michaelmulwa@gmail.com
          </span>
          </Typography>
          
          <Typography className={classes.columnEnd} color="textSecondary">
            Phone
            <br/>
            <span className={classes.details}>
            +254702345356
          </span>
          </Typography>
          
          </div>
          
          <div className={classes.cardDetails}>
          <Typography className={classes.pos} color="textSecondary">
            Mobile
            <br/>
          <span className={classes.details}>
            +25472345356
          </span>
          </Typography>
          
          <Typography className={classes.columnEnd} color="textSecondary">
            Address
            <br/>
            <span className={classes.details}>
            Kilimani Villas, 5th floor, Nairobi
          </span>
          </Typography>
          
          </div>

          <div className={classes.cardDetails}>
          <Typography className={classes.pos} color="textSecondary">
            Notes
            <br/>
          <span >
            No notes yet.
          </span>
          </Typography>
          
          </div>
        </CardContent>
      </Card>
            </Grid>

            <Grid key={1} item>
              <Card className={classes.paper}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Chat section
          </Typography>
          <div className={classes.cardDetails}>
          <Typography className={classes.pos} color="textSecondary">
            Chat
          
          </Typography>
          
          </div>
        
        </CardContent>
      </Card>
            </Grid>
        </Grid>
      </Grid>
      
    </Grid>
  );
}


// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';


// const useStyles = makeStyles({
//     card: {
//       minWidth: 275,
//     },
//     bullet: {
//       display: 'inline-block',
//       margin: '0 2px',
//       transform: 'scale(0.8)',
//     },
//     title: {
//       fontSize: 14,
//     },
//     pos: {
//       marginBottom: 12,
//     },
//   });

//   export default function SimpleCard() {
//     const classes = useStyles();
//     const bull = <span className={classes.bullet}>•</span>;
  
//     return (
    //   <Card className={classes.card}>
    //     <CardContent>
    //       <Typography className={classes.title} color="textSecondary" gutterBottom>
    //         Word of the Day
    //       </Typography>
    //       <Typography variant="h5" component="h2">
    //         be
    //         {bull}
    //         nev
    //         {bull}o{bull}
    //         lent
    //       </Typography>
    //       <Typography className={classes.pos} color="textSecondary">
    //         adjective
    //       </Typography>
    //       <Typography variant="body2" component="p">
    //         well meaning and kindly.
    //         <br />
    //         {'"a benevolent smile"'}
    //       </Typography>
    //     </CardContent>
    //     <CardActions>
    //       <Button size="small">Learn More</Button>
    //     </CardActions>
    //   </Card>
//     );
//   }