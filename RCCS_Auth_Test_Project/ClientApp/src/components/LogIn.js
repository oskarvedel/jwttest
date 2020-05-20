import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";

export class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {user: [], loading: true, username: null, password: null};
        this.state = {UserLoggedIn: false};
        this.state = {Error: false};
        this.state = {token: null}
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount() {

    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    async handleLogin(event) {
        event.preventDefault();

        let user = {
            userName: this.state.username,
            password: this.state.password
        };

        let userStringified = JSON.stringify(user);
        const that = this;
        fetch('/users/authenticate', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: userStringified
        })
            .then(function (response) {
                if (response.ok) {
                    response.json().then(function (data) {
                        console.log(data["token"]);
                        localStorage.setItem("token", data["token"]);
                        //end of test field
                        console.log('Logged in');
                        that.setState({
                            UserLoggedIn: true
                        });
                    });
                } else {
                    alert("HTTP-Error: " + response.status);
                    console.log('Error - not logged in');
                    that.setState({
                        Error: true
                    });
                }
            }).catch(error => {
            console.error('Caught error:', error);
            that.setState({
                Error: true
            });
        });

        if (this.state.UserLoggedIn) {
            return <Redirect to="/"/>;
        }
    }

    render() {
        const UserLoggedIn = this.state.UserLoggedIn;
        const WhatToRender = () => {
            {
                if (UserLoggedIn) {
                    return <h1>User logged in!</h1>
                } else {
                    return (
                        <form onSubmit={this.handleLogin}>
                            <label>
                                Username:
                                <input type="text" name='username' value={this.state.username || ""}
                                       onChange={this.handleChange}/>
                            </label>
                            <label>
                                Password:
                                <input type="password" name='password' value={this.state.password || ""}
                                       onChange={this.handleChange}/>
                            </label>
                            <input type="submit" value="Login"/>
                        </form>
                    );
                }
            }
        }
        return (
            <div>
                {WhatToRender()}
            </div>
        );
    }
}
