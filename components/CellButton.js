'use strict';

import React, { Component } from 'react';
import { TouchableHighlight, Text } from 'react-native';

const styles = require('../styles.js')

class CellButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={[styles.sectionContainer]}
        underlayColor='#D9D9D9'
        onPress={this.props.onPress}>
          <Text style={styles.actionText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

module.exports = CellButton;
