import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import { Button } from 'react-native-vector-icons/MaterialIcons';
import Colors from '../styles/colors';

import { Separator, TouchableRow } from 'panza';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grayBackground,
    marginBottom: 50,
  },
  spacer: {
    height: 36,
    margin: 15,
    alignSelf: 'stretch',
  },
  buttonStyle: {
    // margin: 15,
  },
  buttonText: {
    color: Colors.white,
  },
  list: {
    flex: 1,
  },
  listRow: {
    backgroundColor: Colors.white,
  },
});

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});

function GigsScreen({ gigs, onModalButtonPress, onRowPress }) {
  const dataSource = ds.cloneWithRows(gigs);

  return (
    <View style={styles.container}>
      <ListView
        dataSource={dataSource}
        style={styles.list}
        renderSeparator={(a, b) => <Separator key={a + b} />}
        renderRow={(rowData) => (
          <TouchableRow
            style={styles.listRow}
            key={rowData.id}
            primaryText={rowData.name}
            onPress={() => onRowPress(rowData.id, rowData.name)}
          />
        )}
      />
      <View style={styles.spacer}>
        <Button style={styles.buttonStyle} name="add" onPress={onModalButtonPress}>
          <Text style={styles.buttonText}>Add Gig</Text>
        </Button>
      </View>
    </View>
  );
}

GigsScreen.propTypes = {
  gigs: PropTypes.object,
  onModalButtonPress: PropTypes.func.isRequired,
  onRowPress: PropTypes.func.isRequired,
};

export default GigsScreen;
