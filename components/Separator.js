'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';

const styles = require('../styles.js')

class Separator extends Component {
  render() {
    return (
      <View style={styles.separator} />
    );
  }
}

module.exports = Separator;
