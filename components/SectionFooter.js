'use strict';

import React, { Component } from 'react';
import { View, Text } from 'react-native';

const styles = require('../styles.js')

class SectionFooter extends Component {
  render() {
    const text = this.props.text ? this.props.text : null
    return (
      <View style={styles.sectionFooter}>
        {text &&
          <Text style={styles.sectionFooterText}>{text}</Text>}
      </View>
    );
  }
}

module.exports = SectionFooter;
