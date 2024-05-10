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
      <>
        <PhotoItem photo={photo} />
      </>
    );
  });
}

export default PhotoList;
