import React, { Component } from 'react';
import './Signin.css';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            key: '',
        }
    }

    render () {
        return (
            <div className="container">
                <div className="sign-in-container">
                    <div className="form-container">
                        <div className="sign-in-heading-primary">
                            <span className="sign-in-heading-primary-main">Welcome to djorg notes</span>
                            <span className="sign-in-heading-primary-sub">Please sign in below</span>
                        </div>

                        <div className="input-wrapper">
                            <div className="username-input-container">
                                <input name="username" className="username-input" placeholder="Enter username..." onChange={this.handleUsernameInputChange}/>
                            </div>
                            <div className="password-input-container">
                                <input name="password" className="password-input" placeholder="Enter password..." onChange={this.handlePasswordInputChange}/>
                            </div>
                            <div className="secret-key-input-container">
                                <input name="secretKey" className="key-input" placeholder="Enter Secret Key..." onChange={this.handleSecretKeyInputChange}/>
                            </div>
                            <div className="sign-in-btn-container">
                                <button className="sign-in-button" name="Sign In">Sign In</button>
                            </div>
                            <div className="register-btn-container">
                                <button className="register-button" name="Register">New User</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleUsernameInputChange = (event) => {
        this.setState({username: event.target.value})
        console.log(this.state);
    }

    handlePasswordInputChange = (event) => {
        this.setState({password: event.target.value})
        console.log(this.state);
    }

    handleSecretKeyInputChange = (event) => {
        this.setState({key: event.target.value})
        console.log(this.state);
    }
}

export default Signin;