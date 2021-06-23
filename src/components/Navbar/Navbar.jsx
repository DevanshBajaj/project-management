import React from 'react';

import classes from './Navbar.module.css';

const Navbar = () => {
  

  return (
    <nav className={classes.nav}>
      <ul>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
            <button>Create Form</button>
      </ul>
    </nav>
  );
};

export default Navbar;