import React from 'react';
import classes from './Navbar.module.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;