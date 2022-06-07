import {getProductsWatcher, incWatcher} from './saga';
import watcherUserSaga from './watcherUserSaga';
import {getPostsWatcher,addPostWatcher} from './postSaga';
import { put, takeEvery, takeLatest, delay, all, fork } from 'redux-saga/effects';
import { watchIncrementAsync } from './counterSaga';


export default function* rootSaga() {
  //  yield all([getProductsWatcher(), incWatcher(),watcherUserSaga(), getPostsWatcher(),addPostWatcher()]);

  yield all([watchIncrementAsync(), watcherUserSaga()]);
  }