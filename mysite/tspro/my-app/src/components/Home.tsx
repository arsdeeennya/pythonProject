import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const Home: React.FC =  () => {

  const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              海外移住ちゃんねる
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              外国ってどうなんだろうと思う人たちが<br></br>好きなことを好きなだけ話し合える場所です。      
            </Typography>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Home;