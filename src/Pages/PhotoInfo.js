import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';
import './PhotoInfo.css';

const PhotoInfo = () => {
  const apiInfo = useSelector((state) => state.Photos.photoInfo?.[0] ?? {});
  const parameters = useSelector((state) => state.Photos.parameters);

  return (
    <>
      <h2 id="photoName">{apiInfo.name ?? ''}</h2>
      <div id="photoCard" data-testid="photoInfoContainer">
        <div id="photoImageContainer">
          <img
            alt={apiInfo.tags}
            src={apiInfo.webformatURL}
          />
        </div>
        <div className="details">
          <NavLink
            to={`../category/${parameters.categoryCode}`}
            id="backArrow"
          >
            <FaArrowLeft style={{ fontSize: '20px', color: 'white' }} />
          </NavLink>
          <div className="det-row">
            <p id="photoId">
              <b>Photo.Id. </b>
            </p>
            <p>{apiInfo.id}</p>
          </div>
          <div className="det-row">
            <p id="views">
              <b>Views </b>
            </p>
            <p>{apiInfo.views}</p>
          </div>
          <div className="det-row">
            <p id="likes">
              <b>Likes </b>
            </p>
            <p>{apiInfo.likes}</p>
          </div>
          <div className="det-row">
            <p id="downloads">
              <b>Downloads </b>
            </p>
            <p>{apiInfo.downloads}</p>
          </div>
          <div className="det-row">
            <p id="collections">
              <b>Collections </b>
            </p>
            <p>{apiInfo.collections}</p>
          </div>
          <div className="det-row">
            <p id="previewWidth">
              <b>Preview Width </b>
            </p>
            <p>{apiInfo.previewWidth}</p>
          </div>
          <div className="det-row">
            <p id="previewHeight">
              <b>Preview Height </b>
            </p>
            <p>{apiInfo.previewHeight}</p>
          </div>
          <div className="det-row">
            <p id="webformaWidth">
              <b>Web format Width </b>
            </p>
            <p>{apiInfo.webformatWidth}</p>
          </div>
          <div className="det-row">
            <p id="webformatHeight">
              <b>Web format Heigth </b>
            </p>
            <p>{apiInfo.webformatHeight}</p>
          </div>
          <div className="det-row">
            <p id="imageWidth">
              <b>Image Width </b>
            </p>
            <p>{apiInfo.imageWidth}</p>
          </div>
          <div className="det-row">
            <p id="imageSize">
              <b>Image Size </b>
            </p>
            <p>{apiInfo.imageSize}</p>
          </div>
          <div className="det-row">
            <p id="userId">
              <b>User.Id </b>
            </p>
            <p>{apiInfo.userId}</p>
          </div>
          <div className="det-row">
            <p id="user">
              <b>User </b>
            </p>
            <p>{apiInfo.user}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoInfo;
