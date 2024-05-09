import { createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {takeLatest, put} from 'redux-saga/effects'
import axios from 'axios';




function* getPhotos() {
    try {
      let response = yield axios({
        method: 'GET',
        url: '/api/photos'
      })
  
      //put in saga is the same as dispatch in react
      yield put({
        type: 'SET_PHOTO',
        payload: response.data
      });
      console.log(response.data);
    } catch (error) {
      console.log('error with plant get request', error);
    }
  }



//below is the saga function generator 👇
function* rootSaga() {
    yield takeLatest('GET_PHOTO', getPhotos);
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