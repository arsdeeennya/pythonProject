import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Link as LinkRouter } from 'react-router-dom';
import grey from '@material-ui/core/colors/grey';
import styled from 'styled-components'

const HomeButton = styled(Button)`
  color: white;
  font-size: 20px;
`
const Head = styled(AppBar)`
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
`

const Header: React.FC =  () => {

  const useStyles = makeStyles((theme) => ({
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
      <Head position="relative">
        <Toolbar>
          <LinkRouter to="/" className={classes.textDecorationNone}>
            <HomeButton startIcon={<HomeIcon style={{ fontSize: 35 }}/>}>
              HOME
            </HomeButton>
          </LinkRouter>
        </Toolbar>
      </Head>
    </React.Fragment>
  );
}

export default Header;