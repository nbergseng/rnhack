import { connect } from 'react-redux';

import NewGigModalScreen from '../scenes/new_gig_modal_scene';
import { navigatePop } from '../actions/navigation_actions';
import { createGig } from '../actions/gigs_actions';

const mapStateToProps = ({ gigs }) => ({
  gig: gigs.new || {},
});

const mapDispatchToProps = (dispatch) => ({
  onButtonPress: () => {
    dispatch(navigatePop());
  },
  onCreateGigPress: (gig) => {
    dispatch(createGig(gig));
    dispatch(navigatePop());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewGigModalScreen);
