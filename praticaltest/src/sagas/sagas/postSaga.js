// import { takeEvery, all, call, put, takeLeading,delay } from 'redux-saga/effects';
// import {
//   GET_POSTS,
//   getPostsSuccess,
//   getPostsFailed,
//   ADD_POST,
//   addPostFailed,
//   addPostSuccess,
// } from '../action/Postsactions';

// import { getPosts, addPost } from '../api/postapi';


// function* getPostsSaga() {
//   try {
  
//   const data = yield call(getPosts);
//     yield delay(4000);
//     console.table(data);
//     yield put(getPostsSuccess(data));
//   } catch (error) {
//     yield put(getPostsFailed(error.message));
//   }
// }

// export function* getPostsWatcher() {

//   yield takeEvery(GET_POSTS, getPostsSaga);
// }

// function* addPostSaga(action) {
//   try {
   
//     const data = yield call(addPost, action.payload);
//     console.log(data);
//     yield put(addPostSuccess({ ...action.payload, ...data }));
//   } catch (error) {
//     yield put(addPostFailed(error.message));
//   }
// }

// export function* addPostWatcher() {
//   yield takeLeading(ADD_POST, addPostSaga);
// }

