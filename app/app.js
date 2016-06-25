import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { install } from 'redux-loop';
import { Provider } from 'react-redux';
import reducers from './reducers';
import AppContainer from './containers/app_container';
import createLogger from 'redux-logger';

const logger = createLogger();

const enhancer = compose(
  applyMiddleware(logger),
  install()
);

const initialState = {};

// Note: passing enhancer as the last argument to createStore requires redux@>=3.1.0
const store = createStore(reducers, initialState, enhancer);

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
