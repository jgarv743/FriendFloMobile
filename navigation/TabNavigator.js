/* TabNavigator sets all the screens that are in use for the app right now. All pages must be imported to here in order to display them.
tutorial for tabs can be found @ https://hackernoon.com/getting-started-with-react-navigation-the-navigation-solution-for-react-native-ea3f4bd786a4*/
import React, { Component } from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
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
},
    // Edit the styling of the tab bar
    {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'white',
            style: {
                backgroundColor: 'green',
            },
            indicatorStyle: {
                backgroundColor: 'white',
                top: 0,
            },
        },
    },
);
