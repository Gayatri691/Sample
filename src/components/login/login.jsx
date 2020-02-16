import React from 'react';
// import './login.css';
class Login extends React.Component {

    render() {
        return (
            <div class="loginform">
                <div class="form-group">
                    <label for="Username">Username</label>
                    <input type="text" />

                </div>
                <div class="form-group">
                    <label for="Password">Password</label>
                    <input type="password" />
                </div>
                <div class="form group btn-group">
                    <button>Login</button>

                </div>
            </div>
        );
    }
}

export default Login;