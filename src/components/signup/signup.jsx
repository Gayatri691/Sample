import React from 'react';
import './signup.css'
class Signup extends React.Component {

    render() {

        return (
            <div class="loginform">
                <div>Signup</div>
                <div class="form-group">
                    <lable for="Username">Username</lable>
                    <input type="test" />

                </div>
                <div class="from-group">
                    <label for="password">password</label>
                    <input type="password" />

                </div>
                <div class='form-group btn.group'>
                    <button>Signup</button>

                </div>

            </div>

        );

    }

}

export default Signup;

