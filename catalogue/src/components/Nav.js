import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/css/nav.css';

function Nav() {
  return (
    <>
      <nav>
        <div className="nav-logo">
          Bubble
          <img src="" alt="" />
        </div>
        <div className="nav-links">
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/about">
            <div>About</div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
