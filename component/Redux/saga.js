import {SET_USER_DATA, USER_LIST} from './constants';
import {put, takeEvery} from 'redux-saga/effects';

function* userlist() {
  const url = 'https://dummyjson.com/users';
  let data = yield fetch(url);
  data = yield data.json();
  yield put({type: SET_USER_DATA, data});
}

function* SagaData() {
  yield takeEvery(USER_LIST, userlist);
}

export default SagaData;

// function* is called generator function which is yield keyword.
// yield takes an expression which is send to the generator and whatever is send inside is the computed result of that yield expression.
