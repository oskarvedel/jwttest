import React, {Component} from 'react';
import axios from 'axios';

export class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    handleSubmit(event) {
        alert('A username was submitted: ' + this.state.username);
        alert('A password was submitted: ' + this.state.password);
        event.preventDefault();
    }
    
    logInPost()
    {
        axios.post('/user', {
            firstName: this.state.username,
            lastName: this.state.password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" name='username' value={this.state.username} onChange={this.handleChange}/>
                </label>
                <label>
                    Password:
                    <input type="password" name='password' value={this.state.password} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}