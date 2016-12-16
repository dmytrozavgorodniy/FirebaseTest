/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, TabBarIOS } from 'react-native';

const AnalyticsScene = require('./components/AnalyticsScene');
const CrashReportingScene = require('./components/CrashReportingScene');
const NotificationsScene = require('./components/NotificationsScene');

const FirebaseAnalytics = require('react-native-firebase-analytics');
import FirebaseCrash from 'react-native-firebase-crash-report';

const styles = require('./styles.js')

export default class FirebaseTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'analytics',
      analyticsEnabled: true,
      values: ['One', 'Two', 'Three', 'Four', 'Five'],
      selectedValue: 'Three',
    };
  }

  // Firebase Analytics

  analyticsEnabled = (isEnabled) => {
    FirebaseAnalytics.setEnabled(isEnabled);
    console.log(`[FirebaseTestApp] Analytics isEnabled=${isEnabled}`);
  }

  logScreenName = (screenName) => {
    FirebaseAnalytics.setScreenName(screenName);
    console.log(`[FirebaseTestApp] Log Screen Name: ${screenName}`);
  }

  logUserID = (userID) => {
    FirebaseAnalytics.setUserId(userID);
    console.log(`[FirebaseTestApp] Log user ID: ${userID}`);
  }

  logUserProperty = (name, value) => {
    FirebaseAnalytics.setUserProperty(name, value);
    console.log(`[FirebaseTestApp] Log user property: ${name} with value: ${value}`);
  }

  logEvent = (event, value) => {
    const parameters = {
      newValue: value
    };
    FirebaseAnalytics.logEvent(event, parameters);
    console.log(`[FirebaseTestApp] Log event: ${event} with new value: ${value}`);
  }

  // Firebase Crash Report
  crashReportLog = (message) => {
    console.log(`[FirebaseTestApp] Crash Report Log: ${message}`);
    FirebaseCrash.log(message);
  }

  crashReportLogcat = (message) => {
    console.log(`[FirebaseTestApp] Crash Report Logcat: ${message}`);
    FirebaseCrash.logcat(message);
  }

  // TODO: weird name for function...
  crashReportReport = (message) => {
    console.log(`[FirebaseTestApp] Crash Report Report: ${message}`);
    FirebaseCrash.report(message);
  }

  // Lifecycle

  componentWillMount() {
    this.analyticsEnabled(this.state.analyticsEnabled);
  }

  // Analytics Scene Callbacks

  onAnalyticsEnableChange = (isEnabled) => {
    // Side effect: enable/disable firebase analytics
    this.analyticsEnabled(isEnabled);

    // Update state
    this.setState({
      analyticsEnabled: isEnabled,
    });
  }

  onLogSceneName = (screenName) => {
    // Side effect: log screen name to firebase analytics
    this.logScreenName(screenName);
  }

  onLogUserID = (userID) => {
    // Side effect: log user ID to firebase analytics
    this.logUserID(userID);
  }

  onLogUserProperty = (name, value) => {
    // Side effect: log user property to firebase analytics
    this.logUserProperty(name, value);
  }

  onLogEventPress = (event, value) => {
    // Side effect: log event to firebase analytics
    this.logEvent(event, value);
  }

  onLogFavoriteSportUserPropertyPress = (value) => {
    // Side effect: log user property to firebase analytics
    this.logUserProperty('favoriteSport', value);
  }

  onSegmentedControlValueChange = (value) => {
    // Side effect: log event to firebase analytics
    this.logEvent('segmentedControlValueChange', value);

    // Update state
    this.setState({
      selectedValue: value,
    });
  }

  onPickerValueChange = (value) => {
    // Side effect: log event to firebase analytics
    this.logEvent('pickerValueChange', value);

    // Update state
    this.setState({
      selectedValue: value,
    });
  }

  // Crash Reporting Scene Callbacks

  onCrashReportLogPress = (message) => {
    // Side effect: crash report log to firebase crash report
    this.crashReportLog(message);
  }

  onCrashReportLogcatPress = (message) => {
    // Side effect: crash report logcat to firebase crash report
    this.crashReportLogcat(message);

  }

  // TODO: weird name for function...
  onCrashReportReportPress = (message) => {
    // Side effect: crash report report to firebase crash report
    this.crashReportReport(message);
  }

  // Private
  _tabBarItemOnPress(selectedTab) {
    // Side effect: log event to firebase analytics
    this.logEvent('tabBarValueChange', selectedTab);

    // Update state
    this.setState({
      selectedTab: selectedTab,
    });
  }

  // Render
  render() {
    return (
      <TabBarIOS tintColor={styles.constants.tintColor}>
        <TabBarIOS.Item
          title="Analytics"
          icon={require('./img/firebase_analytics_icon.png')}
          selected={this.state.selectedTab === 'analytics'}
          onPress={() => {
            this._tabBarItemOnPress('analytics');
          }}>
          <AnalyticsScene
            title="Analytics"
            analyticsEnabled={this.state.analyticsEnabled}
            selectedValue={this.state.selectedValue}
            values={this.state.values}
            onAnalyticsEnableChange={this.onAnalyticsEnableChange}
            onLogSceneNamePress={this.onLogSceneName}
            onLogUserIDPress={this.onLogUserID}
            onLogUserPropertyPress={this.onLogUserProperty}
            onLogEventPress={this.onLogEventPress}
            onLogFavoriteSportUserPropertyPress={this.onLogFavoriteSportUserPropertyPress}
            onSegmentedControlValueChange={this.onSegmentedControlValueChange}
            onPickerValueChange={this.onPickerValueChange}
            />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Crash Reporting"
          icon={require('./img/firebase_crash_reporting_icon.png')}
          selected={this.state.selectedTab === 'crash-reporting'}
          onPress={() => {
            this._tabBarItemOnPress('crash-reporting');
          }}>
          <CrashReportingScene
            title="Crash Reporting"
            onLogPress={this.onCrashReportLogPress}
            onLogcatPress={this.onCrashReportLogcatPress}
            onReportPress={this.onCrashReportReportPress}
            />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Notifications"
          icon={require('./img/firebase_notifications_icon.png')}
          selected={this.state.selectedTab === 'notifications'}
          onPress={() => {
            this._tabBarItemOnPress('notifications');
          }}>
          <NotificationsScene title="Notifications" />
        </TabBarIOS.Item>
      </TabBarIOS>

    );
  }
}

AppRegistry.registerComponent('FirebaseTest', () => FirebaseTest);
