import { combineReducers } from 'redux';
import navigationState from './navigation_reducer';
import gigs from './gigs_reducer';
import sessions from './sessions_reducer';

const appReducers = combineReducers({
  navigationState,
  gigs,
  sessions,
});

export default appReducers;
