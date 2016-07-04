import { connect } from 'react-redux';

import GigsScreen from '../scenes/gigs_scene';

import { navigatePush } from '../actions/navigation_actions';

const mapStateToProps = ({ gigs }) => ({
  gigs: gigs.entities,
});

const mapDispatchToProps = (dispatch) => ({
  onModalButtonPress: () => {
    dispatch(navigatePush({
      key: 'NewGigModal',
      title: 'Start a New Gig',
    }));
  },
  onRowPress: (gigId, gigName) => {
    dispatch(navigatePush({
      key: 'GigScene',
      gigId,
      title: gigName,
    }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GigsScreen);
