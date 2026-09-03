import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabsNavigator } from './TabsNavigator';
import LoginScreen from '../screens/LoginScreen';

export type RootStackParamList ={
    Login: undefined,
    Tabs: undefined,

}

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Tabs" component={TabsNavigator} />
            <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
    );
};1