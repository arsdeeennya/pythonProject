import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Thread from './components/Thread';
import {Chat} from './components/Chat';
import Dev from './components/Dev';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>　
      <Header/>
        <Route exact path="/" component={Home} />
        <Route exact path="/thread" component={Thread} />
        <Route exact path="/chat" component={Dev} />
        <Route exact path="/dev" component={Dev} />
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();