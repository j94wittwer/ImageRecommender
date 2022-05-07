import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';


  

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                usernameInsta: '', 
                passwordInsta: '',
                usernameFacebook: '', 
                passwordFacebook: '',
                usernamePinterest: '', 
                passwordPinterest: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password && user.usernameInsta && user.passwordInsta && user.usernameFacebook && user.passwordFacebook && user.usernamePinterest && user.passwordFacebook) {
            this.props.register(user);
        }
    }


    
  
   

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
                        {submitted && !user.firstName &&
                            <div className="help-block">First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
                        {submitted && !user.lastName &&
                            <div className="help-block">Last Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
                        {submitted && !user.username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <p>Link your Instagram Account</p>
                    <div className={'form-group' + (submitted && !user.usernameInsta ? ' has-error' : '')}>
                        <label htmlFor="usernameInsta">Instagram Username</label>
                        <input type="text" className="form-control" name="usernameInsta" value={user.usernameInsta} onChange={this.handleChange} />
                        {submitted && !user.usernameInsta &&
                            <div className="help-block">Your Instagram Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.passwordInsta ? ' has-error' : '')}>
                        <label htmlFor="passwordInsta">Instagram Password</label>
                        <input type="text" className="form-control" name="passwordInsta" value={user.passwordInsta} onChange={this.handleChange} />
                        {submitted && !user.passwordInsta &&
                            <div className="help-block">Your Instagram Password is required</div>
                        }
                    </div>
                    <p>Link your Facebook Account</p>
                    <div className={'form-group' + (submitted && !user.usernameFacebook ? ' has-error' : '')}>
                        <label htmlFor="usernameFacebook">Facebook Username</label>
                        <input type="text" className="form-control" name="usernameFacebook" value={user.usernameFacebook} onChange={this.handleChange} />
                        {submitted && !user.usernameFacebook &&
                            <div className="help-block">Your Facebook Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.passwordFacebook ? ' has-error' : '')}>
                        <label htmlFor="passwordFacebook">Facebook Password</label>
                        <input type="text" className="form-control" name="passwordFacebook" value={user.passwordFacebook} onChange={this.handleChange} />
                        {submitted && !user.passwordFacebook &&
                            <div className="help-block">Your Facebook Password is required</div>
                        }
                    </div>

                    <p>Link your Pinterest Account</p>
                    <div className={'form-group' + (submitted && !user.usernamePinterest ? ' has-error' : '')}>
                        <label htmlFor="usernamePinterest">Pinterest Username</label>
                        <input type="text" className="form-control" name="usernamePinterest" value={user.usernamePinterest} onChange={this.handleChange} />
                        {submitted && !user.usernamePinterest &&
                            <div className="help-block">Your Pinterest Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.passwordPinterest ? ' has-error' : '')}>
                        <label htmlFor="passwordPinterest">Pinterest Password</label>
                        <input type="text" className="form-control" name="passwordPinterest" value={user.passwordPinterest} onChange={this.handleChange} />
                        {submitted && !user.passwordPinterest &&
                            <div className="help-block">Your Pinterest Password is required</div>
                        }
                    </div>

                    
                  
                    
                    
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        {registering && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };