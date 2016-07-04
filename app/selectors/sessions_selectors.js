import _ from 'lodash';
import { createSelector } from 'reselect';

export const getSessions = state => state.sessions.entities;
// TODO
export const getGigIdFromProps = (state, { gigId }) => gigId;

// TODO needs to be a constructor to properly memoize multiple id/sessions combos
export const getSessionsForGig = createSelector(
  getSessions,
  getGigIdFromProps,
  (sessions, gigId) => _.filter(sessions, { gigId })
);
