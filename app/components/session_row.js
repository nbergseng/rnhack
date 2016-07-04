import React, { PropTypes } from 'react';
import { StyleSheet } from 'react-native';

import moment from 'moment';
import { formattedDuration } from '../utils/time_utils';

import Colors from '../styles/colors';

import { TouchableRowCell, Base, PrimaryText, SecondaryText } from 'panza';
// import 'fbjs/lib/emptyFunction';
// import SwipeableRow from 'SwipeableRow';

const styles = StyleSheet.create({
  listRow: {
    backgroundColor: Colors.white,
  },
});

function SessionRow({ id, isActive, startTime, endTime }) {
  // TODO: editing finished sessions
  return (
    <TouchableRowCell
      style={styles.listRow}
      onPress={() => console.log(id)}
    >
      <Base flex={1}>
        <Base row align="center" justify="space-between">
          <PrimaryText bold numberOfLines={1}>
            {moment(startTime).format('ddd D MMM YY')}
          </PrimaryText>
          <SecondaryText numberOfLines={1} light>
            {isActive ? 'active session' : 'inactive session'}
          </SecondaryText>
        </Base>
        <Base row align="center" justify="space-between">
          <SecondaryText numberOfLines={1} light>
            {moment(startTime).format('h:mm a')}
          </SecondaryText>
          <SecondaryText numberOfLines={1} light>
            {formattedDuration(startTime, endTime)}
          </SecondaryText>
        </Base>
      </Base>
    </TouchableRowCell>
  );
}

SessionRow.propTypes = {
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  startTime: PropTypes.object.isRequired,
  endTime: PropTypes.object,
};

export default SessionRow;
