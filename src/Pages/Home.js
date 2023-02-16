import { NavLink } from 'react-router-dom';
import { VscFoldDown } from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';
import categories from './categoriesList';
import { filterCategory } from '../Redux/PhotosSlice';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();

  const handleClick = (code, page, name) => {
    const parameters = {
      categoryCode: code,
      page,
      categoryName: name,
    };
    dispatch(filterCategory(parameters));
  };

  return (
    <div id="homeContainer">
      <header>
        <div id="headerImage" className="filtered">
          <img src="../Resources/Images/header2.jpg" alt="header" />
        </div>
        <div id="headerText">
          <h1>WELCOME TO PHOTO STORE</h1>
          <p id="headerDescription">A place where you can find the best photos for free</p>
          <a
            id="discoverAction"
            href="#categoryGrid"
          >
            <VscFoldDown style={{ color: 'white' }} />
          </a>
        </div>
      </header>
      <h2 id="gridTitle">Categories</h2>
      <div id="categoryGrid">
        {categories.map((category) => (
          <div
            className="categoryContainer"
            key={category.categoryCode}
          >
            <NavLink
              to={`./category/${category.categoryCode}`}
              key={category.categoryCode}
              onClick={() => handleClick(
                category.categoryCode,
                category.page,
                category.categoryName,
              )}
              className={`categoryLink ${category.categoryCode}`}
            >
              <div className="icon-wrapper">
                <FaArrowRight />
              </div>
              <h3 className="categoryTitle">{category.categoryName}</h3>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
