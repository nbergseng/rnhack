import _ from 'lodash';
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
  return _.assign({}, entities, {
    [id]: {
      id,
      startTime,
      gigId,
      isActive: true,
      isPaused: false,
      pauseDuration: 0,
    },
  });
}

function endSession(entities, { id, endTime }) {
  return _.assign({}, entities, {
    [id]: _.assign(
      {},
      entities[id],
      {
        endTime,
        isActive: false,
        isPaused: false,
      }
    ),
  });
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

    default:
      return state;
  }
}

export default sessions;
