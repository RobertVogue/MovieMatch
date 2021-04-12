import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import "../index.css"

const NavBar = ({ setAuthenticated }) => {
  const sessionUser = useSelector((state) => state?.session?.user);
  return (
    <nav className="liner">
        <Link to='/' className="link">
        <div className="title">MovieMatch</div>
        </Link>
      <div className="search">
        <form action="" method="get">
          <label htmlFor="header-search">
            <span className="visually-hidden"></span>
          </label>
          <input
            className="hidden2"
            type="text"
            id="header-search"
            placeholder="Search"
            name="q"
            autoComplete="off"
          />
          <button className="hidden" type="submit"></button>
        </form>
      </div>
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
            to="/friends/Demo"
            exact={true}
          >Friends</NavLink>
        </li>
        <li>
          <NavLink
            id="ez"
            to="/meetings/Demo"
            exact={true}
          >Messaging</NavLink>
        </li>
        <li>
            <LogoutButton setAuthenticated={setAuthenticated} />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
