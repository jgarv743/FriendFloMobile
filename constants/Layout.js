/* AppStyles holds the basic styles and colors for use within the app */
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import color from './Colors';

// Style sheet
export default StyleSheet.create({
  screenBackground: {
    flex: 1,
    backgroundColor: color.primLight,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 200,
    color: color.text,
  },
});
