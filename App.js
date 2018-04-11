/* This file export App to be run by index.js, initialized to run Tabs */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Tabs } from './navigation/TabNavigator';
import styles from './constants/AppStyles';

export default class App extends Component {
  render() {
    return (
      <View style={styles.screenBackground}>
        <Tabs />
      </View>
    );
  }
};
