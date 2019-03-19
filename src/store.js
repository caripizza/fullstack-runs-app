import { createStore, compose, applyMiddleware } from 'redux';
import { promiseMiddleware } from 'promise-middleware-redux';
import reducer from '../src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(promiseMiddleware)
  )
);
