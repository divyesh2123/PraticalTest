import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import fetchGetUsers from "../../apiData/fetchGetUsers";


function* handleGetUsers() {
  try {
   // console.log(call(fetchGetUsers))
    const users = yield call(fetchGetUsers);


   console.log(users)
    yield put({ type: "GET_USERS_SUCCESS", payload: users });
  } catch (err) {
    yield put({ type: "GET_USERS_FAILED", payload: err });
  }
}

function* watcherUserSaga() {
  yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
}

export default watcherUserSaga;