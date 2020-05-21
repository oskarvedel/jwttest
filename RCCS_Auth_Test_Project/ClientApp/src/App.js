import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import AdminRoute from './components/AdminRoute';
import CoordinatorRoute from './components/CoordinatorRoute';
//import NursingStaffRoute from './components/NursingStaffRoute';
import './custom.css'

import {Layout} from './components/Layout';
import {Home} from './components/Home';
import {LogIn} from './components/LogIn';
import {Register} from "./components/Register";
import {ShowAllUsers} from "./components/ShowAllUsers";
import {Container} from "reactstrap";

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout/>
        );
    }
}
