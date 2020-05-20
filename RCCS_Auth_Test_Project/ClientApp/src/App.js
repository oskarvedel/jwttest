import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import './custom.css'

import {Layout} from './components/Layout';
import {Home} from './components/Home';
import {LogIn} from './components/LogIn';
import {Register} from "./components/Register";
import {ShowAllUsers} from "./components/ShowAllUsers";
import {AuthContext} from "./components/Auth";


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <AuthContext.Provider value={false}>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Home Page</Link>
                            </li>
                            <li>
                                <Link to="/log-in">Login page</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/show-all-users">Show All Users</Link>
                            </li>
                        </ul>
                        <Route exact path="/" component={Home}/>
                        <Route path='/log-in' component={LogIn}/>
                        <Route path='/register' component={Register}/>
                        <PrivateRoute path='/show-all-users' component={ShowAllUsers}/>
                    </div>
                </Router>
            </AuthContext.Provider>
        );
    }
}
