import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';
import MainPageContainer from './MainPageContainer';
import Fish from './Fish';
import Aquarium from './Aquarium';
import { Container, Col, Nav, Navbar } from 'react-bootstrap';
class App extends Component {
    render() {
        return (
            <Router>
                <MainPageContainer />
                <Switch>
                    {/* <Route exact path="/" component={MainPageContainer} /> */}
                    <Route path="/fish" component={Fish} />
                    <Route path="/aquarium" component={Aquarium} />
                </Switch>
            </Router>
        );
    }
}

export default App;