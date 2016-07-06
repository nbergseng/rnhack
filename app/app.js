import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native';
import { install } from 'redux-loop';
import { Provider } from 'react-redux';
import reducers from './reducers';
import AppContainer from './containers/app_container';
import createLogger from 'redux-logger';
import { reduxMiddleware, addReduxStore } from 'reactotron';
import { persistStore } from 'redux-persist';

const logger = createLogger();

const enhancer = compose(
  applyMiddleware(
    logger,
    reduxMiddleware
  ),
  install()
);

const initialState = {};

// Note: passing enhancer as the last argument to createStore requires redux@>=3.1.0
const store = createStore(reducers, initialState, enhancer);
persistStore(store, { storage: AsyncStorage });
addReduxStore(store);

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
