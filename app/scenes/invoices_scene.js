import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#79BD8F',
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

const InvoicesScreen = (props) => (
  <View style={styles.container}>
    <Text style={styles.title}>Invoices</Text>
  </View>
);

InvoicesScreen.propTypes = {
};

export default InvoicesScreen;
