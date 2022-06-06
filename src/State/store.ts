

import { applyMiddleware, createStore,compose } from "redux";
import createSagaMiddleware from "redux-saga";
import {rootReducer} from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = () => {
    // const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));    
    sagaMiddleware.run(rootSaga);
    return store;
  };

  export default configureStore;

