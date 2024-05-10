import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import './PhotoItem.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function PhotoItem({ photo }) {
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);

  // ADD PHOTOS API

  const addFavorite = () => {
    dispatch({ type: 'ADD_FAVORITE', payload: favorite });
  };

  return (
    <div className="photo-item">
      <ul className="photo-list">
        <li key={photo.id}>
          <img src={photo.images.downsized_medium.url} />
          {photo.title}
          {favorite ? (
            <StarOutlinedIcon
              onClick={() => {
                setFavorite(false);
              }}
            />
          ) : (
            <StarBorderOutlinedIcon
              onClick={() => {
                setFavorite(true);
                addFavorite();
              }}
            />
          )}
        </li>
      </ul>
    </div>
  );
}
