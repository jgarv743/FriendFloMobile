/* AppStyles holds the basic styles and colors for use within the app */
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

// Colors
const money = '#85bb65';

// Style sheet
export default StyleSheet.create({
  screenBackground: {
    flex: 1,
    backgroundColor: '#85bb65',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 200,
    color: 'black',
  },
});
