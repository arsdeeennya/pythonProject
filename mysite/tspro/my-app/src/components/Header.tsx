import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link as LinkRouter } from 'react-router-dom';
import grey from '@material-ui/core/colors/grey';

const Header: React.FC =  () => {

  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    white: {
      color: grey[50],
    },
    textDecorationNone: {
      textDecoration: 'none',
    },
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <LinkRouter to="/" className={classes.textDecorationNone}>
            <Button size="small" color="default">
              <Typography variant="h6" noWrap className={classes.white}>
                HOME
              </Typography>
            </Button>
          </LinkRouter>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;