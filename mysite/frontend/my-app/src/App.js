import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Bbs from './components/Bbs';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/bbs" component={Bbs} />
                </Switch>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default App;