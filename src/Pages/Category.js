import { NavLink } from 'react-router-dom';

const Category = () => (
  <>
    <h1>The category page is working</h1>
    <NavLink to="./photo">This button should conduce to the Photo Details</NavLink>
  </>
);

export default Category;
