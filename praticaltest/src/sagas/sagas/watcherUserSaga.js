// import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
// import fetchGetUsers from "../api/fetchGetUsers";

// function* handleGetUsers() {
//   try {
//    // console.log(call(fetchGetUsers))
//     const users = yield call(fetchGetUsers);

//    console.log(users)
//     yield put({ type: "GET_USERS_SUCCESS", users: users });
//   } catch (err) {
//     yield put({ type: "GET_USERS_FAILED", message: err.message });
//   }
// }

// function* watcherUserSaga() {
//   yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
// }

// export default watcherUserSaga;