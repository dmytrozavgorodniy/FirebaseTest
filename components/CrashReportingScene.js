'use strict';

import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

const StatusBar = require('./StatusBar');
const SectionHeader = require('./SectionHeader');
const SectionFooter = require('./SectionFooter');
const CellButton = require('./CellButton');
const CellInput = require('./CellInput');

const styles = require('../styles.js')

class CrashReportingScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logMessage: '',
      logcatMessage: '',
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar title={this.props.title} />
        <ScrollView style={styles.scrollView}>
          <SectionHeader text="Log" />
          <CellInput
            placeholder="Message"
            value={this.state.logMessage}
            onChangeText={(text) => {
              this.setState({logMessage: text})
            }}
            />
          <SectionFooter />
          <SectionHeader />
          <CellButton
            text="Log"
            onPress={() => {
              this.props.onLogPress(this.state.logMessage);
            }}
            />
          <SectionFooter text="Tap to send log to Firebase Crash Report." />
          <SectionHeader text="Logcat" />
          <CellInput
            placeholder="Message"
            value={this.state.logcatMessage}
            onChangeText={(text) => {
              this.setState({logcatMessage: text})
            }}
            />
          <SectionFooter />
          <SectionHeader />
          <CellButton
            text="Logcat"
            onPress={() => {
              this.props.onLogcatPress(this.state.logcatMessage);
            }}
            />
          <SectionFooter text="Tap to send logcat to Firebase Crash Report." />
          <SectionHeader text="Report" />
          <CellInput
            placeholder="Message"
            value={this.state.reportMessage}
            onChangeText={(text) => {
              this.setState({reportMessage: text})
            }}
            />
          <SectionFooter />
          <SectionHeader />
          <CellButton
            text="Report"
            onPress={() => {
              this.props.onReportPress(this.state.reportMessage);
            }}
            />
          <SectionFooter text="Tap to send report to Firebase Crash Report." />
        </ScrollView>
      </View>
    );
  }
}

module.exports = CrashReportingScene;
