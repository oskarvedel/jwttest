import React, {Component} from 'react';

export class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {user: [], loading: true, username: null, password: null};
        this.state = {UserLoggedIn: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
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

        const response = await fetch('/users/authenticate', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: userStringified
        });
        
        if (response.ok) { // if HTTP-status is 200-299
            // get the response body (the method explained below)
            this.setState({UserLoggedIn: true});
            let responseBody = response.text();
            console.log(responseBody);
            let token = responseBody.token;
            console.log(token);
            localStorage.setItem('loginToken', responseBody)
        } else {
            alert("HTTP-Error: " + response.status);
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
                                <input type="text" name='username' value={this.state.username}
                                       onChange={this.handleChange}/>
                            </label>
                            <label>
                                Password:
                                <input type="password" name='password' value={this.state.password}
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