import * as NavigationStateUtils from 'NavigationStateUtils';

import { NAV_PUSH, NAV_POP, NAV_JUMP_TO_KEY, NAV_JUMP_TO_INDEX, NAV_RESET, SWITCH_TAB } from '../actions/navigation_actions';

function navigationState(state = {
    index: 0,
    routes: [
      { key: 'Time', title: 'Time' },
    ],
    tab: 'gigs',
  }, action) {
  switch (action.type) {
    case NAV_PUSH:
      if (state.routes[state.index].key === (action.state && action.state.key)) return state;
      return NavigationStateUtils.push(state, action.state);

    case NAV_POP:
      if (state.index === 0 || state.routes.length === 1) return state;
      return NavigationStateUtils.pop(state);

    case NAV_JUMP_TO_KEY:
      return NavigationStateUtils.jumpTo(state, action.key);

    case NAV_JUMP_TO_INDEX:
      return NavigationStateUtils.jumpToIndex(state, action.index);

    case NAV_RESET:
      return {
        ...state,
        tab: action.tab,
        index: action.index,
        routes: action.routes,
      };

    case SWITCH_TAB:
      return {
        ...state,
        tab: action.tab,
      };

    default:
      return state;
  }
}

export default navigationState;
