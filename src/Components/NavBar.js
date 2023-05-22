import React from 'react';
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <span className="navbar-brand" href='#'>
                Navbar
            </span>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNavAltMarkup'
                aria-controls='navbarNavAltMarkup'
                aria-expanded='false'
                area-label='Toggle navigation'
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id='navbarNafAltMarkup'>
                <div className="navbar-nav">
                    <span className="nav-item nav-link active" href='#'>
                        <link to='/about'>About</link>
                        <span className="sr-only">(current)</span>
                    </span>
                    <span className="nav-item nav-link active" href='#'>
                        <link to='/contact'>Contact Us</link>
                    </span>
                    <span className="nav-item nav-link active" href='#'>
                        <link to='/user/Ned Navigator'>User</link>
                    </span>
                    <span className="nav-item nav-link active" href='#'>
                        <link to='/login'>Login</link>
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;