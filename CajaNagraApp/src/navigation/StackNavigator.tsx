import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigator from './TabsNavigator';
import LoginScreen from '../screens/LoginScreen';
import { useTheme } from '../contexts/ThemeContext';
import RegisterScreen from '../screens/RegisterScreen';
import { useAuth } from '../contexts/AuthContext';

export type RootStackParamList ={
    Login: undefined;
    Tabs: undefined;
    Register: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
    
    const {theme} = useTheme();
    const { user, loading } = useAuth();

    if(loading) return null;
    
    return (
        <Stack.Navigator screenOptions={{headerStyle:{
            backgroundColor: theme.tabBar,
        },
        headerTintColor: theme.text, headerTitleStyle: {
            fontSize: 19,
            fontWeight: '700',
        },
        headerShadowVisible: false,}}>
            {user ? (
                <Stack.Screen name="Tabs" component={TabsNavigator} />
            ) : (
            <>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
            </>
        )}
        </Stack.Navigator>
    );
};