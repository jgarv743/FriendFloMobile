/* Screen to handle the betting functions of the app */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../constants/Layout';

export default class SettingScreen extends Component {
    render() {
        return(
            <Text style={styles.text}>
                Settings
            </Text>
        );
    }
};
