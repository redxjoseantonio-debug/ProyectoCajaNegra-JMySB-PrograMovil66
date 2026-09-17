import React from 'react';
import { Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../contexts/ThemeContext';

import HomeScreen from '../screens/HomeScreen';
import AddItemScreen from '../screens/AddItemScreen';
import ProfileScreen from '../screens/ProfileScreen';

export type TabsParamList={
    Home: undefined,
    Profile: undefined,
    AddItem: undefined,
};

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator () {

    const { theme, isDark} = useTheme();

    return (
        <Tab.Navigator screenOptions={{headerStyle:{backgroundColor: theme.tabBar,},headerTintColor: theme.text,tabBarStyle:{
            backgroundColor: theme.tabBar,
            borderTopColor: isDark ? '#333' : '#E0E0E0',
        },
        tabBarActiveTintColor: isDark ? "#FFFFFF" : '#007AFF',
        tabBarInactiveTintColor: isDark ? '#888888' : '#777777',}}>
            <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: () => (<Image source={require('../../assets/Home.png')} style={{ width: 36, height: 36 }} />) }} />
            <Tab.Screen name="AddItem" component={AddItemScreen} options={{ tabBarIcon: () => (<Image source={require('../../assets/Add.png')} style={{ width: 36, height: 36 }} />) }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: () => (<Image source={require('../../assets/Profile.png')} style={{ width: 36, height: 36 }} />) }} />
        </Tab.Navigator>
    );
};