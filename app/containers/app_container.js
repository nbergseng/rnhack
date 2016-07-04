import React, { PropTypes } from 'react';
import { NavigationExperimental, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import TabContainer from './tab_container';
import NewGigModal from './new_gig_modal_container';
import Gig from './gig_container';

import { navigatePush, navigatePop } from '../actions/navigation_actions';
import Colors from '../styles/colors';

const {
  Transitioner: NavigationTransitioner,
  Card: NavigationCard,
  Header: NavigationHeader,
} = NavigationExperimental;

const navHeight = 64; // TODO: temp

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: navHeight,
  },
  header: {
    backgroundColor: Colors.teal,
  },
  headerElements: {
    color: Colors.white,
  },
});

function isModal(routeKey) {
  return routeKey.includes('Modal');
}

class AppContainer extends React.Component {
  _renderHeader(props) {
    return (
      <NavigationHeader
        {...props}
        style={styles.header}
        renderTitleComponent={p => {
          const title = p.scene.route.title;
          return <NavigationHeader.Title textStyle={styles.headerElements}>{title}</NavigationHeader.Title>;
        }}
      />
    );
  }
  _renderScene({ scene }) {
    const { route } = scene;

    switch (route.key) {
      case 'NewGigModal':
        return <NewGigModal />;
      case 'GigScene':
        return <Gig gigId={route.gigId} />;
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
        renderOverlay={this._renderHeader}
        renderScene={props => (
          <NavigationCard
            {...props}
            style={isModal(props.scene.route.key) ?
                  NavigationCard.CardStackStyleInterpolator.forVertical(props) :
                  undefined
            }
            panHandlers={isModal(props.scene.route.key) ? null : undefined}
            renderScene={() => // TODO figure out a better way to do this stupid header padding
              <View style={styles.container}>{this._renderScene(props)}</View>
            }
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
