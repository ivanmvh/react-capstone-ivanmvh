import { NavLink } from 'react-router-dom';
import { VscFoldDown } from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';
import { filterCategory } from '../Redux/PhotosSlice';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();

  const categories = [
    { categoryCode: 'backgrounds', categoryName: 'backgrounds', page: 0 },
    { categoryCode: 'fashion', categoryName: 'fashion', page: 0 },
    { categoryCode: 'nature', categoryName: 'nature', page: 0 },
    { categoryCode: 'science', categoryName: 'science', page: 0 },
    { categoryCode: 'education', categoryName: 'education', page: 0 },
    { categoryCode: 'feelings', categoryName: 'feelings', page: 0 },
    { categoryCode: 'health', categoryName: 'health', page: 0 },
    { categoryCode: 'people', categoryName: 'people', page: 0 },
    { categoryCode: 'religion', categoryName: 'religion', page: 0 },
    { categoryCode: 'places', categoryName: 'places', page: 0 },
    { categoryCode: 'animals', categoryName: 'animals', page: 0 },
    { categoryCode: 'industry', categoryName: 'industry', page: 0 },
    { categoryCode: 'computer', categoryName: 'computer', page: 0 },
    { categoryCode: 'food', categoryName: 'food', page: 0 },
    { categoryCode: 'sports', categoryName: 'sports', page: 0 },
    { categoryCode: 'transportation', categoryName: 'transportation', page: 0 },
    { categoryCode: 'travel', categoryName: 'travel', page: 0 },
    { categoryCode: 'buildings', categoryName: 'buildings', page: 0 },
    { categoryCode: 'music', categoryName: 'music', page: 0 },
  ];

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
        <div id="headerImage" />
        <div id="headerText">
          <h1>WELLCOME TO MiEVENT</h1>
          <p id="headerDescription">A place where you can find your dream event, anywhere</p>
          <a
            id="discoverAction"
            href="#categoryGrid"
          >
            <VscFoldDown style={{ color: 'white' }} />
          </a>
        </div>
      </header>
      <h2 id="gridTitle">EVENTS BY COUNTRY</h2>
      <h2 id="desktopGridTitle">CHOOSE YOUR COUNTRY!</h2>
      <hr />
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
