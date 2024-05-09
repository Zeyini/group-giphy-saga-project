import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import './PhotoItem.css';
import { useState } from 'react';

export default function PhotoItem({ photo }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="photo-item">
      <ul className="photo-list" key={photo.id}>
        <li>
          <img src={photo.url} />
          {photo.name}
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
              }}
            />
          )}
        </li>
      </ul>
    </div>
  );
}
