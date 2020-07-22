/* eslint-disable */
import React from 'react';
import { View, Text, } from 'react-native';

import {
    createAppContainer,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Chats from './Root/Chats'
import Calls from './Root/Calls'
import ChatScreen from './Root/ChatScreen'

// const ChatStack = createStackNavigator(
//     {
//         Chats: {
//             screen: Chats,
//             navigationOptions: {
//                 headerShown: false,
//             },
//         },

//         ChatScreen: {
//             screen: ChatScreen,
//             navigationOptions: {
//                 headerShown: true,
//             },
//         },

//     },
//     {
//         initialRouteName: 'Chats',
//     }
// );

const WhatsApp = createMaterialTopTabNavigator(
    {
        Chats: {
            screen: Chats,
        },
        Calls: {
            screen: Calls,
        },
    },
    {
        initialRouteName: 'Chats',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#80b3ad',
            upperCaseLabel: true,
            indicatorStyle: { backgroundColor: '#FFFFFF' },
            style: { backgroundColor: '#366056' },
        },
    }
)

const AppStack = createStackNavigator(
    {
        WhatsApp: WhatsApp,
        ChatScreen: ChatScreen,
    },
    {
        initialRouteName: 'WhatsApp',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#366056',
            },
            headerTitleStyle: {
                color: '#FFFFFF'
            },
            headerTintColor: '#FFFFFF'
            
        },
    }
);

export default createAppContainer(AppStack);
