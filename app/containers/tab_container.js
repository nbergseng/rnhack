import React, { PropTypes, Component } from 'react';

import { StatusBarIOS, TabBarIOS, View } from 'react-native';
import Gigs from './gigs_container';
import Work from './work_container';
import Invoices from './invoices_container';

import Colors from '../styles/colors';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { switchTab } from '../actions/navigation_actions';
import { connect } from 'react-redux';

class TabContainer extends Component {
  componentDidMount() {
    if (StatusBarIOS && StatusBarIOS.setBarStyle) StatusBarIOS.setBarStyle('light-content');
  }

  onTabSelect(tab) {
    if (this.props.tab !== tab) {
      this.props.onTabSelect(tab);
    }
  }

  render() {
    return (
      <TabBarIOS tintColor={Colors.darkText}>
        <Icon.TabBarItem
          selected={this.props.tab === 'gigs'}
          onPress={() => this.onTabSelect('gigs')}
          title="Gigs"
          iconName="business"
          selectedIconName="business"
        >
          <Gigs />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          selected={this.props.tab === 'work'}
          onPress={() => this.onTabSelect('work')}
          title="Work"
          iconName="access-time"
          selectedIconName="access-time"
        >
          <Work />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          selected={this.props.tab === 'invoices'}
          onPress={() => this.onTabSelect('invoices')}
          title="Invoices"
          iconName="assignment"
          selectedIconName="assignment"
        >
          <Invoices />
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

TabContainer.propTypes = {
  tab: PropTypes.string,
  onTabSelect: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    tab: state.navigationState.tab,
  }),
  dispatch => ({
    onTabSelect: (tab) => dispatch(switchTab(tab)),
  })
)(TabContainer);
