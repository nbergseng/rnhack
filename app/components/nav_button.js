import React, { PropTypes } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: '#3C5773',
    alignSelf: 'stretch',
  },
  label: {
    color: '#F4F4E9',
    textAlign: 'center',
  },
});

const NavButton = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.buttonHandler}>
    <Text style={styles.label}>Go to {props.destLabel}</Text>
  </TouchableOpacity>
);

NavButton.propTypes = {
  destLabel: PropTypes.string.isRequired,
  buttonHandler: PropTypes.func.isRequired,
};

export default NavButton;
