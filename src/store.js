import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { takeLatest, put } from 'redux-saga/effects'
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


function* addPhoto() {
  try {
    yield axios({
      method: "POST",
      url: 'api/photos'
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
  yield takeLatest('GET_PHOTO', getPhotos);
  yield takeLatest('ADD_FAVORITE', addPhoto)
}
const sagaMiddleware = createSagaMiddleware();


// photo reducer for the photos received with saga get
const photos = (state = [], action) => {
  if (action.type === 'SET_PHOTO') {

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