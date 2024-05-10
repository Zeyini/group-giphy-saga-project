import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import PhotoList from '../PhotoList/PhotoList';
import './Search.css';

const Search = () => {
  const photos = useSelector((store) => store.photos);
  const [photoSearch, setPhotosearch] = useState('');

  const dispatch = useDispatch();

  const getPhotos = (event) => {
    event.preventDefault();
    dispatch({ type: 'FETCH_PHOTOS', payload: photoSearch });
  };

  return (
    <div className="search-container">
      <form onSubmit={getPhotos}>
        <input
          type="text"
          value={photoSearch}
          onChange={(e) => {
            setPhotosearch(e.target.value);
          }}
        />
        <button type="submit">Search Photo</button>
      </form>
      <div className="search-results">
        <PhotoList photos={photos} />
      </div>
    </div>
  );
};

export default Search;
