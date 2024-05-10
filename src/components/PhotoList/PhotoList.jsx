import { useDispatch, useSelector } from 'react-redux';
import PhotoItem from '../PhotoItem/PhotoItem';
import { useEffect } from 'react';

function PhotoList() {
  const dispatch = useDispatch();
  const photos = useSelector((store) => store.photos);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = () => {
    dispatch({ type: 'GET_PHOTOS', payload: photos });
  };

  return photos.map((photo) => {
    return (
      <div key={photo.id}>
        <PhotoItem photo={photo} />
      </div>
    );
  });
}

export default PhotoList;
