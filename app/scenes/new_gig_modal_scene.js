import React, { Component, PropTypes } from 'react';
import isEmpty from 'lodash/fp/isEmpty';
import { View, StyleSheet } from 'react-native';

import Colors from '../styles/colors';

import {
  InputGroup,
  InputRow,
} from 'panza';

import Button from '../components/full_button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: Colors.white,
    marginBottom: 30,
  },
});

class NewGigModalScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  render() {
    const { onCreateGigPress } = this.props;
    return (
      <View style={styles.container}>
        <InputGroup inset={16}>
          <InputRow
            placeholder="Gig Name"
            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}
          />
        </InputGroup>
        <Button
          disabled={isEmpty(this.state.name)}
          onPress={() => onCreateGigPress(this.state)}
        >
          Save
        </Button>
      </View>
    );
  }
}

NewGigModalScreen.propTypes = {
  onCreateGigPress: PropTypes.func.isRequired,
};

export default NewGigModalScreen;
