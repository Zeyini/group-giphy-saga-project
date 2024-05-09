import { useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';

const Search = () => {
    const photos = useSelector(store => store.photos);
    // console.log(photos);
    const [photoSearch, setPhotosearch] = useState('')

    // useEffect(() => {
    //     getPhotos()
    // }, [])

    const dispatch = useDispatch();
   
    const getPhotos = (event) => { 
        event.preventDefault();
        dispatch({ type: 'GET_PHOTO', payload: photoSearch});

     }


    return (
        <div>
            <form onSubmit={getPhotos}>
            <input type='text' 
            value={photoSearch}
             onChange={(e) => {setPhotosearch(e.target.value)}}
             />
            <button type='submit'>Search Photo</button>
            </form>
        {/* {JSON.stringify(photos)} */}
        {photos.map(photo => (
                <img key={photo.id} src={photo.images.original.url} />
            ))}
        </div>
    )

}

export default Search;