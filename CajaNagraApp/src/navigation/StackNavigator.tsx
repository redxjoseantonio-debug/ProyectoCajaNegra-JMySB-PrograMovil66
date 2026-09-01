import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabsNavigator } from './TabsNavigator';

const Stack = createBottomTabNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Tabs" component={TabsNavigator} />
        </Stack.Navigator>
    );
};1