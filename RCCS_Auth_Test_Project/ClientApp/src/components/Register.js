import React, {Component} from 'react';

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {user: [], loading: true, firstname: '', lastname: '', username: '', password: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    async handleSubmit(event) {
        event.preventDefault();
        let user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName: this.state.username,
            password: this.state.password
        };

        const response = await fetch('/users/register', {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        let result = await response.json();
        alert(result.message);
        event.preventDefault();
    };
    
    /*async handleRegisterAlt() {
        axios.post('/users/register', {

            firstName: this.state.firstname,
            lastName: this.state.lastname,
            userName: this.state.username,
            password: this.state.password,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }*/

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    FirstName:
                    <input type="text" name='firstname' value={this.state.user} onChange={this.handleChange}/>
                </label>
                <label>
                    LastName:
                    <input type="text" name='lastname' value={this.state.user} onChange={this.handleChange}/>
                </label>
                <label>
                    Username:
                    <input type="text" name='username' value={this.state.user} onChange={this.handleChange}/>
                </label>
                <label>
                    Password:
                    <input type="password" name='password' value={this.state.user} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}