import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { takeLatest, put } from 'redux-saga/effects'
import axios from 'axios';

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

function* addPhoto() {
  try {
    yield axios({
      method: "POST",
      url: '/api/photos'
    })

    yield put({
      type: "ADD_FAVORITE"
    })
  }
  catch (error) {
    console.log('We have an add error', error)
  }
}

//below is the saga function generator 👇
function* rootSaga() {
  yield takeLatest('FETCH_PHOTOS', getPhotos);
  yield takeLatest('ADD_FAVORITE', addPhoto)
}
const sagaMiddleware = createSagaMiddleware();


// photo reducer for the photos received with saga get
const photos = (state = [], action) => {
  if (action.type === 'SET_PHOTOS') {

    return action.payload;

  }
  return state;
}



// The reducers live in the store below 
const store = createStore(
  combineReducers({
    photos
  }),
  applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

export default store;