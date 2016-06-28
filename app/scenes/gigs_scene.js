import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import { Button } from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';
import Colors from '../styles/colors';

import { Separator, TouchableRow } from 'panza';

const navHeight = 45; // TODO: temp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grayBackground,
    marginTop: navHeight,
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
  const rows = _.map(gigs, (gig) => gig);
  const dataSource = ds.cloneWithRows(rows);

  return (
    <View style={styles.container}>
      <ListView
        dataSource={dataSource}
        style={styles.list}
        renderSeparator={(a, b) => <Separator key={a + b} />}
        renderRow={(rowData) => (
          <TouchableRow style={styles.listRow} key={rowData.name} primaryText={rowData.name} onPress={() => onRowPress(rowData.name)} />
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
