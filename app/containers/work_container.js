import { connect } from 'react-redux';

import WorkScreen from '../components/work_screen';
import { navigatePush } from '../actions/navigation_actions';


const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => ({
  onModalButtonPress: () => {
    dispatch(navigatePush('Modal'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkScreen);
