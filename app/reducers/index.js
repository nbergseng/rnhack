import { combineReducers } from 'redux';
import navigationState from './navigation_reducer';

const appReducers = combineReducers({
  navigationState,
});

export default appReducers;
