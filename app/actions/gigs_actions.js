import uuid from 'uuid';

export const CREATE_GIG = 'CREATE_GIG';
export const UPDATE_GIG = 'UPDATE_GIG';
export const DESTROY_GIG = 'DESTROY_GIG';


export function createGig({ name }) {
  return {
    type: CREATE_GIG,
    id: uuid.v4(),
    name,
  };
}

export function updateGig(name) {
  return {
    type: UPDATE_GIG,
    name,
  };
}

export function destroyGig(name) {
  return {
    type: DESTROY_GIG,
    name,
  };
}
