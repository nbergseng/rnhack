import groupBy from 'lodash/fp/groupBy';
import filter from 'lodash/fp/filter';
import flow from 'lodash/fp/flow';

import { createSelector } from 'reselect';

export const getSessions = state => state.sessions.entities;
export const getGigIdFromProps = (state, { gigId }) => gigId;

// TODO needs to be a constructor to properly memoize multiple id/sessions combos,
// true/false are awkward group names
export const getSessionsForGig = createSelector(
  getSessions,
  getGigIdFromProps,
  (sessions, gigId) => (flow(
    filter({ gigId }),
    groupBy('isActive')
  )(sessions))
);

// TODO
export const getActiveSessionForGig = createSelector(
  getSessionsForGig,
  (sessions) => filter({ isActive: true })(sessions)
);

export const getSessionsByGig = createSelector(
  getSessions,
  (sessions) => groupBy('gigId')(sessions)
);
