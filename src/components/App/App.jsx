import PhotoList from '../PhotoList/PhotoList';
import photos from '../../data';
import Search from '../App/Search';
import './App.css';
import FavoritesList from '../FavoritesList';

function App() {
  return (
    <>
      <div>
        <h1>Giphy Search!</h1>
      </div>
      <div>
      <Search/>
        <div className="main-content">
        <PhotoList photos={photos} />
      </div>
      </div>
    </>
  );
}

export default App;
