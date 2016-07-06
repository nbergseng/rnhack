import flow from 'lodash/fp/flow';
import map from 'lodash/fp/map';
import keyBy from 'lodash/fp/keyBy';

import { REHYDRATE } from 'redux-persist/constants';
import {
  CREATE_SESSION,
  PAUSE_SESSION,
  RESUME_SESSION,
  END_SESSION,
  UPDATE_SESSION,
  DESTROY_SESSION,
} from '../actions/sessions_actions';

import { updateStateEntities } from '../utils/reducer_utils';

// TODO: clean up with immutables
function createSession(entities, { id, startTime, gigId }) {
  // TODO: existing active session check
  return {
    ...entities,
    [id]: {
      id,
      startTime,
      gigId,
      isActive: true,
      isPaused: false,
      pauseDuration: 0,
    }
  };
}

function endSession(entities, { id, endTime }) {
  return {
    ...entities,
    [id]: {
      ...entities[id],
      endTime,
      isActive: false,
      isPaused: false,
    },
  };
}

function rehydrateSessionEntities(sessions) {
  // gotta de-stringify ze date objects
  return flow(
    map((session) => ({
      ...session,
      startTime: new Date(session.startTime),
      endTime: new Date(session.endTime),
    })),
    keyBy('id')
  )(sessions);
}

function sessions(state = { entities: {} }, action) {
  switch (action.type) {
    case CREATE_SESSION:
      // TODO: handle uuid collision, or, how do we reverse entropy
      return updateStateEntities(state, action, createSession);
    case PAUSE_SESSION:
      return state;
    case RESUME_SESSION:
      return state;
    case END_SESSION:
      return updateStateEntities(state, action, endSession);
    case UPDATE_SESSION:
      return state;
    case DESTROY_SESSION:
      return state;
    case REHYDRATE:
      const incoming = action.payload.sessions.entities;
      if (incoming) {
        return {
          ...state,
          entities: rehydrateSessionEntities(incoming),
        };
      }
      return state;
    default:
      return state;
  }
}

export default sessions;
