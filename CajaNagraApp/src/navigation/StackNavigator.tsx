import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigator from './TabsNavigator';
import LoginScreen from '../screens/LoginScreen';
import { useTheme } from '../contexts/ThemeContext';

export type RootStackParamList ={
    Login: undefined;
    Tabs: undefined;

}

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
    
    const {theme} = useTheme();

    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerStyle:{
            backgroundColor: theme.tabBar,
        },
        headerTintColor: theme.text, headerTitleStyle: {
            fontSize: 19,
            fontWeight: '700',
        },
        headerShadowVisible: false,}}>
            <Stack.Screen name="Tabs" component={TabsNavigator}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
    );
};