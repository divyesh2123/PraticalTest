import { createStore } from "redux";
import rootReducer from "../reducer";
import counterReducer from "../reducer/counterReducer";
import thunk from 'redux-thunk';
import { applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../sagas/sagas";


//const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);


////sagaMiddleware.run(rootSaga);


  export default store;