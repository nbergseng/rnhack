import _ from 'lodash';
import { CREATE_GIG, UPDATE_GIG, DESTROY_GIG } from '../actions/gigs_actions';

function gigState(state = {
  entities: {
    nike: {
      name: 'nike',
      tags: [],
      foo: 'bar',
    },
  },
}, action) {
  switch (action.type) {
    case CREATE_GIG:
      return _.merge({}, state, { entities: { [action.gig.name]: { name: action.gig.name } } });
    case UPDATE_GIG:
      return state;
    case DESTROY_GIG:
      return state;

    default:
      return state;
  }
}

export default gigState;
