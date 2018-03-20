import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class Header extends Component {
  render() {
     return (
        <header>
            <h2>Welcome to React Router Tutorial</h2>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
            </ul>
            <hr />
        </header>
     );
  }
}
export default Header;