import _ from 'lodash';
import { CREATE_GIG, UPDATE_GIG, DESTROY_GIG } from '../actions/gigs_actions';
import { updateStateEntities } from '../utils/reducer_utils';

function createGig(entities, { id, name }) {
  return _.assign({}, entities, {
    [id]: {
      id,
      name,
    },
  });
}

function gigs(state = {
  entities: {},
}, action) {
  switch (action.type) {
    case CREATE_GIG:
      return updateStateEntities(state, action, createGig);
    case UPDATE_GIG:
      return state;
    case DESTROY_GIG:
      return state;
    default:
      return state;
  }
}

export default gigs;
