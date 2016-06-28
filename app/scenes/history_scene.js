import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
});

const HistoryScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>History</Text>
  </View>
);

HistoryScreen.propTypes = {
};

export default HistoryScreen;
