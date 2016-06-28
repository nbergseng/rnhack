import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../styles/colors';

import Button from 'react-native-button';

const styles = StyleSheet.create({
  button: {
    height: 44,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: Colors.okBlue,
    borderColor: Colors.okBlue,
    margin: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    alignSelf: 'center',
  },
  opacity: {
    opacity: 0.5,
  },
});

function FullButton(props) {
  // TODO: native button craps on opacity for no good reason.
  const propsWithDefaultStyles = {
    ...props,
    style: [styles.buttonText, props.style],
    containerStyle: [styles.button, props.containerStyle],
    styleDisabled: props.disabledStyle || styles.opacity,
  };
  return (
    <Button
      {...propsWithDefaultStyles}
    />
  );
}

export default FullButton;
