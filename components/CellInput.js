'use strict';

import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

const styles = require('../styles.js')

class CellInput extends Component {
  render() {
    return (
      <View style={[styles.sectionContainer]}>
        <TextInput
          style={[styles.text, styles.textInput]}
          placeholder={this.props.placeholder}
          clearButtonMode='while-editing'
          autoCapitalize='none'
          autoCorrect={false}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          />
      </View>
    );
  }
}

module.exports = CellInput;
