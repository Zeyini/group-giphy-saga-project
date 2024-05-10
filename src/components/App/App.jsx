import PhotoList from '../PhotoList/PhotoList';
import Search from '../App/Search';
import './App.css';

function App() {
  return (
    <>
      <div>
        <h1>Giphy Search!</h1>
      </div>
      <div className="main-content">
        <Search />
        {/* <div className="main-content">
          <PhotoList />
        </div> */}
      </div>
    </>
  );
}

export default App;
