import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Navbar from '../Navbar';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: '2em 4.5em',
    minHeight: '20em'
    
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

export default function CardSection() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Navbar navItemList={['Patients', 'Appointments', 'Reminders']} class={"category-block span-large"}></Navbar>
        <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={5}>

        {[{'name': 'Adebayo', 'gender': 'male', 'breed': 'Russian blue', 'age': '4Y 10M'}, {'name': 'Ekke', 'gender': 'male', 'breed': 'Russian blue', 'age': '4Y 10M'}, {'name': 'Kivu', 'gender': 'male', 'breed': 'Russian blue', 'age': '4Y 10M'}].map(item => (
                <Grid key={0} item>
                <div >
                <span>{item.name}</span> 
            </div>
              
                </Grid>
            ) )}
          
            
        </Grid>
      </Grid>
      
    </Grid>
      </CardContent>
      
    </Card>
  );
}