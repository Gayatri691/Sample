import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Display from '../display/display';
import Login from '../login/login';
import Signup from '../signup/signup';
import Hello from '../hello/hello';
import Error from '../error/error';


class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Display} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/hello' component={Hello} />
                <Error path='/error' component={Error} />
                

            </Switch>
        )
    }
}

export default Main;
