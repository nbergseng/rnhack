import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F9CB2',
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

const GigsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Gigs</Text>
  </View>
);

GigsScreen.propTypes = {
};

export default GigsScreen;
