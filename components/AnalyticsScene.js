'use strict';

import React, { Component } from 'react';
import { View, ScrollView, SegmentedControlIOS, Picker } from 'react-native';

const StatusBar = require('./StatusBar');
const SectionHeader = require('./SectionHeader');
const SectionFooter = require('./SectionFooter');
const Separator = require('./Separator');
const CellButton = require('./CellButton');
const CellInput = require('./CellInput');
const CellSwitch = require('./CellSwitch');

const styles = require('../styles.js')

class AnalyticsScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenName: '',
      userID: '',
      userPropertyName: '',
      userPropertyValue: '',
      event: '',
      eventValue: '',
      favoriteSport: '',
    };
  }

  render() {
    const analyticsEnabled = this.props.analyticsEnabled;
    const analyticsEnabledFooterText = analyticsEnabled ? "Disable Firebase Analytics." : "Enable Firebase Analytics to send screen name, user ID, user property, custom events.";
    return (
      <View style={{flex: 1}}>
        <StatusBar title={this.props.title} />
        <ScrollView style={styles.scrollView}>
          <SectionHeader />
          <CellSwitch
            text="Analytics"
            value={analyticsEnabled}
            onValueChange={this.props.onAnalyticsEnableChange}
            />
          <SectionFooter text={analyticsEnabledFooterText} />
          {analyticsEnabled &&
            <View>
              <SectionHeader text="Screen Name" />
              <CellInput
                placeholder="Screen Name"
                value={this.state.screenName}
                onChangeText={(text) => {
                  this.setState({screenName: text})
                }}
                />
              <SectionFooter />
              <SectionHeader />
              <CellButton
                text="Log Screen Name"
                onPress={() => {
                  this.props.onLogSceneNamePress(this.state.screenName);
                }}
                />
              <SectionFooter text="Tap to send screen name to Firebase Analytics." />
              <SectionHeader text="User ID" />
              <CellInput
                placeholder="User ID"
                value={this.state.userID}
                onChangeText={(text) => {
                  this.setState({userID: text})
                }}
                />
              <SectionFooter />
              <SectionHeader />
              <CellButton
                text="Log User ID"
                onPress={() => {
                  this.props.onLogUserIDPress(this.state.userID);
                }}
                />
              <SectionFooter text="Tap to send user ID to Firebase Analytics." />
              <SectionHeader text="User Property" />
              <CellInput
                placeholder="Property Name"
                value={this.state.userPropertyName}
                onChangeText={(text) => {
                  this.setState({userPropertyName: text})
                }}
                />
              <Separator />
              <CellInput
                placeholder="Property Value"
                value={this.state.userPropertyValue}
                onChangeText={(text) => {
                  this.setState({userPropertyValue: text})
                }}
                />
              <SectionFooter />
              <SectionHeader />
              <CellButton
                text="Log User Property"
                onPress={() => {
                  this.props.onLogUserPropertyPress(this.state.userPropertyName, this.state.userPropertyValue);
                }}
                />
              <SectionFooter text="Tap to send user property to Firebase Analytics." />
              <SectionHeader text="Event" />
              <CellInput
                placeholder="Event"
                value={this.state.event}
                onChangeText={(text) => {
                  this.setState({event: text})
                }}
                />
              <Separator />
              <CellInput
                placeholder="Value"
                value={this.state.eventValue}
                onChangeText={(text) => {
                  this.setState({eventValue: text})
                }}
                />
              <SectionFooter />
              <SectionHeader />
              <CellButton
                text="Log Event"
                onPress={() => {
                  this.props.onLogEventPress(this.state.event, this.state.eventValue);
                }}
                />
              <SectionFooter text="Tap to send event to Firebase Analytics." />
              <SectionHeader text="Firebase Test App" />
              <SectionHeader text="Favorite Sport User Property" />
              <CellInput
                placeholder="Favorite Sport"
                value={this.state.favoriteSport}
                onChangeText={(text) => {
                  this.setState({favoriteSport: text})
                }}
                />
              <SectionFooter />
              <SectionHeader />
              <CellButton
                text="Log Favorite Sport"
                onPress={() => {
                  this.props.onLogFavoriteSportUserPropertyPress(this.state.favoriteSport);
                }}
                />
              <SectionFooter text="Tap to send favoriteSport user property to Firebase Analytics." />
              <SectionHeader text="Segmented Control Value Change Event" />
              <View style={styles.sectionContainer}>
                <SegmentedControlIOS
                  values={this.props.values}
                  selectedIndex={this.props.values.indexOf(this.props.selectedValue)}
                  tintColor={styles.constants.tintColor}
                  onChange={(event) => {
                    this.props.onSegmentedControlValueChange(this.props.values[event.nativeEvent.selectedSegmentIndex]);
                  }}
                  />
              </View>
              <SectionFooter text="Select your favorite value in segmented control to send segmentedControlValueChange event to Firebase Analytics." />
              <SectionHeader text="Picker Value Change Event" />
              <View style={styles.sectionContainer}>
                <Picker
                  selectedValue={this.props.selectedValue}
                  onValueChange={(value) => {
                    this.props.onPickerValueChange(value)
                  }}>
                    {this.props.values.map((value, index) => (<Picker.Item label={value} value={value} key={value} />))}
                </Picker>
              </View>
              <SectionFooter text="Select your favorite value in picker to send pickerValueChange event to Firebase Analytics." />
              <SectionHeader text="Note" />
              <SectionFooter text="We also send event tabBarValueChange event to Firebase Analytics when you switch between tabs." />
            </View>
          }
        </ScrollView>
      </View>
    );
  }
}

module.exports = AnalyticsScene;
