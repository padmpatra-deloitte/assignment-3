import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.scss'

function Nav() {
    return (
        <header className="header">
            <div className="header__inner">
                <div className="logo"><svg width="46" height="33" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(0 -.53)" fill="none" >
                        <rect fill="#AEA6E2" transform="rotate(45 29.586 17)" x="17.586" y="5" width="24" height="24" rx="2" />
                        <path d="m18.414 1.444 14.142 14.142a2 2 0 0 1 0 2.828L18.414 32.556a2 2 0 0 1-2.828 0L1.444 18.414a2 2 0 0 1 0-2.828L15.586 1.444a2 2 0 0 1 2.828 0Zm-.707.707a1 1 0 0 0-1.414 0L2.15 16.293a1 1 0 0 0 0 1.414L16.293 31.85a1 1 0 0 0 1.414 0L31.85 17.707a1 1 0 0 0 0-1.414L17.707 2.15Z" fill="#CBC8E1" />
                    </g>
                </svg></div>
                <nav className="menu">

                    <Link to={'/'}>Home</Link>
                    <Link to={'/user'}>User</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contact'}>Contact</Link>
                </nav>

            </div>
        </header>
    );
}

export default Nav;
