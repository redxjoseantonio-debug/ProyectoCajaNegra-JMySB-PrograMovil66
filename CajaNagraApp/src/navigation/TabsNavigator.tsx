import React from 'react';
import { Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../contexts/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

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

return(
    <Tab.Navigator screenOptions={{headerStyle:{backgroundColor: theme.tabBar,},headerTintColor: theme.text, tabBarStyle: {
        backgroundColor: theme.tabBar,
        borderTopColor: isDark ? '#333' : '#E0E0E0',
    },
    tabBarActiveTintColor: isDark ? '#FFFFFF' : '#007AFF'}}>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({color})=>(<Ionicons name="home" size={24} color={color}/>),}}/>
        <Tab.Screen name="AddItem" component={AddItemScreen} options={{tabBarIcon: ({color})=>(<Ionicons name="add-circle" size={24} color={color}/>),}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon: ({color})=>(<Ionicons name="person-circle" size={24} color={color}/>),}}/>
    </Tab.Navigator>
);
}