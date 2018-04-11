// tutorial for tabs can be found @ https://hackernoon.com/getting-started-with-react-navigation-the-navigation-solution-for-react-native-ea3f4bd786a4
import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

// Import the screens here
import Exchange from '../screens/ExchangeScreen';
import Bet from '../screens/BetScreen';

// Assign screens to each tab here
export const Tabs = TabNavigator({
    Exchange: {
        screen: Exchange,
    },
    Bet: {
        screen: Bet,
    },
});