import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"



const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <>
            <nav className='navbar'>
                <h3 className='Logo'><img src="images/logo/ipl.png" width="70px" height="50px" alt='error'></img></h3>
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                    onClick={() => setIsMobile(false)}>
                    <Link to="/" className='home'>
                        <li>Home</li>
                    </Link>
                    <Link to="/about" className='about'>
                        <li>About</li>
                    </Link>
                    <Link to="/squad" className='squad'>
                        <li>Squad</li>
                    </Link>
                    <Link to="/news" className='news'>
                        <li>News</li>
                    </Link>
                    <Link to="/signup" className='signup'>
                        <li>Sign up</li>
                    </Link>

                </ul>

                <button className='mobile-menu'
                    onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? (<i className='fas fa-times'></i>) :
                     (<i className='fas fa-bars'></i>)}

                </button>
            </nav>
        </>
    )
}

export default Navbar;