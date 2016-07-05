import { connect } from 'react-redux';

import GigScreen from '../scenes/gig_scene';

import { createSession, endSession } from '../actions/sessions_actions';

import { getSessionsForGig, getActiveSessionForGig } from '../selectors/sessions_selectors';

const mapStateToProps = (state, { gigId }) => ({
  gig: state.gigs.entities[gigId],
  sessions: getSessionsForGig(state, { gigId }),
  activeSession: getActiveSessionForGig(state, { gigId }),
});

const mapDispatchToProps = (dispatch) => ({
  startNewSession: (gigId) => dispatch(createSession({ gigId })),
  stopSession: (id) => dispatch(endSession({ id })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GigScreen);
