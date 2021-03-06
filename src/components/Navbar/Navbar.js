import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import  logo from '../../images2/img-logo.jpeg';

import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' target="_parent" className='navbar-logo' onClick={closeMobileMenu}>
            FUTURE
            {/*<img src={logo}></img>*/}      
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' target="_parent" className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/curso'
                target="_parent"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Cursos
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                target="_parent"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Certificados
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                target="_parent"
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          <Link to='/sign-up' target="_parent">
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </Link>          
        </div>
      </nav>
    
  );
}

export default Navbar;