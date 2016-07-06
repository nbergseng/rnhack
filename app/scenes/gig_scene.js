import isEmpty from 'lodash/fp/isEmpty';
import React, { PropTypes } from 'react';

import { View, Text, StyleSheet, ListView } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Separator } from 'panza';
import SessionRow from '../components/session_row';

import Colors from '../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.paleGreen,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#ffffff',
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  spacer: {
    height: 36,
    margin: 15,
    alignSelf: 'stretch',
  },
  list: {
    flex: 1,
  },
});

const ds = new ListView.DataSource({
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
  rowHasChanged: (r1, r2) => r1 !== r2,
});

const GigScreen = ({
  gig,
  sessions,
  startNewSession,
  stopSession,
}) => {
  const [activeSession, inactiveSessions] = [sessions.true || [], sessions.false || []];
  const dataSource = ds.cloneWithRowsAndSections({ active: activeSession, ended: inactiveSessions });
  const hasActiveSession = !isEmpty(activeSession);
  // TODO: props.children acting up when this is inlined
  let actionButtonItem;
  if (hasActiveSession) {
    actionButtonItem = (
      <ActionButton.Item buttonColor="#9b59b6" title="Stop" onPress={() => stopSession(activeSession[0].id)}>
        <Icon name="pan-tool" style={styles.actionButtonIcon} />
      </ActionButton.Item>
    );
  } else {
    actionButtonItem = (
      <ActionButton.Item buttonColor="#1abc9c" title="Start" onPress={() => startNewSession(gig.id)}>
        <Icon name="star" style={styles.actionButtonIcon} />
      </ActionButton.Item>
    );
  }
  return (
    <View style={styles.container}>
      {isEmpty(sessions) &&
        <Text style={styles.title}>
          No sessions for this Gig.  Start one with the button below!
        </Text>
      }
      <ListView
        dataSource={dataSource}
        enableEmptySections
        renderSeparator={(a, b) => <Separator key={a + b} />}
        renderRow={(rowData) => <SessionRow key={rowData.id} {...rowData} />}
        style={styles.list}
      />
      <ActionButton buttonColor={Colors.paleRed}>
        {actionButtonItem}
      </ActionButton>
    </View>
  );
};

GigScreen.propTypes = {
  gig: PropTypes.object.isRequired,
  sessions: PropTypes.object.isRequired,
  startNewSession: PropTypes.func.isRequired,
  stopSession: PropTypes.func.isRequired,
};

export default GigScreen;
