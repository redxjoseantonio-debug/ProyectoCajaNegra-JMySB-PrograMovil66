import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { navigationRef } from './src/navigation/NavigatorService';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LanguageProviver } from './src/contexts/LanguageContext';
import { AuthProvider } from './src/contexts/AuthContext';
import { ArticleesProvider } from './src/contexts/ArticleContext';

export default function App() {
    return (
        <GestureHandlerRootView style={{flex: 1 }}>
            <AuthProvider>
                <ThemeProvider>
                    <LanguageProviver>
                        <ArticleesProvider>
                            <NavigationContainer ref={navigationRef}>
                                <StackNavigator />
                            </NavigationContainer>
                        </ArticleesProvider>
                    </LanguageProviver>
                </ThemeProvider>
            </AuthProvider>
        </GestureHandlerRootView>
    );
}