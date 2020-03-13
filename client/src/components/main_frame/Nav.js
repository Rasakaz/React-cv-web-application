import '../../App.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {

    render() {

        return (
            <nav className="Nav">
                
                <ul className="nav-links">
                    < Link exact = "true" to="/" style={{  textDecoration: "none"}}>
                        <li className='li-circle'>
                            <i>Home</i>
                        </li>
                    </Link>

                    <Link to="/professional" style={{  textDecoration: "none"}}>
                        <li className='li-circle'><i>Professional</i></li>
                    </Link>

                    <Link to='/aboutMe' style={{  textDecoration: "none"}}>
                        <li className='li-circle'><i>About Me</i></li>
                    </Link>

                    <Link to='/contact' style={{  textDecoration: "none"}}>
                        <li className='li-circle'><i>Contact</i></li>
                    </Link>
                </ul>
            </nav >
        );
    }
}

export default Nav;