import { connect } from 'react-redux';

import ModalScreen from '../components/modal_screen';
import { navigatePop } from '../actions/navigation_actions';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => ({
  onButtonPress: () => {
    dispatch(navigatePop());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalScreen);
