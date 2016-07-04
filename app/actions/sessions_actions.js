import uuid from 'uuid';

export const CREATE_SESSION = 'CREATE_SESSION';
export const PAUSE_SESSION = 'PAUSE_SESSION';
export const RESUME_SESSION = 'RESUME_SESSION';
export const END_SESSION = 'END_SESSION';
export const UPDATE_SESSION = 'UPDATE_SESSION';
export const DESTROY_SESSION = 'DESTROY_SESSION';

export function createSession({ gigId, startTime = new Date() }) {
  return {
    type: CREATE_SESSION,
    id: uuid.v4(),
    startTime,
    gigId,
  };
}

export function pauseSession(id) {
  return {
    type: PAUSE_SESSION,
    id,
  };
}

export function resumeSession(id) {
  return {
    type: RESUME_SESSION,
    id,
  };
}

export function endSession({ id, endTime = new Date() }) {
  return {
    type: END_SESSION,
    id,
    endTime,
  };
}

export function updateSession(name) {
  return {
    type: UPDATE_SESSION,
    name,
  };
}

export function destroySession(name) {
  return {
    type: DESTROY_SESSION,
    name,
  };
}
