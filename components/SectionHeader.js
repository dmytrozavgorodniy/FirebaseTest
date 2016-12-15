'use strict';

import React, { Component } from 'react';
import { View, Text } from 'react-native';

const styles = require('../styles.js')

class SectionHeader extends Component {
  render() {
    const text = this.props.text ? this.props.text.toUpperCase() : null
    return (
      <View style={styles.sectionHeader}>
        {text &&
          <Text style={styles.sectionHeaderText}>{text}</Text>}
      </View>
    );
  }
}

module.exports = SectionHeader;
