import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import NavButton from './nav_button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D690CB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 30,
  },
  spacer: {
    marginTop: 20,
    alignSelf: 'stretch',
  },
});

const WorkScreen = (props) => (
  <View style={styles.container}>
    <Text style={styles.title}>Work</Text>

    <View style={styles.spacer}>
      <NavButton destLabel="Modal" buttonHandler={props.onModalButtonPress} />
    </View>
  </View>
);

WorkScreen.propTypes = {
  onModalButtonPress: PropTypes.func.isRequired,
};

export default WorkScreen;
