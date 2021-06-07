import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CommentIcon from '@material-ui/icons/Comment';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
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

Modal.setAppElement("#root");

const drawerWidth = 240;

const BbsButton = styled(Button)`
  font-size: 20px;
  padding: 15px 103px 15px 36px;
`

const ChatButton = styled(Button)`
  font-size: 20px;
  padding: 15px 82px 15px 36px;
`

const Header: React.FC =  () => {

  const useStyles = makeStyles((theme) => ({
    white: {
      color: grey[50],
    },
    textDecorationNone: {
      textDecoration: 'none',
    },
    header: {
      textDecoration: 'none',
      display: 'block',
      "&:hover": {
        backgroundColor: '#f2f3f7',
      },
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
      justifyContent: 'center',
    },
    contentShift: {
    },
  }));

  const classes = useStyles();

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
        className={clsx({
          [classes.contentShift]: open,
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
        variant="persistent"
        anchor="left"
        transitionDuration={200}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader} style={{backgroundColor: '#3f51b5'}}>
          <IconButton onClick={handleDrawerClose} style={{color: 'white', fontWeight: 'bold'}}>
            <MenuIcon />
          </IconButton>
          <Link to="/" className={classes.textDecorationNone} style={{color: 'white', fontWeight: 'bold'}}>
            海外移住ちゃんねる
          </Link>
        </div>
        <List>
          <Link to="/thread" className={classes.header}>
            <BbsButton startIcon={<CommentIcon style={{ fontSize: 35 }}/>}>
            掲示板
            </BbsButton>
          </Link>
          <Link to="/chat" className={classes.header}>
            <ChatButton startIcon={<ForumIcon style={{ fontSize: 35 }}/>}>
              チャット
            </ChatButton>
          </Link>
        </List>
      </Drawer>

    </React.Fragment>
  );
}

export default Header;