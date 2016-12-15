'use strict';

import React, { Component } from 'react';

const StatusBar = require('./StatusBar');

const styles = require('../styles.js')

class NotificationsScene extends Component {
  render() {
    return (
      <StatusBar title={this.props.title} />
    );
  }
}

module.exports = NotificationsScene;
