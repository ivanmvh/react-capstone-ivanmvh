import './Navbar.css';
import { NavLink, useLocation } from 'react-router-dom';
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io';
import { BsFillMicFill } from 'react-icons/bs';

const Navbar = () => {
  const location = useLocation();

  const currentYear = new Date().getFullYear();
  return (
    <nav>
      <div className="flex row">
        <NavLink
          className={({ isActive }) => (isActive ? 'activeLink' : 'homeLink')}
          to="/"
          type="button"
        >
          <IoIosArrowBack />
        </NavLink>
        <p id="year">{currentYear}</p>
      </div>
      <p className="header-items">{location.pathname === '/' ? 'most view categories' : 'photos by category'}</p>
      <div>
        <button
          className="buttonNav"
          type="button"
        >
          <BsFillMicFill className="header-items" />
        </button>
        <button
          className="buttonNav"
          type="button"
        >
          <IoIosSettings className="header-items" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
