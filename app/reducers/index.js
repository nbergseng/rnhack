import { combineReducers } from 'redux';
import navigationState from './navigation_reducer';
import gigsState from './gigs_reducer';

const appReducers = combineReducers({
  navigationState,
  gigsState,
});

export default appReducers;
