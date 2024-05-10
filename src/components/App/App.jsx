import PhotoList from '../PhotoList/PhotoList';
import Search from '../App/Search';
import './App.css';
import FavoritesList from '../FavoritesList';
import { Route, Link } from 'react-router-dom';

function App() {

  return (
    <>
      <div>
        <h1>Giphy Search!</h1>
        <nav>
          <Link to='/'>Home</Link>
          <br/>
          <Link to='/favorites'>Favorites</Link>
        </nav>
      </div>
        <Route exact path='/'>
          <div className="main-content">
              <Search />
              <PhotoList />
          </div>
        </Route>
        <Route exact path='/favorites'>
            <FavoritesList />
        </Route>



    </>
  );
}


export default App;
