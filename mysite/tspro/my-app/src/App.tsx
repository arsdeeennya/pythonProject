import React,{useState} from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Thread from './components/Thread';
import Chat from './components/Chat';
import Dev from './components/Dev';
import { Route, BrowserRouter } from "react-router-dom";

interface openProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const openState = React.createContext({} as openProps);

function App() {
  const [open, setOpen] = useState(false);
  const value = {
    open,
    setOpen,
  };

  return (
  <React.StrictMode>
    <BrowserRouter>
      <openState.Provider value={value}>
        <Header/>
          <Route exact path="/" component={Home} />
          <Route exact path="/thread" component={Thread} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/dev" component={Dev} />
        <Footer/>
      </openState.Provider>
    </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;
