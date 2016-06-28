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

const GigScreen = ({ gig }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{gig.name}</Text>
  </View>
);

GigScreen.propTypes = {
  gig: PropTypes.object.isRequired,
};

export default GigScreen;
