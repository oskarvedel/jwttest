import React, {Component} from 'react';
import {Route} from 'react-router';

import './custom.css'

import {Layout} from './components/Layout';
import {Home} from './components/Home';
import {LogIn} from './components/LogIn';
import {Register} from "./components/Register";
import {ShowAllUsers} from "./components/ShowAllUsers";


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home}/>
                <Route path='/log-in' component={LogIn}/>
                <Route path='/register' component={Register}/>
                <Route path='/show-all-users' component={ShowAllUsers} />
            </Layout>
        );
    }
}
