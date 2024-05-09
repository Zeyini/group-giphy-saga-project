import photos from '../../data';
import PhotoItem from '../PhotoItem/PhotoItem';

function PhotoList() {
  return photos.map((photo) => {
    return (
      <>
        <PhotoItem photo={photo} />
      </>
    );
  });
}

export default PhotoList;
