import React, { Component } from 'react';
import './Signin.css';
import { Link } from 'react-router-dom'


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
                            <span className="sign-in-heading-primary-sub">Hit the button to get started</span>
                        </div>

                        <div className="input-wrapper">
                            <div className="sign-in-btn-container">
                                <button className="sign-in-button" name="Sign In">See the notes</button>
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