import { put, takeEvery, takeLatest, delay, all } from 'redux-saga/effects';

//call() function is used to create effect description, which instructs middleware to call the promise. put() function creates an effect,
 //which instructs middleware to dispatch an action to the store.

export function* incWorker() {
  yield delay(1000);
  yield put({ type: 'INC' });
}

export function* incWatcher() {
  yield takeLatest('INC_S', incWorker);
}

export function* getProducts() {
  console.log('Called prod s');
  var x = yield fetch('http://localhost:4000/products').then((res) =>
    res.json()
  );
  console.log('x::', x);
  yield put({ type: 'INC' ,});
}

export function* getProductsWatcher() {
  yield takeLatest('GETPRODS_S', getProducts);
}

