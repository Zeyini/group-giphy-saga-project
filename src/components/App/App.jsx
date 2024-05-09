import PhotoList from '../PhotoList/PhotoList';
import photos from '../../data';
import './App.css';

function App() {
  return (
    <>
      <div>
        <h1>Giphy Search!</h1>
      </div>
      <div className="main-content">
        <PhotoList photos={photos} />
      </div>
    </>
  );
}

export default App;
