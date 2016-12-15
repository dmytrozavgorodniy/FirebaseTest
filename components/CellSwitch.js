'use strict';

import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';

const styles = require('../styles.js')

class CellInput extends Component {
  render() {
    return (
      <View style={[styles.sectionContainer, styles.horizontalStack]}>
        <Text style={styles.text}>{this.props.text}</Text>
        <Switch
          onTintColor={styles.constants.tintColor}
          value={this.props.value}
          onValueChange={this.props.onValueChange}
          />
      </View>
    );
  }
}

module.exports = CellInput;
