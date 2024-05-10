import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { takeLatest, put } from 'redux-saga/effects'
import axios from 'axios';


///////////////    PHOTOS    ///////////////    
function* getPhotos(action) {
  try {
    let response = yield axios({
      method: 'GET',
      url: `/api/photos?search=${action.payload}`,
    })

    //put in saga is the same as dispatch in react
    yield put({
      type: 'SET_PHOTOS',
      payload: response.data.data
    });
  } catch (error) {
    console.log('error with photo search', error);
  }
}

function* favoritePhoto(action) {
  try {
    let response =
      yield axios({
        method: "POST",
        url: '/api/favorites',
        data: action.payload
      })

    yield put({
      type: "SET_FAVORITE",
      payload: response.data
    })
  } catch (error) {
    console.log('We have an add error', error)
  }
}

///////////////    FAVORITES    ///////////////    
function* getFavorites() {
  try {
    let response = yield axios({
      method: 'GET',
      url: '/api/favorites'
    })
    yield put({
      type: 'SET_FAVORITES',
      payload: response.data
    })
  }
  catch (error) {
    console.log('Error in GET of favorites:', error);
  }
}

function* updateFavoriteCategory(action) {
  console.log('whimsy?', action.payload)
  try {
    let response = yield axios({
      method: 'PUT',
      url:  `/api/favorites/${action.payload.id}`,
      data: { category: action.payload.category }
    })
    yield put({
      type: 'GET_FAVORITES',
      payload: response.data
    })
  }
  catch(error) {
    console.log('Error in PUT to change a favorites category', error);
  }
}
///////////////    CATEGORIES    ///////////////   
function* getCategories() {
  console.log('in get of categories!')
  try {
    let response = yield axios({
      method: 'GET',
      url: '/api/categories'
    })
    console.log(response.data);
    yield put({
      type: 'SET_CATEGORIES',
      payload: response.data
    })
  }
  catch (error) {
    console.log('Error in GET of categories:', error);
  }
}



//below is the saga function generator 👇
function* rootSaga() {
  // GET PHOTO
  yield takeLatest('FETCH_PHOTOS', getPhotos);
  // GET CATEGORY
  yield takeLatest('GET_CATEGORIES', getCategories);
  // GET FAVORITES
  yield takeLatest('GET_FAVORITES', getFavorites);


  // POST FAVORITE
  yield takeLatest('ADD_FAVORITE', favoritePhoto);
  // PUT/UPDATE FAVORITE
  yield takeLatest('UPDATE_FAVORITE_CATEGORY', updateFavoriteCategory);
}
const sagaMiddleware = createSagaMiddleware();


// photo reducer for the photos received with saga get
const photos = (state = [], action) => {
  if (action.type === 'SET_PHOTOS') {
    return action.payload;
  }
  return state;
}

const favorites = (state = [], action) => {

  if (action.type === 'SET_FAVORITES') {
    return action.payload;
  }
  return state;
}

const categories = (state = [], action) => {
  if (action.type === 'SET_CATEGORIES') {
    console.log('in set function!', action.payload)
    return action.payload;
  }
  return state;
}


// The reducers live in the store below 
const store = createStore(
  combineReducers({
    photos,
    favorites,
    categories
  }),
  applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

export default store;
