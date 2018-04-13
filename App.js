/* This file export App to be run by index.js, initialized to run Tabs */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Tabs } from './navigation/TabNavigator';
import styles from './constants/Layout';

export default class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  getColors = () => {
    
  }

  render() {
    return (
      <View style={styles.screenBackground}>
        <Tabs />
      </View>
    );
  }
};
