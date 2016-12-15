'use strict';

import React, { Component } from 'react';

const StatusBar = require('./StatusBar');

const styles = require('../styles.js')

class CrashReportingScene extends Component {
  render() {
    return (
      <StatusBar title={this.props.title} />
    );
  }
}

module.exports = CrashReportingScene;
