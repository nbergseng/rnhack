import { connect } from 'react-redux';

import GigsScreen from '../scenes/gigs_scene';

import { navigatePush } from '../actions/navigation_actions';

const mapStateToProps = ({ gigsState }) => ({
  gigs: gigsState.entities,
});

const mapDispatchToProps = (dispatch) => ({
  onModalButtonPress: () => {
    dispatch(navigatePush({
      key: 'NewGigModal',
      title: 'Start a New Gig',
    }));
  },
  onRowPress: (gigName) => {
    dispatch(navigatePush({
      key: 'GigScene',
      gig: gigName,
      title: gigName,
    }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GigsScreen);
