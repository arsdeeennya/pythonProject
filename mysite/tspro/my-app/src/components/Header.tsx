import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CommentIcon from '@material-ui/icons/Comment';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import grey from '@material-ui/core/colors/grey';
import styled from 'styled-components'
import Modal from "react-modal";
import ForumIcon from '@material-ui/icons/Forum';
import MenuIcon from '@material-ui/icons/Menu';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

Modal.setAppElement("#root");

const drawerWidth = 240;


const HeaderButton = styled(Button)`
  color: white;
  font-size: 20px;
  margin: 0px 10px;
  border: 3px groove white;
  border-radius: 11px;
  background-color: black;
  &:hover {
    font-weight: bold;
    background-color: black;
  }
`

const Header: React.FC =  () => {

  const useStyles = makeStyles((theme) => ({
    white: {
      color: grey[50],
    },
    textDecorationNone: {
      textDecoration: 'none',
    },
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }));

  const classes = useStyles();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('海外移住ちゃんねる');

  const handleDrawerOpen = () => {
    setOpen(true);
    setTitle('');
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setTitle('海外移住ちゃんねる');
  };

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" className={classes.textDecorationNone} style={{color: 'white', fontWeight: 'bold'}}>
            {title}
          </Link>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        transitionDuration={200}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader} style={{backgroundColor: '#3f51b5'}}>
          <Link to="/" className={classes.textDecorationNone} style={{color: 'white', fontWeight: 'bold'}}>
            海外移住ちゃんねる
          </Link>
          <IconButton onClick={handleDrawerClose} style={{color: 'white', fontWeight: 'bold'}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <List>
          <Link to="/thread" className={classes.textDecorationNone}>
            <HeaderButton startIcon={<CommentIcon style={{ fontSize: 35 }}/>}>
              掲示板
            </HeaderButton>
          </Link>
          <Link to="/chat" className={classes.textDecorationNone}>
            <HeaderButton startIcon={<ForumIcon style={{ fontSize: 35 }}/>}>
              チャット
            </HeaderButton>
          </Link>
        </List>
      </Drawer>

    </React.Fragment>
  );
}

export default Header;