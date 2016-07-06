export function updateStateEntities(state, action, fn) {
  return Object.assign(
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
