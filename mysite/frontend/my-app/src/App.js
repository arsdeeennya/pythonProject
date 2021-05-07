import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Bbs from './components/Bbs';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/bbs" component={Bbs} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;