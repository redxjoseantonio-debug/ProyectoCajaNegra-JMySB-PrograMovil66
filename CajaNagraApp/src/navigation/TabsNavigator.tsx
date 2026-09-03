import React from 'react';
import { Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import AddItemScreen from '../screens/AddItemScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: () => (<Image source={require('../../assets/Home.png')} style={{ width: 36, height: 36 }} />) }} />
            <Tab.Screen name="Add Item" component={AddItemScreen} options={{ tabBarIcon: () => (<Image source={require('../../assets/Add.png')} style={{ width: 36, height: 36 }} />) }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: () => (<Image source={require('../../assets/Profile.png')} style={{ width: 36, height: 36 }} />) }} />
        </Tab.Navigator>
    );
};