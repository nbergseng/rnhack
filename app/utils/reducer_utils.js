import _ from 'lodash';

export function updateStateEntities(state, action, fn) {
  return _.assign(
    {},
    state,
    {
      entities: fn(
        state.entities,
        action
      ),
    }
  );
}
