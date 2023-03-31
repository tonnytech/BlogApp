import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.jpg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" className="logoImage" />
        </div>
        <div className="links">
            <Link>ART</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;