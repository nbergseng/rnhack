import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Button from 'react-native-button';

const styles = StyleSheet.create({
  signin: {
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#FF3366',
    borderColor: '#FF3366',
  },
});

function FormButton({ isDisabled, onPress, children }) {
  return (
    <View style={styles.signin}>
      <Button
        style={styles.button}
        isDisabled={isDisabled}
        onPress={onPress}
      >
        {children}
      </Button>
    </View>
  );
}

FormButton.propTypes = {
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

module.exports = FormButton;
