import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../Resources/Images/Pixabay-logo.svg';

const Navbar = () => (
  <nav>
    <div id="burgerContainer">
      <GiHamburgerMenu style={{ color: 'red', fontSize: '25px' }} />
    </div>
    <NavLink to="/">
      <img
        alt="logo"
        src={logo}
        id="logo"
      />
    </NavLink>
    <ul id="navigation">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'navigationLink currentPage' : 'navigationLink')}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'navigationLink currentPage' : 'navigationLink')}
      >
        About
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) => (isActive ? 'navigationLink currentPage' : 'navigationLink')}
      >
        My profile
      </NavLink>
    </ul>
  </nav>
);

export default Navbar;
