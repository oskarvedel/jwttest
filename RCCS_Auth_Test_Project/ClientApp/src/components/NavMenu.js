import React, {Component} from 'react';
import {Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './NavMenu.css';
import {Home} from './Home';
import {LogIn} from './LogIn';
import {Register} from "./Register";
import {ShowAllUsers} from "./ShowAllUsers";
import AdminRoute from "./AdminRoute";

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Router>
                    <div>
                        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
                                light>
                            <Container>
                                <NavbarBrand tag={Link} to="/">ASP.NETCoreWebApplication</NavbarBrand>
                                <NavbarToggler onClick={this.toggleNavbar} className="mr-2"/>
                                <Collapse className="d-sm-inline-flex flex-sm-row-reverse"
                                          isOpen={!this.state.collapsed}
                                          navbar>
                                    <ul className="navbar-nav flex-grow">
                                        <NavItem>
                                            <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} className="text-dark" to="/log-in">Log In</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} className="text-dark" to="/register">Register </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} className="text-dark" to="/show-all-users">Show all
                                                users</NavLink>
                                        </NavItem>
                                    </ul>
                                </Collapse>
                            </Container>
                        </Navbar>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/log-in" component={LogIn} />
                        <AdminRoute path="/show-all-users" component={ShowAllUsers} />
                    </div>
                </Router>
            </header>
        );
    }
}
