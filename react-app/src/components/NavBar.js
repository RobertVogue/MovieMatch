import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import "../index.css"

const NavBar = ({ setAuthenticated }) => {
  const sessionUser = useSelector((state) => state?.session?.user);
  return (
    <nav className="liner">
      <ul id="space"></ul>
      <ul id="nav">
        <li>
          <NavLink
            id="ez2"
            to="/movies"
            exact={true}
          >Movies</NavLink>
        </li>
        <li>
          <NavLink
            id="ez"
            to="/meetings/Demo"
            exact={true}
          >Messaging</NavLink>
        </li>
      </ul>
      <ul id="nav2">
        <Link to='/' className="link">
        <div className="title">MovieMatch</div>
        </Link>
      </ul>
      <ul id="nav3">
        <li>
            <LogoutButton setAuthenticated={setAuthenticated} />
        </li>
      </ul>
      <ul id="space2"></ul>
    </nav>
  );
}

export default NavBar;
