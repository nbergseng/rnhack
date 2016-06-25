import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import NavButton from './nav_button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cea76a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 30,
  },
});

const ModalScreen = (props) => (
  <View style={styles.container}>
    <Text style={styles.title}>This is a Modal</Text>

    <NavButton destLabel="Work" buttonHandler={props.onButtonPress} />
  </View>
);

ModalScreen.propTypes = {
  onButtonPress: PropTypes.func.isRequired,
};

export default ModalScreen;
