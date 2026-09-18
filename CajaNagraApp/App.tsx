import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { navigationRef } from './src/navigation/NavigatorService';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LanguageProviver } from './src/contexts/LanguageContext';

export default function App() {
    return (
        <GestureHandlerRootView style={{flex: 1 }}>
        <ThemeProvider>
        <LanguageProviver>
        <NavigationContainer ref={navigationRef}>
            <StackNavigator />
        </NavigationContainer>
        </LanguageProviver>
        </ThemeProvider>
        </GestureHandlerRootView>
    );
}