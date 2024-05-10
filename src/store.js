import { createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {takeLatest, put} from 'redux-saga/effects'
import axios from 'axios';




function* getPhotos(action) {
    try {
      let response = yield axios({
        method: 'GET',
        url: '/api/photos',
        data: action.payload
      })
  
      //put in saga is the same as dispatch in react
      yield put({
        type: 'SET_PHOTO',
        payload: response.data.data
      });
      console.log(response.data.data);
    } catch (error) {
      console.log('error with plant get request', error);
    }
  }

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
  catch(error) {
    console.log('Error in GET of favorites:', error);
  }
}

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
  catch(error) {
    console.log('Error in GET of categories:', error);
  }
}


//below is the saga function generator 👇
function* rootSaga() {
    yield takeLatest('GET_PHOTO', getPhotos);
    yield takeLatest('GET_CATEGORIES', getCategories);
    yield takeLatest('GET_FAVORITES', getFavorites);
    // yield takeLatest('ADD_PLANT_ACTION', addElement)
  }
  const sagaMiddleware = createSagaMiddleware();


// photo reducer for the photos received with saga get
const photos = (state = [], action) => {
    if (action.type === 'SET_PHOTO') {
     
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