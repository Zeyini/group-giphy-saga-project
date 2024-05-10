import PhotoList from '../PhotoList/PhotoList';
import photos from '../../data';
import './App.css';
import FavoritesList from '../FavoritesList';

function App() {
  return (
    <>
      <div>
        <h1>Giphy Search!</h1>
      </div>
      <FavoritesList />
      {/* <div className="main-content">
        <PhotoList photos={photos} />
      </div> */}
    </>
  );
}

export default App;
