import { connect } from 'react-redux';

import GigScreen from '../scenes/gig_scene';

const mapStateToProps = ({ gigsState }, { gig }) => ({
  gig: gigsState.entities[gig],
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GigScreen);
