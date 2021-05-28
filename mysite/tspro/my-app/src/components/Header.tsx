import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import Toolbar from '@material-ui/core/Toolbar';
import ThreadForm from './ThreadForm';
import { makeStyles } from '@material-ui/core/styles';
import { Link as LinkRouter } from 'react-router-dom';
import grey from '@material-ui/core/colors/grey';
import styled from 'styled-components'
import Modal from "react-modal";
import CreateIcon from '@material-ui/icons/Create';

Modal.setAppElement("#root");

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
const Head = styled(AppBar)`
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  padding: 5px 0px;
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

  const [modalIsOpen, setIsOpen] = React.useState(false);


  return (
    <React.Fragment>
      <Head position="relative">
        <Toolbar>
          <LinkRouter to="/" className={classes.textDecorationNone}>
            <HeaderButton startIcon={<HomeIcon style={{ fontSize: 35 }}/>}>
              ホーム
            </HeaderButton>
          </LinkRouter>
          <HeaderButton onClick={() => setIsOpen(true)} startIcon={<CreateIcon style={{ fontSize: 35 }}/>}>
            書き込む
          </HeaderButton>
          <Modal isOpen={modalIsOpen}>
            <button onClick={() => setIsOpen(false)}>Close Modal</button>
            <ThreadForm/>
          </Modal>
        </Toolbar>
      </Head>
    </React.Fragment>
  );
}

export default Header;