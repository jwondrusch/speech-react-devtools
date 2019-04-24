import { createStore } from 'redux'
import reducer from './reducers'
import 'todomvc-app-css/index.css'
import * as actionCreators from './actions';

const preloadedState = {};

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__({
    actionCreators,
    serialize: true,
    trace: true
  });

export const store = createStore(reducer, preloadedState, enhancer)