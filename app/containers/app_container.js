import React, { PropTypes } from 'react';
import { NavigationExperimental, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import TabContainer from './tab_container';
import Modal from './modal_container';
import { navigatePush, navigatePop } from '../actions/navigation_actions';

const {
  Transitioner: NavigationTransitioner,
  Card: NavigationCard,
  Header: NavigationHeader,
} = NavigationExperimental;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});


class AppContainer extends React.Component {
  _renderScene({ scene }) {
    const { route } = scene;

    switch (route.key) {
      case 'Modal':
        return <Modal />;
      default:
        return <TabContainer />;
    }
  }
  render() {
    const { navigationState, onNavigate } = this.props;

    return (
      <NavigationTransitioner
        navigationState={navigationState}
        style={styles.outerContainer}
        onNavigate={onNavigate}
        renderOverlay={props => (
          <NavigationHeader
            {...props}
            renderTitleComponent={p => {
              const title = p.scene.route.title;
              return <NavigationHeader.Title>{title}</NavigationHeader.Title>;
            }}
          />
        )}
        renderScene={props => (
          <NavigationCard
            {...props}
            style={props.scene.route.key === 'Modal' ?
                  NavigationCard.CardStackStyleInterpolator.forVertical(props) :
                  undefined
            }
            panHandlers={props.scene.route.key === 'Modal' ? null : undefined}
            renderScene={this._renderScene}
            key={props.scene.route.key}
          />
        )}
      />
    );
  }
}

AppContainer.propTypes = {
  navigationState: PropTypes.object,
  onNavigate: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    navigationState: state.navigationState,
  }),
  dispatch => ({
    onNavigate: (action) => {
      if (action.type && (
        action.type === 'BackAction' ||
        action.type === NavigationCard.CardStackPanResponder.Actions.BACK.type)
      ) {
        dispatch(navigatePop());
      } else {
        dispatch(navigatePush(action));
      }
    },
  })
)(AppContainer);
