import React from 'react';
//import'./header.css';
class Header extends React.Component {
    render() {
        return (
            // <div className="Header">
            //     <div>Header</div>

            // </div >
            <nav  class="navbar navbar-expand-lg navbar-light bg-light">
                <ul  class="navbar-nav mr-auto">
                    <li  class="nav-item">
                        <a  class="nav-link" href="/home">home</a>
                    </li>
                    <li  class="nav-item">
                        <a  class="nav-link" href="/signup">signup</a>
                    </li>
                    <li  class="nav-item">
                        <a  class="nav-link" href="/login">Login</a>
                    </li>
                    <li  class="nav-item">
                        <a  class="nav-link" href="/hello">Hello</a>
                    </li>
                    <li  class="nav-item">
                        <a  class="nav-link" href="/error">Error</a>
                    </li>
                </ul>
            </nav>

        )
    };
}

export default Header;