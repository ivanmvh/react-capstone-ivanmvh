import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { getPhotos, photoId, searchPhoto } from '../Redux/PhotosSlice';
import './Category.css';

const Category = () => {
  const dispatch = useDispatch();

  const photos = useSelector((state) => state.Photos.data);
  const apiParameters = useSelector((state) => state.Photos.parameters);
  const [parameters, setParameters] = useState(apiParameters);

  /* console.log(photos); */
  console.log(parameters);
  useEffect(() => {
    dispatch(getPhotos(parameters));
  }, [dispatch, parameters]);

  return (
    <>
      <div
        className="categoryHeader"
        /* datatestid="categoryName" */
      >
        <div className={`categoryHeaderImage ${parameters.categoryCode}`} />
      </div>
      <h2 id="gridTitle">{parameters.categoryName}</h2>
      <form id="searchBar">
        <input
          type="text"
          id="searchInput"
          placeholder="Search Photos By Name"
          onInput={(e) => {
            if (e.target.value.length === 0) {
              dispatch(getPhotos(parameters));
            } else {
              dispatch(searchPhoto(e.target.value.toLowerCase()));
            }
          }}
        />
        <button
          type="submit"
          id="searchBtn"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <ImSearch />
        </button>
      </form>
      <div id="photosGrid">
        {photos.map((photo) => (
          <NavLink
            data-testid="photoCard"
            className="photoCard"
            onClick={() => dispatch(photoId(photo.id))}
            key={photo.id}
            to={`./${photo.id}`}
          >
            <div className="photoImageContainer">
              <img
                src={photo.previewURL}
                alt={photo.tags}
              />
            </div>
            <div className="photoInformation">
              <p className="photoStatus">
                <b>Photo.Id.: </b>
                {photo.id}
              </p>
              <h5 className="photoName">{photo.name}</h5>
              <h6 className="photoCity">
                <b>Views: </b>
                {photo.views}
              </h6>
              <h6 className="photoGenre">
                <b>Downloads: </b>
                {photo.downloads}
              </h6>
              <h6 className="photoDate">
                <b>Likes: </b>
                {photo.likes}
              </h6>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="controlPanel">
        <button
          id="nextBtn"
          type="button"
          onClick={() => {
            if (parameters.page > 0) {
              setParameters({ ...parameters, page: parameters.page - 1 });
              console.log(parameters);
            }
          }}
        >
          <div id="prev" />
        </button>
        <p>
          page
          {parameters.page}
        </p>
        <button
          id="prevBtn"
          type="button"
          onClick={() => {
            setParameters({ ...parameters, page: parameters.page + 1 });
            console.log(parameters);
          }}
        >
          <div id="next" />
        </button>
      </div>
    </>
  );
};

export default Category;
