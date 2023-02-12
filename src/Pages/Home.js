import { NavLink } from 'react-router-dom';
import { VscFoldDown } from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
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
                category.categoryCode, category.page, category.categoryName,
              )}
              className={`categoryLink ${category.categoryCode}`}
            >
              <h3 className="categoryTitle">{category.categoryName}</h3>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

/*
      {categoryCode: 'health', categoryName: 'health'},
      {categoryCode: 'people', categoryName: 'people'},
      {categoryCode: 'religion', categoryName: 'religion'},
      {categoryCode: 'places', categoryName: 'places'},
      {categoryCode: 'animals', categoryName: 'animals'},
      {categoryCode: 'industry', categoryName: 'industry'},
      {categoryCode: 'computer', categoryName: 'computer'},
      {categoryCode: 'food', categoryName: 'food'},
      {categoryCode: 'sports', categoryName: 'sports'},
      {categoryCode: 'people', categoryName: 'people'},
      {categoryCode: 'transportation', categoryName: 'transportation'},
      {categoryCode: 'travel', categoryName: 'travel'},
      {categoryCode: 'buildings', categoryName: 'buildings'},
      {categoryCode: 'music', categoryName: 'music'},

  */

/*
      return (
    <div id="homeContainer">
      <header>
        <div id="headerImage" />
        <div id="headerText">
          <h1>WELCOME TO PHOTOS STORE</h1>
          <p id="headerDescription">A place where you can find the best photos for free</p>
          <a id="discoverAction" href="#categoryGrid">
            <VscFoldDown style={{ color: 'white' }} />
          </a>
        </div>
      </header>
      <h2 id="gridTitle">PHOTOS BY CATEGORY</h2>
      <h2 id="desktopGridTitle">CHOOSE YOUR CATEGORY!</h2>
      <hr />
      <div id="categoryGrid">
        {categories.map((category) => (
          <div className="categoryContainer" key={category.categoryCode}>
            <NavLink to="./category" className="categoryLink"
              key={category.categoryCode} id={category.categoryCode}>
              <h3 className="categoryTitle">{category.categoryName}</h3>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
*/
